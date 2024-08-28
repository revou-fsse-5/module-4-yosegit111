// src/components/FormContainer.js
import React, { useState } from 'react';
import { Formik, Form } from 'formik';
import PersonalInfo from './PersonalInfo';
import AddressInfo from './AddressInfo';
import AccountInfo from './AccountInfo';
import * as Yup from 'yup';

const validationSchemaStep1 = Yup.object({
  fullName: Yup.string().required('Full Name is required'),
  email: Yup.string().email('Invalid email address').required('Email Address is required'),
  dob: Yup.date().required('Date of Birth is required').nullable()
});

const validationSchemaStep2 = Yup.object({
  street: Yup.string().required('Street Address is required'),
  city: Yup.string().required('City is required'),
  state: Yup.string().required('State is required'),
  zip: Yup.string().required('Zip Code is required').matches(/^\d{5}(-\d{4})?$/, 'Invalid Zip Code format')
});

const validationSchemaStep3 = Yup.object({
  username: Yup.string().required('Username is required'),
  password: Yup.string().required('Password is required').min(8, 'Password must be at least 8 characters')
});

const FormContainer = () => {
  const [step, setStep] = useState(1);

  const handleNext = () => setStep(step + 1);
  const handleBack = () => setStep(step - 1);

  return (
    <Formik
      initialValues={{ fullName: '', email: '', dob: '', street: '', city: '', state: '', zip: '', username: '', password: '' }}
      validationSchema={step === 1 ? validationSchemaStep1 : step === 2 ? validationSchemaStep2 : validationSchemaStep3}
      onSubmit={(values) => {
        if (step === 3) {
          console.log(values);
        } else {
          handleNext();
        }
      }}
    >
      {({ isValid }) => (
        <Form>
          {step === 1 && <PersonalInfo />}
          {step === 2 && <AddressInfo />}
          {step === 3 && <AccountInfo />}

          <div className="flex justify-between mt-4">
            {step > 1 && <button type="button" onClick={handleBack} className="btn">Back</button>}
            <button type="submit" className={`btn ${step === 3 ? 'btn-submit' : ''}`} disabled={!isValid}>
              {step === 3 ? 'Submit' : 'Next'}
            </button>
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default FormContainer;
