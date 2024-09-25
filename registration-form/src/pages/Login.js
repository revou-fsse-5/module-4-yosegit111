// src/pages/Login.js
import React from 'react';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const LoginSchema = Yup.object().shape({
  email: Yup.string().email('Invalid email').required('Email is required'),
  password: Yup.string().required('Password is required'),
});

const Login = () => {
  const navigate = useNavigate();

  return (
    <Formik
      initialValues={{ email: '', password: '' }}
      validationSchema={LoginSchema}
      onSubmit={(values) => {
        axios.post('http://localhost:3000/login', values)
          .then(response => {
            alert('Login successful');
            navigate('/');
          })
          .catch(error => console.error('Error logging in:', error));
      }}
    >
      {({ errors, touched }) => (
        <Form className="flex-col">
          <div className="flex flex-col">
            <label className="label" htmlFor="email">Email</label>
            <Field name="email" type="email" placeholder="Email" className="input" />
            {errors.email && touched.email ? <div className="text-red-600">{errors.email}</div> : null}
          </div>

          <div className="flex flex-col">
            <label className="label" htmlFor="password">Password</label>
            <Field name="password" type="password" placeholder="Password" className="input" />
            {errors.password && touched.password ? <div className="text-red-600">{errors.password}</div> : null}
          </div>

          <button type="submit" className="btn btn-primary">Login</button>
        </Form>
      )}
    </Formik>
  );
};

export default Login;
