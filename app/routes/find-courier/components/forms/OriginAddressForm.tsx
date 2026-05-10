import { zodResolver } from '@hookform/resolvers/zod'
import Box from '@mui/material/Box'
import Stack from '@mui/material/Stack'
import TextField from '@mui/material/TextField'
import Typography from '@mui/material/Typography'
import { Controller, useForm } from 'react-hook-form'

import {
  COUNTRIES,
  ORIGIN_ADDRESS_DEFAULTS,
  OriginAddressSchema,
  type OriginAddress,
} from '../../schemas'
import { useContext } from 'react'
import { ShippingFormContext } from '~/context/ShippingFormContext'
import Select from '@mui/material/Select'
import MenuItem from '@mui/material/MenuItem'
import InputLabel from '@mui/material/InputLabel'
import FormControl from '@mui/material/FormControl'
import { FormHelperText } from '@mui/material'
import { ShippingFormIds } from '~/lib/helpers'

export const OriginAddressForm = () => {
  const ctx = useContext(ShippingFormContext)
  const { control, handleSubmit } = useForm<OriginAddress>({
    resolver: zodResolver(OriginAddressSchema),
    defaultValues: ctx?.origin ?? ORIGIN_ADDRESS_DEFAULTS,
  })

  const onSubmit = (data: OriginAddress) => {
    ctx?.dispatchShippingFormState({ type: 'SET_ORIGIN', payload: data })
    ctx?.goNextStep()
  }

  return (
    <Box
      component='form'
      id={ShippingFormIds.ORIGIN}
      onSubmit={handleSubmit(onSubmit)}
      noValidate
    >
      <Stack spacing={3}>
        <Box>
          <Typography variant='h5'>Pickup address</Typography>
          <Typography variant='body2' color='text.secondary'>
            Where are we collecting the parcel from?
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
                label='Contact name'
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
                label='Contact phone'
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
                  disabled
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
              placeholder='e.g. Next to City Stars'
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
