import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { Link } from 'react-router-dom';
import { LOGIN } from '../utils/mutations';
import Auth from '../utils/auth';

function Login(props) {
  const [formState, setFormState] = useState({ email: '', password: '' });
  const [login, { error }] = useMutation(LOGIN);

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    try {
      const mutationResponse = await login({
        variables: { email: formState.email, password: formState.password },
      });
      const token = mutationResponse.data.login.token;
      Auth.login(token);
    } catch (e) {
      console.log(e);
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };

  return (
    <div className="login text-white">
      <div className='row p-5'>
        <div className='col-md-3'></div>
        <div className='text-center col-md-6'>
          <h2>Login</h2>
          <p className=''>Login to your account to view/save your favorite pieces from the gallery.</p>
          <form className='' onSubmit={handleFormSubmit}>
            <div className="form-group">
              <label htmlFor="email">Email address</label>
              <input
                className="form-control"
                placeholder="youremail@email.com"
                name="email"
                type="email"
                id="email"
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="pwd">Password</label>
              <input
                className="form-control"
                placeholder="******"
                name="password"
                type="password"
                id="pwd"
                onChange={handleChange}
              />
            </div>
            {error ? (
              <div>
                <p className="error-text">The provided credentials are incorrect</p>
              </div>
            ) : null}
            <button className="btn btn-primary m-2" type="submit">Submit</button>
          </form>
          <p>
            Don't have an account?
            <br />
            <Link className='' to="/signup"><b>Go to Signup</b></Link>
          </p>
        </div>
        <div className='col-md-3'></div>
      </div>
    </div>
  );
}

export default Login;
