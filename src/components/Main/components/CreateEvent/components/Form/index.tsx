import { InputRoot, SelectRoot, ButtonRoot } from '@/components/Form'
import { EventData } from './protocols'
import { schema } from './schema'
import { parsedData } from './mapper'
import { useForm } from 'react-hook-form'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider'
import { DatePicker } from '@mui/x-date-pickers/DatePicker'
import { yupResolver } from '@hookform/resolvers/yup'
import * as S from '../../styles'

export function Form() {
  const form = useForm<EventData>({
    mode: 'onBlur',
    resolver: yupResolver(schema()),
    defaultValues: parsedData({} as EventData),
  })
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
          <InputRoot.InputLabel className="mb-2">
            Event Name
          </InputRoot.InputLabel>
          <InputRoot.Input
            placeholder="Enter with event Name"
            className="w-full"
          />
        </InputRoot.InputWrapper>
        <SelectRoot.SelectWrapper>
          <SelectRoot.SelectLabel> Event Type</SelectRoot.SelectLabel>
          <SelectRoot.Select options={options} />
        </SelectRoot.SelectWrapper>

        <InputRoot.InputWrapper>
          <InputRoot.InputLabel className="mb-2">
            {' '}
            Event Name
          </InputRoot.InputLabel>
          <InputRoot.Input
            placeholder="Enter with event Name"
            className="w-full"
            type="date"
          />
        </InputRoot.InputWrapper>
      </form>
      <div className="py-4 flex items-start justify-end border-t border-t-gray-100 w-full px-4 gap-4">
        <ButtonRoot.Button className="bg-transparent ml-5 w-32">
          Cancel
        </ButtonRoot.Button>
        <ButtonRoot.Button disabled={true} className=" w-32">
          Submit
        </ButtonRoot.Button>
      </div>
    </S.Container>
  )
}
