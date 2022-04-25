import { ChangeEvent, FormEvent, useState } from 'react';
import '../styles/styles.css';

const FormikPage = () => {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    password: '',
    password2: '',
  });

  const onHandleChange = (ev: ChangeEvent<HTMLInputElement>) => {
    setFormState(prev => ({
      ...prev,
      [ev.target.name]: ev.target.value,
    }));
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    console.log(formState);
  };

  return (
    <div>
      <h1>FormikPage</h1>

      <form noValidate onSubmit={handleSubmit}>
        <label htmlFor="name">Name</label>
        <input
          name="name"
          type="text"
          placeholder="Name"
          onChange={onHandleChange}
        />
        <label htmlFor="email">Email</label>
        <input
          name="email"
          type="email"
          placeholder="Email"
          onChange={onHandleChange}
        />
        <label htmlFor="password">Password</label>
        <input
          name="password"
          type="password"
          placeholder="Password"
          onChange={onHandleChange}
        />
        <label htmlFor="password2">Repeat Password</label>
        <input
          name="password2"
          type="password"
          placeholder="Repeat password"
          onChange={onHandleChange}
        />
        <button type="submit">Create</button>
      </form>
    </div>
  );
};

export default FormikPage;
