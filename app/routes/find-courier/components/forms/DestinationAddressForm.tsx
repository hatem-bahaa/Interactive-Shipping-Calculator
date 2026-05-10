import { zodResolver } from '@hookform/resolvers/zod'
import Box from '@mui/material/Box'
import Checkbox from '@mui/material/Checkbox'
import Collapse from '@mui/material/Collapse'
import FormControlLabel from '@mui/material/FormControlLabel'
import Stack from '@mui/material/Stack'
import TextField from '@mui/material/TextField'
import Typography from '@mui/material/Typography'
import { Controller, useForm, useWatch } from 'react-hook-form'

import {
  COUNTRIES,
  DESTINATION_ADDRESS_DEFAULTS,
  DestinationAddressSchema,
  type DestinationAddress,
} from '../../schemas'
import { useContext } from 'react'
import { ShippingFormContext } from '~/context/ShippingFormContext'
import FormControl from '@mui/material/FormControl'
import InputLabel from '@mui/material/InputLabel'
import FormHelperText from '@mui/material/FormHelperText'
import Select from '@mui/material/Select'
import MenuItem from '@mui/material/MenuItem'
import { ShippingFormIds } from '~/lib/helpers'

export const DestinationAddressForm = () => {
  const ctx = useContext(ShippingFormContext)
  const { control, handleSubmit } = useForm<DestinationAddress>({
    resolver: zodResolver(DestinationAddressSchema),
    defaultValues: ctx?.destination ?? DESTINATION_ADDRESS_DEFAULTS,
  })

  const country = useWatch({ control, name: 'country' })
  const isInternational = country !== 'EG'

  const onSubmit = (data: DestinationAddress) => {
    ctx?.dispatchShippingFormState({ type: 'SET_DESTINATION', payload: data })
    ctx?.goNextStep()
  }

  return (
    <Box
      component='form'
      id={ShippingFormIds.DESTINATION}
      onSubmit={handleSubmit(onSubmit)}
      noValidate
      sx={{ padding: 0 }}
    >
      <Stack spacing={3}>
        <Box>
          <Typography variant='h5'>Delivery address</Typography>
          <Typography variant='body2' color='text.secondary'>
            Where should the courier deliver the parcel?
          </Typography>
        </Box>

        <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}>
          <Controller
            control={control}
            name='contactName'
            render={({ field, fieldState }) => (
              <TextField
                {...field}
                value={field.value ?? ''}
                label='Recipient name'
                required
                autoComplete='name'
                error={Boolean(fieldState.error)}
                helperText={fieldState.error?.message ?? ' '}
                fullWidth
              />
            )}
          />
          <Controller
            control={control}
            name='contactPhone'
            render={({ field, fieldState }) => (
              <TextField
                {...field}
                value={field.value ?? ''}
                label='Recipient phone'
                required
                placeholder='01XXXXXXXXX'
                autoComplete='tel'
                error={Boolean(fieldState.error)}
                helperText={fieldState.error?.message ?? ' '}
                fullWidth
              />
            )}
          />
        </Stack>

        <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}>
          <Controller
            control={control}
            name='country'
            render={({ field, fieldState }) => (
              <FormControl fullWidth>
                <InputLabel id='country-label'>Country</InputLabel>
                <Select
                  {...field}
                  labelId='country-label'
                  label='Country'
                  required
                  onChange={(event) => {
                    field.onChange(event.target.value)
                  }}
                  autoComplete='country-name'
                  error={Boolean(fieldState.error)}
                  fullWidth
                >
                  {COUNTRIES.map((country) => (
                    <MenuItem key={country.code} value={country.code}>
                      {country.name}
                    </MenuItem>
                  ))}
                </Select>
                <FormHelperText error={Boolean(fieldState.error)}>
                  {fieldState.error?.message ?? ' '}
                </FormHelperText>
              </FormControl>
            )}
          />
          <Controller
            control={control}
            name='governorate'
            render={({ field, fieldState }) => (
              <TextField
                {...field}
                value={field.value ?? ''}
                label='Governorate'
                required
                autoComplete='address-level1'
                error={Boolean(fieldState.error)}
                helperText={fieldState.error?.message ?? ' '}
                fullWidth
              />
            )}
          />
          <Controller
            control={control}
            name='city'
            render={({ field, fieldState }) => (
              <TextField
                {...field}
                value={field.value ?? ''}
                label='City'
                required
                autoComplete='address-level2'
                error={Boolean(fieldState.error)}
                helperText={fieldState.error?.message ?? ' '}
                fullWidth
              />
            )}
          />
        </Stack>

        <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}>
          <Controller
            control={control}
            name='area'
            render={({ field, fieldState }) => (
              <TextField
                {...field}
                value={field.value ?? ''}
                label='Area / district'
                autoComplete='address-level3'
                error={Boolean(fieldState.error)}
                helperText={fieldState.error?.message ?? ' '}
                fullWidth
              />
            )}
          />
          <Controller
            control={control}
            name='postalCode'
            render={({ field, fieldState }) => (
              <TextField
                {...field}
                value={field.value ?? ''}
                label='Postal code'
                autoComplete='postal-code'
                placeholder='11511'
                error={Boolean(fieldState.error)}
                helperText={fieldState.error?.message ?? ' '}
                fullWidth
              />
            )}
          />
        </Stack>

        <Controller
          control={control}
          name='street'
          render={({ field, fieldState }) => (
            <TextField
              {...field}
              value={field.value ?? ''}
              label='Street address'
              required
              autoComplete='street-address'
              error={Boolean(fieldState.error)}
              helperText={fieldState.error?.message ?? ' '}
              fullWidth
            />
          )}
        />

        <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}>
          <Controller
            control={control}
            name='buildingNumber'
            render={({ field, fieldState }) => (
              <TextField
                {...field}
                value={field.value ?? ''}
                label='Building no.'
                error={Boolean(fieldState.error)}
                helperText={fieldState.error?.message ?? ' '}
                fullWidth
              />
            )}
          />
          <Controller
            control={control}
            name='floor'
            render={({ field, fieldState }) => (
              <TextField
                {...field}
                value={field.value ?? ''}
                label='Floor'
                error={Boolean(fieldState.error)}
                helperText={fieldState.error?.message ?? ' '}
                fullWidth
              />
            )}
          />
          <Controller
            control={control}
            name='apartment'
            render={({ field, fieldState }) => (
              <TextField
                {...field}
                value={field.value ?? ''}
                label='Apartment'
                error={Boolean(fieldState.error)}
                helperText={fieldState.error?.message ?? ' '}
                fullWidth
              />
            )}
          />
        </Stack>

        <Controller
          control={control}
          name='landmark'
          render={({ field, fieldState }) => (
            <TextField
              {...field}
              value={field.value ?? ''}
              label='Landmark / nearby'
              placeholder='e.g. Next to Cairo Festival City'
              multiline
              minRows={2}
              error={Boolean(fieldState.error)}
              helperText={fieldState.error?.message ?? ' '}
              fullWidth
            />
          )}
        />
      </Stack>

      <Collapse in={isInternational} unmountOnExit>
        <Controller
          control={control}
          name='confirmInternational'
          render={({ field, fieldState }) => (
            <FormControl error={Boolean(fieldState.error)}>
              <FormControlLabel
                control={
                  <Checkbox
                    checked={field.value ?? false}
                    onChange={(_, checked) => field.onChange(checked)}
                  />
                }
                label='I understand this is an international shipment and additional fees, customs requirements, or delivery delays may apply.'
              />
              {fieldState.error?.message && (
                <FormHelperText>{fieldState.error.message}</FormHelperText>
              )}
            </FormControl>
          )}
        />
      </Collapse>
    </Box>
  )
}
