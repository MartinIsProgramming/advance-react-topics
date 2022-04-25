import { Formik, Form } from 'formik';
import { formValidations } from '../../validations/formValidations';
import CustomField from '../components/CustomInput';
import '../styles/styles.css';

const FormikPage = () => {
  const initialValues = {
    firstName: '',
    lastName: '',
    email: '',
    jobType: '',
    terms: false,
  };

  return (
    <div>
      <h1>FormikPage</h1>

      <Formik
        initialValues={initialValues}
        onSubmit={values => {
          console.log(values);
        }}
        validationSchema={formValidations}
      >
        <Form>
          <CustomField
            field="input"
            name="firstName"
            type="text"
            label="First Name"
            placeholder="first name..."
          />

          <CustomField
            field="input"
            name="lastName"
            type="text"
            label="Last Name"
            placeholder="last name..."
          />

          <CustomField
            field="input"
            name="email"
            type="email"
            label="Email"
            placeholder="email..."
          />

          <CustomField
            field="select"
            name="jobType"
            label="Job Type"
            options={['developer', 'designer', 'senior-dev', 'junior-dev']}
          />

          <CustomField
            field="checkbox"
            name="terms"
            type="checkbox"
            label="Terms and conditions"
          />

          <button type="submit">Create</button>
        </Form>
      </Formik>
    </div>
  );
};

export default FormikPage;
