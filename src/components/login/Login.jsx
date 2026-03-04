import React from 'react';
import Card from '../Card';
import LoginForm from './LoginForm';
import PropTypes from 'prop-types';
import LoadingSpin from 'react-loading-spin';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';

const Login = ({ formState, setFormState }) => {
  const navigate = useNavigate();
  const { login } = useAuth();

  const handleSubmit = async (event) => {
    setFormState({ state: 'loading' });

    const email = event.email;
    const password = event.password;

    const loginData = {
      'email': email,
      'password': password
    };

    try {
      const response = await login(loginData);

      if (response.status === 200 && response.data.success) {
        setFormState({ state: 'notsubmitted' });
        navigate('/dashboard');
      }
      // console.log(response.status);
      // console.log(response.data.success);
      // console.log(response.data);
      if (response.status === 401) {
        setFormState({ state: 'invalid' });
      }
    } catch (error) {
      console.error(error);
    }
  };

  const loginForm = <Card style={{ height: '30rem', minWidth: '20rem' }}>
    <h4 style={{ textAlign: 'center' }}>Login</h4>
    <h6 style={{ color: 'red', textAlign: 'center', margin: '1rem' }}>
      {formState.state === 'invalid' ? 'Invalid Email or Password.' : null}
    </h6>
    <LoginForm handleSubmit={handleSubmit} />
  </Card>;

  const loadingSpinner = <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
    <LoadingSpin
      primaryColor='var(--hero-background, #395E66)'
      animationTimingFunction='ease-in-out'
      animationDirection='alternate'
      numberOfRotationsInAnimation={3}
    />
  </div>;


  return (
    <section style={{ margin: 150, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      {
        formState.state === 'notSubmitted' || formState.state === 'invalid' ?
          loginForm
          : formState.state === 'loading'
            ? loadingSpinner
            : formState.state === 'success'
              ? <></>
              : <></>
      }
    </section>);
};

Login.propTypes = ({
  formState: PropTypes.shape({
    state: PropTypes.string.isRequired
  }),
  setFormState: PropTypes.func.isRequired,
  setIsLoggedIn: PropTypes.func.isRequired
});

export default Login;
