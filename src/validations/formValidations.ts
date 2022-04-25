import * as Yup from 'yup';

export const formValidations = Yup.object({
  firstName: Yup.string()
    .max(15, 'Only fifteen characters allowed')
    .required('First name is required'),
  lastName: Yup.string()
    .max(15, 'Only fifteen characters allowed')
    .required('Last name is required'),
  email: Yup.string().email('email format is not valid').required(),
  jobType: Yup.string()
    .required('Please select a job')
    .notOneOf(['junior-dev'], 'This option is not available at this moment'),
  terms: Yup.bool().oneOf(
    [true],
    'You must accept the terms and conditions to continue'
  ),
});
