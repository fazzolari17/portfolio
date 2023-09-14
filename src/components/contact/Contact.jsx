import React from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
// Contexts and Constants
import { breakpoint } from '../../constants';
import useViewport from '../../hooks/useViewport';
import useGeolocation from '../../hooks/useGeolocation';
// Styles
import style from './styleSheet';
// Components
import Card from '../Card';
import ContactForm from './ContactForm';
import LoadingSpin from 'react-loading-spin';
import ContactIcons from '../ContactIcons';
// Data
import { contact } from '../../data/contact';


const Contact = ({ formState, setFormState }) => {
  const { width } = useViewport();
  const locationData = useGeolocation();
  const mobileStyle = width < breakpoint ? { width: '95%' } : '';


  const handleSubmit = async (event) => {
    setFormState({ state: 'loading' });
    const url = process.env.REACT_APP_EMAIL_SERVER_URL;
    const name = event.name;
    const email = event.email;
    const message = event.message;
    const phone = event.phone;
    const organization = event.organization;

    const emailMessage = {
      'name': name,
      'email': email,
      'message': message,
      'phone': phone,
      'organization': organization
    };

    axios.defaults.headers.common[
      'Authorization'
    ] = `bearer ${process.env.REACT_APP_EMAIL_SERVER_API_KEY}`;

    const response = await axios.post(url, { emailMessage, locationData });
    if (response.status === 200) {
      setFormState({ state: 'success' });
    }
  };


  return (
    <section className='sectionMargin'>
      <Card style={mobileStyle} shadow={true}>
        <p style={style.marginBottom}>
          {contact.info}
        </p>
        <div className='flex' >
          <ContactIcons style={style.marginRight} size={'40px'} color={'var(--header-background, #071013)'} />
        </div>
      </Card>

      {formState.state === 'notSubmitted' ?
        <Card style={{ maxWidth: '570px', marginTop: '3rem' }}>
          <h4 style={{ textAlign: 'center' }}>CONTACT ME</h4>
          <ContactForm handleSubmit={handleSubmit} />
        </Card>
        : formState.state === 'loading'
          ? <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <LoadingSpin
              primaryColor='var(--hero-background, #395E66)'
              animationTimingFunction='ease-in-out'
              animationDirection='alternate'
              numberOfRotationsInAnimation={3}
            />
          </div>
          : formState.state === 'success'
            ? <Card style={{ maxWidth: '570px', marginTop: '3rem' }}>
              <p>Thank you! Your email has been sent and you will recieve a response within 24 hours.</p>
            </Card>
            : <></>}

      <div style={{ height: '180px' }} id="map"></div>

    </section>
  );
};

Contact.propTypes = ({
  formState: PropTypes.shape({
    state: PropTypes.string.isRequired
  }),
  setFormState: PropTypes.func.isRequired
});

export default Contact;