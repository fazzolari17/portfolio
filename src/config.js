const PORT = process.env.PORT || 3001;

let EMAIL_SERVER_URI;

if (process.env.NODE_ENV === 'production') {
  EMAIL_SERVER_URI = process.env.REACT_APP_EMAIL_SERVER_URL;
} else {
  EMAIL_SERVER_URI =
    process.env.REACT_APP_ENVIRONMENT === 'development'
      ? process.env.REACT_APP_DEV_EMAIL_SERVER_URL
      : process.env.REACT_APP_EMAIL_SERVER_URL;
}



// eslint-disable-next-line import/no-anonymous-default-export
export default { PORT, EMAIL_SERVER_URI };