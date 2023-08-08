import { InputRoot, SelectRoot } from '@/components/Form'
import { EventData } from './protocols'
import { schema } from './schema'
import { parsedData } from './mapper'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as S from '../../styles'

export function Form() {
  const { register, handleSubmit, getValues } = useForm<EventData>({
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

  const values = getValues()
  console.log(values)

  const onSubmit = (data: EventData) => {
    console.log('Teste')
    console.log(data)
  }

  return (
    <S.Container className="max-w-xl bg-white d-flex items-center  rounded-sm flex flex-col">
      <h2 className="p-4 bg-blue-600 w-full text-white font-bold text-lg">
        Create New Event
      </h2>
      <form className="p-8 w-full" onSubmit={handleSubmit(onSubmit)}>
        <InputRoot.InputWrapper>
          <InputRoot.InputLabel className="mb-2">
            Event Name
          </InputRoot.InputLabel>
          <InputRoot.Input
            name="event_name"
            register={register}
            placeholder="Enter with event Name"
            className="w-full"
          />
        </InputRoot.InputWrapper>
        <SelectRoot.SelectWrapper>
          <SelectRoot.SelectLabel> Event Type</SelectRoot.SelectLabel>
          <SelectRoot.Select
            options={options}
            name="event_type"
            register={register}
          />
        </SelectRoot.SelectWrapper>

        <InputRoot.InputWrapper>
          <InputRoot.InputLabel className="mb-2">
            {' '}
            Event Name
          </InputRoot.InputLabel>
          <InputRoot.Input
            name="event_date"
            register={register}
            placeholder="Enter with event Name"
            className="w-full"
            type="date"
          />
        </InputRoot.InputWrapper>
        <button type="submit"> Salvar </button>
      </form>
    </S.Container>
  )
}
