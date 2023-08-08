import {
  SelectProps as MuiSelectProps,
  Select as MuiSelect,
  MenuItem,
} from '@mui/material'

interface SelectProps extends MuiSelectProps {
  options: any[]
}

export function Select(props: SelectProps) {
  const { options } = props
  return (
    <MuiSelect
      label="'event_type"
      placeholder="Select Option"
      className="w-full">
      {options.map((item) => (
        <MenuItem
          className="w-full"
          key={item.id}
          value={item.value.toString()}>
          {item.name}
        </MenuItem>
      ))}
    </MuiSelect>
  )
}
