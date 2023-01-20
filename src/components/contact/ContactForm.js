import { Formik, Form, Field } from 'formik';
import axios from 'axios';

const ContactForm = () => {
  // let url = 'https://script.google.com/macros/s/AKfycbxvzQ-fqiuplxkDNLYKuoyEqCSMabINDaCzMEySBDXCTqO298INEpXRbx1ihNQxuF6Q/exec';
  let url = 'http://localhost:3001/email';

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

  const handleSubmit = async (event) => {
    const name = event.name;
    const email = event.email;
    const message = event.message;
console.log('clicked')
    const emailMessage = {
      name,
      email,
      message
    };

    await axios.get(`${url}`)
    await axios.post(url, emailMessage)
    // await fetch(url, {
    //   method: 'POST',
    //   body: JSON.stringify(emailMessage)
    // })
    //   .then(response => response.json())
    //   .then(data => console.log(data))

    // console.log(emailMessage);

    // return emailMessage
  };

  return (
    <Formik
      initialValues={{ name: '', email: '', message: '' }}
      validate={validation}
      onSubmit={handleSubmit}
    >
      {({ isValid, dirty, setFieldValue, setFieldTouched }) => {
        return (
          <Form className='contactForm' style={{ color: 'white'}}>
            <Field
              style={{ display: 'block', marginBottom: '1rem', color: 'white' }}
              label='Name'
              placeholder='Full Name'
              name='name'
            />
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