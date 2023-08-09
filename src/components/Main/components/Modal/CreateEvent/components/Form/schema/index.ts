import * as yup from 'yup'

export const schema = () => {
  return yup.object({
    event_name: yup.string().required('Event Name is required'),
    event_type: yup.string().required('Event Type is required'),
    event_date: yup.string().required('Event Date is required'),
  })
}
