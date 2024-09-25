import React, { useState } from 'react';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
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

  const handleNextStep = () => setStep(step + 1);
  const handlePrevStep = () => setStep(step - 1);

  return (
    <div>
      {step === 1 && (
        <Formik
          initialValues={{ fullName: '', email: '', dateOfBirth: '' }}
          validationSchema={PersonalInfoSchema}
          onSubmit={handleNextStep}
        >
          {({ errors, touched }) => (
            <Form>
              <Field name="fullName" placeholder="Full Name" />
              {errors.fullName && touched.fullName ? <div>{errors.fullName}</div> : null}
              
              <Field name="email" type="email" placeholder="Email" />
              {errors.email && touched.email ? <div>{errors.email}</div> : null}

              <Field name="dateOfBirth" type="date" />
              {errors.dateOfBirth && touched.dateOfBirth ? <div>{errors.dateOfBirth}</div> : null}

              <button type="submit">Next</button>
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
            <Form>
              <Field name="street" placeholder="Street" />
              {errors.street && touched.street ? <div>{errors.street}</div> : null}
              
              <Field name="city" placeholder="City" />
              {errors.city && touched.city ? <div>{errors.city}</div> : null}

              <Field name="state" placeholder="State" />
              {errors.state && touched.state ? <div>{errors.state}</div> : null}

              <Field name="zipCode" placeholder="Zip Code" />
              {errors.zipCode && touched.zipCode ? <div>{errors.zipCode}</div> : null}

              <button type="button" onClick={handlePrevStep}>Back</button>
              <button type="submit">Next</button>
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
              .then(response => console.log('Registered:', response))
              .catch(error => console.error('Error registering:', error));
          }}
        >
          {({ errors, touched }) => (
            <Form>
              <Field name="username" placeholder="Username" />
              {errors.username && touched.username ? <div>{errors.username}</div> : null}

              <Field name="password" type="password" placeholder="Password" />
              {errors.password && touched.password ? <div>{errors.password}</div> : null}

              <button type="button" onClick={handlePrevStep}>Back</button>
              <button type="submit">Submit</button>
            </Form>
          )}
        </Formik>
      )}
    </div>
  );
};

export default FormContainer;
