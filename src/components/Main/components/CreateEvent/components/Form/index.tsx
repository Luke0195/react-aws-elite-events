import { Button } from '@mui/material'
import { InputRoot, SelectRoot } from '@/components/From'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider'
import { DatePicker } from '@mui/x-date-pickers/DatePicker'
import * as S from '../../styles'

export function Form() {
  const options = [
    { id: 1, name: 'Bootcamp', value: 1 },
    { id: 2, name: 'Sport Events', value: 2 },
    { id: 3, name: 'Music Events', value: 3 },
    { id: 4, name: 'Product Launches', value: 4 },
  ]

  return (
    <S.Container className="max-w-xl bg-white d-flex items-center  rounded-sm flex flex-col">
      <h2 className="p-4 bg-blue-600 w-full text-white font-bold text-lg">
        Create New Event
      </h2>
      <form className="p-8 w-full">
        <InputRoot.InputWrapper>
          <InputRoot.InputLabel> Event Name</InputRoot.InputLabel>
          <InputRoot.Input
            placeholder="Enter with event Name"
            className="w-full"
          />
        </InputRoot.InputWrapper>
        <SelectRoot.SelectWrapper>
          <SelectRoot.SelectLabel> Event Type</SelectRoot.SelectLabel>
          <SelectRoot.Select options={options} />
        </SelectRoot.SelectWrapper>

        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <label htmlFor="event_type" className="my-2 font-semibold">
            Event Date
          </label>
          <DatePicker className="w-full" />
        </LocalizationProvider>
      </form>
      <div className="py-4 flex items-start justify-end border-t border-t-gray-100 w-full px-4 gap-4">
        <Button variant="text" className="bg-transparent ml-5 w-32">
          Cancel
        </Button>
        <Button
          variant="contained"
          color="primary"
          disabled={true}
          className=" w-32">
          Submit
        </Button>
      </div>
    </S.Container>
  )
}
