import { Field, ErrorMessage } from 'formik';
import { capitalizeFirstLetter } from '../../utils/capitalizeString';

interface Props {
  field: 'input' | 'select' | 'checkbox';
  name: string;
  type?: 'text' | 'email' | 'password' | 'checkbox';
  label: string;
  placeholder?: string;
  options?: string[];
}

const CustomField = ({
  field,
  name,
  type,
  label,
  placeholder,
  options,
}: Props) => {
  switch (field) {
    case 'input':
      return (
        <>
          <label htmlFor={name}>{label}</label>
          <Field name={name} type={type} placeholder={placeholder} />
          <ErrorMessage name={name} component="span" />
        </>
      );

    case 'select':
      return (
        <>
          <label htmlFor={name}>{label}</label>
          <Field name={name} as="select">
            {options?.map(op => (
              <option key={op} value={op}>
                {capitalizeFirstLetter(op)}
              </option>
            ))}
          </Field>
          <ErrorMessage name={name} component="span" />
        </>
      );

    case 'checkbox':
      return (
        <>
          <label>
            <Field name={name} type={type} />
            {label}
          </label>
          <ErrorMessage name={name} component="span" />
        </>
      );

    default:
      return <></>;
  }
};

export default CustomField;
