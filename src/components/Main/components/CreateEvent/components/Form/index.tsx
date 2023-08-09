import { SelectRoot, InputRoot, WarningMessageRoot } from '@/components'
import { CreateEventProps } from '../../shared/protocols'
import { EventData } from './protocols'

import { schema } from './schema'
import { parsedData } from './mapper'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as S from '../../styles'

export function Form(props: CreateEventProps) {
  const { onClose } = props
  const {
    register,
    handleSubmit,
    formState: { isValid, errors },
  } = useForm<EventData>({
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

  const onSubmit = (data: EventData) => {
    console.log(data)
    onClose()
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
            error={Boolean(errors?.event_name)}
            type="name"
            name="event_name"
            register={register}
            placeholder="Enter with event name"
            className="w-full"
          />
          {errors?.event_name && (
            <WarningMessageRoot.WarningMessageWrapper type="error">
              <WarningMessageRoot.WarningMessageContent type="error">
                {errors.event_name?.message || ' '}
              </WarningMessageRoot.WarningMessageContent>
            </WarningMessageRoot.WarningMessageWrapper>
          )}
        </InputRoot.InputWrapper>
        <SelectRoot.SelectWrapper>
          <SelectRoot.SelectLabel> Event Type</SelectRoot.SelectLabel>
          <SelectRoot.Select
            error={Boolean(errors?.event_type)}
            options={options}
            name="event_type"
            register={register}
          />
          {errors?.event_type && (
            <WarningMessageRoot.WarningMessageWrapper type="error">
              <WarningMessageRoot.WarningMessageContent type="error">
                {errors.event_type?.message || ' '}
              </WarningMessageRoot.WarningMessageContent>
            </WarningMessageRoot.WarningMessageWrapper>
          )}
        </SelectRoot.SelectWrapper>

        <InputRoot.InputWrapper>
          <InputRoot.InputLabel className="mb-2">
            Event Date
          </InputRoot.InputLabel>
          <InputRoot.Input
            error={Boolean(errors?.event_date)}
            name="event_date"
            type="date"
            register={register}
            placeholder="Enter with event Date"
          />
          {errors?.event_date && (
            <WarningMessageRoot.WarningMessageWrapper type="error">
              <WarningMessageRoot.WarningMessageContent type="error">
                {errors.event_date?.message || ' '}
              </WarningMessageRoot.WarningMessageContent>
            </WarningMessageRoot.WarningMessageWrapper>
          )}
        </InputRoot.InputWrapper>
        <div className="w-full mt-5 flex  items-center justify-end bg-red ">
          <button
            type="submit"
            disabled={!isValid}
            className="h-11 w-40  font-semibold rounded-md bg-blue-800 text-white disabled:bg-gray-500 disabled:text-gray-700">
            Submit
          </button>
        </div>
      </form>
    </S.Container>
  )
}
