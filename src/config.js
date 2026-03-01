import axios from 'axios';

// Axios Settinggs
axios.defaults.withCredentials = true;


const PORT = process.env.PORT || 3001;

let EMAIL_SERVER_URI;
let BACKEND_API_URI;


if (process.env.NODE_ENV === 'development')
{
  EMAIL_SERVER_URI =
    process.env.REACT_APP_ENVIRONMENT === 'development'
      ? process.env.REACT_APP_DEV_EMAIL_SERVER_URL
      : process.env.REACT_APP_EMAIL_SERVER_URL;
  BACKEND_API_URI = process.env.REACT_APP_DEV_BACKEND_URI;

}
else if (process.env.NODE_ENV === 'production')
{
  EMAIL_SERVER_URI = process.env.REACT_APP_EMAIL_SERVER_URL;
  BACKEND_API_URI = process.env.REACT_APP_PROD_BACKEND_URI;
}





// eslint-disable-next-line import/no-anonymous-default-export
export default { PORT, EMAIL_SERVER_URI, BACKEND_API_URI };