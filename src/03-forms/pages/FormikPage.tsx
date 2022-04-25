import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import '../styles/styles.css';

const FormikPage = () => {
  const initialValues = {
    firstName: '',
    lastName: '',
    email: '',
    jobType: '',
    terms: false,
  };

  const validationSchema = Yup.object({
    firstName: Yup.string()
      .max(15, 'Only fifteen characters allowed')
      .required(),
    lastName: Yup.string()
      .max(15, 'Only fifteen characters allowed')
      .required(),
    email: Yup.string().email('email format is not valid').required(),
    jobType: Yup.string()
      .required('Please select a job')
      .notOneOf(['it-junior'], 'This option is not available at this moment'),
    terms: Yup.bool().oneOf(
      [true],
      'You must accept the terms and conditions to continue'
    ),
  });

  return (
    <div>
      <h1>FormikPage</h1>

      <Formik
        initialValues={initialValues}
        onSubmit={values => {
          console.log(values);
        }}
        validationSchema={validationSchema}
      >
        <Form>
          <label htmlFor="firstName">First Name</label>
          <Field name="firstName" type="text" placeholder="First name" />
          <ErrorMessage name="firstName" component="span" />

          <label htmlFor="lastName">Last Name</label>
          <Field name="lastName" type="text" placeholder="Last Name" />
          <ErrorMessage name="lastName" component="span" />

          <label htmlFor="email">Email</label>
          <Field name="email" type="email" placeholder="email" />
          <ErrorMessage name="email" component="span" />

          <label htmlFor="jobType">Job Type</label>
          <Field name="jobType" as="select">
            <option value="">Pick a job</option>
            <option value="developer">Developer</option>
            <option value="designer">Designer</option>
            <option value="it-senior">IT-Senior</option>
            <option value="it-junior">IT-Junior</option>
          </Field>
          <ErrorMessage name="jobType" component="span" />

          <label>
            <Field name="terms" type="checkbox" />
            Terms and conditions
          </label>
          <ErrorMessage name="terms" component="span" />

          <button type="submit">Create</button>
        </Form>
      </Formik>
    </div>
  );
};

export default FormikPage;
