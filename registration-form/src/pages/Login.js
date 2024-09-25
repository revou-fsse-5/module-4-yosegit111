import React from 'react';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';

const LoginSchema = Yup.object().shape({
  email: Yup.string().email('Invalid email').required('Email is required'),
  password: Yup.string().required('Password is required'),
});

const Login = () => {
  return (
    <Formik
      initialValues={{ email: '', password: '' }}
      validationSchema={LoginSchema}
      onSubmit={(values) => {
        axios.post('http://localhost:3000/login', values)
          .then(response => {
            localStorage.setItem('token', response.data.accessToken);
            console.log('Logged in:', response);
          })
          .catch(error => console.error('Error logging in:', error));
      }}
    >
      {({ errors, touched }) => (
        <Form>
          <Field name="email" type="email" placeholder="Email" />
          {errors.email && touched.email ? <div>{errors.email}</div> : null}

          <Field name="password" type="password" placeholder="Password" />
          {errors.password && touched.password ? <div>{errors.password}</div> : null}

          <button type="submit">Login</button>
        </Form>
      )}
    </Formik>
  );
};

export default Login;
