import React from 'react';
import { Link } from 'react-router-dom';

const Error = () => {
  
  return (
    <div className="d-flex justify-content-center align-items-center vh-100 bg-danger text-white">
      <div className="text-center">
        <h1 className="display-1">404</h1>
        <p className="lead">Oups! La page que vous recherchez n'existe pas.</p>
        <Link to={"/"} className="ms-1 btn btn-light">Back Home</Link>
      </div>
    </div>
  );
};

export default Error;
