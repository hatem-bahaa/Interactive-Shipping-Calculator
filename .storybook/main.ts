import path from 'node:path'
import { fileURLToPath } from 'node:url'
import type { StorybookConfig } from '@storybook/react-vite'
import type { Plugin, PluginOption } from 'vite'
import { mergeConfig } from 'vite'

const __dirname = path.dirname(fileURLToPath(import.meta.url))

// Workaround for a Storybook 10 + Vite bug on Windows: when the project
// path contains spaces, the generated `storybook-stories.js` virtual
// module is keyed by absolute paths while `index.json` references
// stories by project-relative paths, causing `importers[path]` to be
// undefined and the preview to hang. We rewrite the lookup to fall
// back to a suffix match.
//
// TODO: Check if this is fixed upstream and remove when no longer needed.
// Tracking issue: https://github.com/storybookjs/storybook/issues/XXXXX
// The React Router Vite plugin throws "requires the use of a Vite config
// file" when Storybook resolves the host project's vite.config.ts. Strip
// it from the plugin tree before Storybook starts the dev server.
const stripReactRouter = (plugins: readonly PluginOption[]): PluginOption[] =>
  plugins.flatMap((plugin) => {
    if (Array.isArray(plugin)) return stripReactRouter(plugin)
    if (
      plugin &&
      typeof plugin === 'object' &&
      typeof (plugin as { name?: unknown }).name === 'string' &&
      (plugin as { name: string }).name.includes('react-router')
    ) {
      return []
    }
    return [plugin]
  })

const fixStorybookImporterLookup = (): Plugin => ({
  name: 'fix-storybook-importer-lookup',
  enforce: 'post',
  transform(code, id) {
    if (!id.includes('storybook-stories.js')) return null
    if (!code.includes('importers[path]')) return null

    return code.replace(
      /export async function importFn\(path\)\s*\{[\s\S]*?\n\}/,
      [
        'export async function importFn(path) {',
        '  let importer = importers[path];',
        '  if (!importer) {',
        "    const suffix = path.startsWith('./') ? path.slice(2) : path;",
        '    const match = Object.keys(importers).find((key) => key.endsWith(suffix));',
        '    if (match) importer = importers[match];',
        '  }',
        "  if (!importer) throw new Error('Storybook could not find an importer for ' + path);",
        '  return await importer();',
        '}',
      ].join('\n')
    )
  },
})

const config: StorybookConfig = {
  stories: [
    '../stories/**/*.mdx',
    '../stories/**/*.stories.@(js|jsx|mjs|ts|tsx)',
  ],
  addons: [
    '@storybook/addon-a11y',
    '@storybook/addon-docs',
    'storybook-addon-remix-react-router',
  ],
  framework: '@storybook/react-vite',
  viteFinal: async (viteConfig) => {
    viteConfig.plugins = stripReactRouter(viteConfig.plugins ?? [])
    return mergeConfig(viteConfig, {
      resolve: {
        alias: {
          '~': path.resolve(__dirname, '../app'),
        },
      },
      plugins: [fixStorybookImporterLookup()],
    })
  },
}

export default config
