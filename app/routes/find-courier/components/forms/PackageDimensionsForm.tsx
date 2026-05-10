import { zodResolver } from '@hookform/resolvers/zod'
import Box from '@mui/material/Box'
import FormControlLabel from '@mui/material/FormControlLabel'
import InputAdornment from '@mui/material/InputAdornment'
import Stack from '@mui/material/Stack'
import Switch from '@mui/material/Switch'
import TextField from '@mui/material/TextField'
import Typography from '@mui/material/Typography'
import { Controller, useForm } from 'react-hook-form'

import {
  PACKAGE_DEFAULTS,
  PackageDimensionsSchema,
  type PackageDimensions,
} from '../../schemas'
import { useContext } from 'react'
import { ShippingFormContext } from '~/context/ShippingFormContext'
import { useNavigate } from 'react-router'
import { ShippingFormIds } from '~/lib/helpers'

export const PackageDimensionsForm = () => {
  const ctx = useContext(ShippingFormContext)
  const navigate = useNavigate()

  const { control, handleSubmit } = useForm<PackageDimensions>({
    resolver: zodResolver(PackageDimensionsSchema),
    defaultValues: ctx?.packageInfo ?? PACKAGE_DEFAULTS,
  })

  const onSubmit = (data: PackageDimensions) => {
    ctx?.dispatchShippingFormState({ type: 'SET_PACKAGE', payload: data })
    navigate('/couriers-quotes')
  }

  return (
    <Box
      component='form'
      id={ShippingFormIds.PACKAGE}
      onSubmit={handleSubmit(onSubmit)}
      noValidate
    >
      <Stack spacing={3}>
        <Box>
          <Typography variant='h5'>Package dimensions</Typography>
          <Typography variant='body2' color='text.secondary'>
            Tell us about the parcel so we can match the right couriers.
          </Typography>
        </Box>

        <Controller
          control={control}
          name='weightKg'
          render={({ field, fieldState }) => (
            <TextField
              label='Weight'
              required
              type='number'
              value={field.value ?? ''}
              onChange={(event) => {
                const raw = event.target.value
                field.onChange(raw === '' ? undefined : Number(raw))
              }}
              onBlur={field.onBlur}
              inputRef={field.ref}
              slotProps={{
                htmlInput: { min: 0, step: 0.1 },
                input: {
                  endAdornment: (
                    <InputAdornment position='end'>kg</InputAdornment>
                  ),
                },
              }}
              error={Boolean(fieldState.error)}
              helperText={fieldState.error?.message ?? ' '}
              fullWidth
            />
          )}
        />

        <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}>
          <Controller
            control={control}
            name='lengthCm'
            render={({ field, fieldState }) => (
              <TextField
                label='Length'
                required
                type='number'
                value={field.value ?? ''}
                onChange={(event) => {
                  const raw = event.target.value
                  field.onChange(raw === '' ? undefined : Number(raw))
                }}
                onBlur={field.onBlur}
                inputRef={field.ref}
                slotProps={{
                  htmlInput: { min: 0, step: 1 },
                  input: {
                    endAdornment: (
                      <InputAdornment position='end'>cm</InputAdornment>
                    ),
                  },
                }}
                error={Boolean(fieldState.error)}
                helperText={fieldState.error?.message ?? ' '}
                fullWidth
              />
            )}
          />
          <Controller
            control={control}
            name='widthCm'
            render={({ field, fieldState }) => (
              <TextField
                label='Width'
                required
                type='number'
                value={field.value ?? ''}
                onChange={(event) => {
                  const raw = event.target.value
                  field.onChange(raw === '' ? undefined : Number(raw))
                }}
                onBlur={field.onBlur}
                inputRef={field.ref}
                slotProps={{
                  htmlInput: { min: 0, step: 1 },
                  input: {
                    endAdornment: (
                      <InputAdornment position='end'>cm</InputAdornment>
                    ),
                  },
                }}
                error={Boolean(fieldState.error)}
                helperText={fieldState.error?.message ?? ' '}
                fullWidth
              />
            )}
          />
          <Controller
            control={control}
            name='heightCm'
            render={({ field, fieldState }) => (
              <TextField
                label='Height'
                required
                type='number'
                value={field.value ?? ''}
                onChange={(event) => {
                  const raw = event.target.value
                  field.onChange(raw === '' ? undefined : Number(raw))
                }}
                onBlur={field.onBlur}
                inputRef={field.ref}
                slotProps={{
                  htmlInput: { min: 0, step: 1 },
                  input: {
                    endAdornment: (
                      <InputAdornment position='end'>cm</InputAdornment>
                    ),
                  },
                }}
                error={Boolean(fieldState.error)}
                helperText={fieldState.error?.message ?? ' '}
                fullWidth
              />
            )}
          />
        </Stack>

        <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}>
          <Box>
            <Controller
              control={control}
              name='isFragile'
              render={({ field }) => (
                <FormControlLabel
                  control={
                    <Switch
                      checked={field.value}
                      onChange={(_, checked) => field.onChange(checked)}
                      onBlur={field.onBlur}
                      slotProps={{ input: { ref: field.ref } }}
                    />
                  }
                  label='Fragile — handle with care'
                />
              )}
            />
          </Box>
        </Stack>

        <Controller
          control={control}
          name='contents'
          render={({ field, fieldState }) => (
            <TextField
              {...field}
              value={field.value ?? ''}
              label='Contents (optional)'
              placeholder="What's inside? Helps the courier handle it correctly."
              multiline
              minRows={2}
              error={Boolean(fieldState.error)}
              helperText={fieldState.error?.message ?? ' '}
              fullWidth
            />
          )}
        />
      </Stack>
    </Box>
  )
}
