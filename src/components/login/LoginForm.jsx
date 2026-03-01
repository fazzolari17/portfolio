import React from 'react';
import PropTypes from 'prop-types';
import { Formik, Form, Field } from 'formik';

const LoginForm = ({ handleSubmit }) => {

  const validation = values => {
    const errors = {};
    if (!values.email) {
      errors.email = 'Required';
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
    ) {
      errors.email = 'Invalid email address';
    }

    return errors;
  };

  return (
    <Formik
      initialValues={{ email: '', password: '' }}
      validate={validation}
      isRequired={true}
      onSubmit={(e, { resetForm }) => {
        handleSubmit(e);
        resetForm();
      }}>
      {({ isValid, dirty, _setFieldValue, _setFieldTouched, _resetForm }) => {
        return (
          <Form>
            <div>
              <label style={{ fontSize: '.75rem' }} htmlFor="email">Email: *</label>
              <Field
                style={{ display: 'block', marginBottom: '.8rem', width: '100%' }}
                label='email'
                placeholder='Email'
                name='email'
                required
              />
              <label style={{ fontSize: '.75rem' }} htmlFor="password">Password: *</label>
              <Field
                style={{ display: 'block', marginBottom: '1.5rem', width: '100%' }}
                label='password'
                placeholder='Password'
                name='password'
                type='password'
                required
              />
            </div>
            <hr style={{ color: '#000', marginBottom: '1rem' }}></hr>
            <button
              style={{ float: 'right', padding: '.25rem', width: '100%' }}
              type='submit'
              disabled={!dirty || !isValid }
              // onClick={handleSubmit}
              tabIndex={0}
            >Login</button>

          </Form>
        );
      }}
    </Formik>
  );
};

LoginForm.propTypes = ({
  handleSubmit: PropTypes.func.isRequired
});

export default LoginForm;
