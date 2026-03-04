import React from 'react';


const Unauthorized = () => {
  return <>
    <h1 style={{ marginTop: '150px', textAlign: 'center' }}>MUST BE LOGGED IN TO VIEW THIS RESOURCE</h1>
    <p>
      <a href='/login' style={{ marginTop: '150px', textAlign: 'center', color: 'black' }}>Return To Login</a>
    </p>
  </>;
};

export default Unauthorized;