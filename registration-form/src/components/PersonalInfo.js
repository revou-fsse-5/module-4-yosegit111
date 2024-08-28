// src/components/PersonalInfo.js
import React from 'react';
import { Field, ErrorMessage } from 'formik';

const PersonalInfo = () => (
  <div>
    <div className="mb-4">
      <label htmlFor="fullName" className="block text-gray-700">Full Name</label>
      <Field type="text" id="fullName" name="fullName" className="input"/>
      <ErrorMessage name="fullName" component="div" className="text-red-600"/>
    </div>
    <div className="mb-4">
      <label htmlFor="email" className="block text-gray-700">Email Address</label>
      <Field type="email" id="email" name="email" className="input"/>
      <ErrorMessage name="email" component="div" className="text-red-600"/>
    </div>
    <div className="mb-4">
      <label htmlFor="dob" className="block text-gray-700">Date of Birth</label>
      <Field type="date" id="dob" name="dob" className="input"/>
      <ErrorMessage name="dob" component="div" className="text-red-600"/>
    </div>
  </div>
);

export default PersonalInfo;
