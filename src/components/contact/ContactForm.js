import { Formik, Form, Field } from 'formik';


const ContactForm = () => {

  const validation = values => {
    const errors = {};
    if (!values.message) {
      errors.message = 'Required'
    } else if (!values.email) {
      errors.email = 'Required';
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
    ) {
      errors.email = 'Invalid email address';
    }

    return errors;
  };

  const handleSubmit = (event) => {
    const email = event.email;
    const message = event.message;

    console.log(email, message);
  };

  return (
    <Formik
      initialValues={{ email: '', message: '' }}
      validate={validation}
      onSubmit={handleSubmit}
    >
      {({ isValid, dirty, setFieldValue, setFieldTouched }) => {
        return (
          <Form className='contactForm'>
            <Field
              style={{ display: 'block'}}
              label='Email'
              placeholder='Your Email'
              name='email'
            />
            <Field
              style={{ marginTop: '1rem'}}
              as='textarea'
              cols='61'
              rows='10'
              label='message'
              placeholder='Your Message Here'
              name='message'
            />
            <button
              style={{float: 'right'}}
              type='submit'
              disabled={!dirty || !isValid }
              onClick={handleSubmit}
            >
              Submit</button>
          </Form>
        )
      }}

    </Formik>
  )
};

export default ContactForm;