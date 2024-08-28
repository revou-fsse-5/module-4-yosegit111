// src/components/AddressInfo.js
import React from 'react';
import { Field, ErrorMessage } from 'formik';

const AddressInfo = () => (
  <div>
    <div className="mb-4">
      <label htmlFor="street" className="block text-gray-700">Street Address</label>
      <Field type="text" id="street" name="street" className="input"/>
      <ErrorMessage name="street" component="div" className="text-red-600"/>
    </div>
    <div className="mb-4">
      <label htmlFor="city" className="block text-gray-700">City</label>
      <Field type="text" id="city" name="city" className="input"/>
      <ErrorMessage name="city" component="div" className="text-red-600"/>
    </div>
    <div className="mb-4">
      <label htmlFor="state" className="block text-gray-700">State</label>
      <Field type="text" id="state" name="state" className="input"/>
      <ErrorMessage name="state" component="div" className="text-red-600"/>
    </div>
    <div className="mb-4">
      <label htmlFor="zip" className="block text-gray-700">Zip Code</label>
      <Field type="text" id="zip" name="zip" className="input"/>
      <ErrorMessage name="zip" component="div" className="text-red-600"/>
    </div>
  </div>
);

export default AddressInfo;
