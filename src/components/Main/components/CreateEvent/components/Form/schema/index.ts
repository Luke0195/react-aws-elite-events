import * as yup from 'yup'

const schema = () => {
  return yup.object({
    event_name: yup.string().required('Field Event Name is required'),
    event_type: yup.string().required('Field Event Type is required'),
    event_date: yup.string().required('Field Event Date is required'),
  })
}

export default schema
