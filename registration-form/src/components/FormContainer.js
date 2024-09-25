// src/components/FormContainer.js
import React, { useState } from 'react';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const PersonalInfoSchema = Yup.object().shape({
  fullName: Yup.string().required('Full Name is required'),
  email: Yup.string().email('Invalid email').required('Email is required'),
  dateOfBirth: Yup.date().required('Date of Birth is required'),
});

const AddressInfoSchema = Yup.object().shape({
  street: Yup.string().required('Street is required'),
  city: Yup.string().required('City is required'),
  state: Yup.string().required('State is required'),
  zipCode: Yup.string().required('Zip Code is required'),
});

const AccountInfoSchema = Yup.object().shape({
  username: Yup.string().required('Username is required'),
  password: Yup.string().required('Password is required'),
});

const FormContainer = () => {
  const [step, setStep] = useState(1);
  const navigate = useNavigate();

  const handleNextStep = () => setStep(step + 1);
  const handlePrevStep = () => setStep(step - 1);

  return (
    <div>
      <h1 className="text-2xl font-bold">Register</h1>
      {step === 1 && (
        <Formik
          initialValues={{ fullName: '', email: '', dateOfBirth: '' }}
          validationSchema={PersonalInfoSchema}
          onSubmit={handleNextStep}
        >
          {({ errors, touched }) => (
            <Form className="flex flex-col space-y-4">
              <div>
                <label className="label" htmlFor="fullName">Full Name</label>
                <Field name="fullName" placeholder="Full Name" className="input" />
                {errors.fullName && touched.fullName ? <div className="text-red-600">{errors.fullName}</div> : null}
              </div>

              <div>
                <label className="label" htmlFor="email">Email</label>
                <Field name="email" type="email" placeholder="Email" className="input" />
                {errors.email && touched.email ? <div className="text-red-600">{errors.email}</div> : null}
              </div>

              <div>
                <label className="label" htmlFor="dateOfBirth">Date of Birth</label>
                <Field name="dateOfBirth" type="date" className="input" />
                {errors.dateOfBirth && touched.dateOfBirth ? <div className="text-red-600">{errors.dateOfBirth}</div> : null}
              </div>

              <button type="submit" className="btn btn-primary">Next</button>
            </Form>
          )}
        </Formik>
      )}

      {step === 2 && (
        <Formik
          initialValues={{ street: '', city: '', state: '', zipCode: '' }}
          validationSchema={AddressInfoSchema}
          onSubmit={handleNextStep}
        >
          {({ errors, touched }) => (
            <Form className="flex flex-col space-y-4">
              <div>
                <label className="label" htmlFor="street">Street</label>
                <Field name="street" placeholder="Street" className="input" />
                {errors.street && touched.street ? <div className="text-red-600">{errors.street}</div> : null}
              </div>

              <div>
                <label className="label" htmlFor="city">City</label>
                <Field name="city" placeholder="City" className="input" />
                {errors.city && touched.city ? <div className="text-red-600">{errors.city}</div> : null}
              </div>

              <div>
                <label className="label" htmlFor="state">State</label>
                <Field name="state" placeholder="State" className="input" />
                {errors.state && touched.state ? <div className="text-red-600">{errors.state}</div> : null}
              </div>

              <div>
                <label className="label" htmlFor="zipCode">Zip Code</label>
                <Field name="zipCode" placeholder="Zip Code" className="input" />
                {errors.zipCode && touched.zipCode ? <div className="text-red-600">{errors.zipCode}</div> : null}
              </div>

              <div className="flex justify-between">
                <button type="button" onClick={handlePrevStep} className="btn btn-secondary">Back</button>
                <button type="submit" className="btn btn-primary">Next</button>
              </div>
            </Form>
          )}
        </Formik>
      )}

      {step === 3 && (
        <Formik
          initialValues={{ username: '', password: '' }}
          validationSchema={AccountInfoSchema}
          onSubmit={(values) => {
            axios.post('http://localhost:3000/register', values)
              .then(() => {
                alert('Registration is successful');
                navigate('/login');
              })
              .catch(error => console.error('Error registering:', error));
          }}
        >
          {({ errors, touched }) => (
            <Form className="flex flex-col space-y-4">
              <div>
                <label className="label" htmlFor="username">Username</label>
                <Field name="username" placeholder="Username" className="input" />
                {errors.username && touched.username ? <div className="text-red-600">{errors.username}</div> : null}
              </div>

              <div>
                <label className="label" htmlFor="password">Password</label>
                <Field name="password" type="password" placeholder="Password" className="input" />
                {errors.password && touched.password ? <div className="text-red-600">{errors.password}</div> : null}
              </div>

              <div className="flex justify-between">
                <button type="button" onClick={handlePrevStep} className="btn btn-secondary">Back</button>
                <button type="submit" className="btn btn-submit">Submit</button>
              </div>
            </Form>
          )}
        </Formik>
      )}
    </div>
  );
};

export default FormContainer;
