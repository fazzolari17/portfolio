import React from 'react';
import PropTypes from 'prop-types';
import { Formik, Form, Field } from 'formik';


const ContactForm = ({ handleSubmit }) => {

  const validation = values => {
    const errors = {};
    if (!values.message) {
      errors.message = 'Required';
    } else if (!values.email) {
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
      initialValues={{ name: '', email: '', message: '', phone: '', organization: '' }}
      validate={validation}
      isRequired={true}
      onSubmit={(e, { resetForm }) => {
        handleSubmit(e);
        resetForm();
      }}
    >
      {({ isValid, dirty, _setFieldValue, _setFieldTouched, _resetForm }) => {
        return (
          <Form className='contactForm' style={{ color: 'white' }}>
            <div style ={{ display: 'flex', justifyContent: 'space-between' }}>
              <div>
                <label style={{ fontSize: '.75rem' }} htmlFor="name">Name: <span style={{ color: 'red' }}>*</span></label>
                <Field
                  style={{ display: 'block', marginBottom: '.5rem' }}
                  label='Name'
                  placeholder='Full Name'
                  name='name'
                  required
                />
                <label style={{ fontSize: '.75rem' }} htmlFor="email">Email: *</label>
                <Field
                  style={{ display: 'block', marginBottom: '1rem' }}
                  label='Email'
                  placeholder='Your Email'
                  name='email'
                  required
                />
              </div>
              <div>
                <label style={{ fontSize: '.75rem' }} htmlFor="phone">Phone Number:</label>
                <Field
                  style={{ display: 'block', marginBottom: '.5rem' }}
                  label='Phone'
                  placeholder='Phone Number'
                  name='phone'
                />
                <label style={{ fontSize: '.75rem' }} htmlFor="organization">Organization:</label>
                <Field
                  style={{ display: 'block', marginBottom: '1rem' }}
                  label='Organization'
                  placeholder='Organization'
                  name='organization'
                />
              </div>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <label style={{ fontSize: '.75rem', marginTop: '1rem' }} htmlFor="message">Message: *</label>
              <label style={{ fontSize: '.65rem', marginTop: '1rem' }} htmlFor="message">* = Required Fields</label>
            </div>
            <div>
              <Field
                style={{ width: '100%' }}
                // style={{ marginTop: '1rem' }}
                as='textarea'
                cols='61'
                rows='10'
                label='message'
                placeholder='Your Message Here'
                name='message'
                required
              />
            </div>
            <button
              style={{ float: 'right' }}
              type='submit'
              disabled={!dirty || !isValid }
              // onClick={handleSubmit}
            >
              Submit</button>
          </Form>
        );
      }}

    </Formik>
  );
};

ContactForm.propTypes = ({
  handleSubmit: PropTypes.func.isRequired
});

export default ContactForm;