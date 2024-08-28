import React from 'react';
import { Field, ErrorMessage } from 'formik';

const AccountInfo = () => (
  <div>
    <div className="mb-4">
      <label htmlFor="username" className="block text-gray-700">Username</label>
      <Field type="text" id="username" name="username" className="input"/>
      <ErrorMessage name="username" component="div" className="text-red-600"/>
    </div>
    <div className="mb-4">
      <label htmlFor="password" className="block text-gray-700">Password</label>
      <Field type="password" id="password" name="password" className="input"/>
      <ErrorMessage name="password" component="div" className="text-red-600"/>
    </div>
  </div>
);

export default AccountInfo;
