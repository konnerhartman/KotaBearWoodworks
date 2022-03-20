import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useMutation } from '@apollo/client';
import Auth from '../utils/auth';
import { ADD_USER } from '../utils/mutations';

function Signup(props) {
  const [formState, setFormState] = useState({ email: '', password: '' });
  const [addUser] = useMutation(ADD_USER);

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    const mutationResponse = await addUser({
      variables: {
        email: formState.email,
        password: formState.password,
        firstName: formState.firstName,
        lastName: formState.lastName,
      },
    });
    const token = mutationResponse.data.addUser.token;
    Auth.login(token);
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
          <h2><span>Signup</span></h2>
          <p className=''>Create an account to save/view your favorite pieces from the gallery.</p>
          <form onSubmit={handleFormSubmit}>
            <div className="flex-row space-between my-2">
              <label htmlFor="firstName">First Name</label>
              <input
                className="text-center form-control"
                placeholder="First"
                name="firstName"
                type="firstName"
                id="firstName"
                onChange={handleChange}
              />
            </div>
            <div className="flex-row space-between my-2">
              <label htmlFor="lastName">Last Name</label>
              <input
                className="text-center form-control"
                placeholder="Last"
                name="lastName"
                type="lastName"
                id="lastName"
                onChange={handleChange}
              />
            </div>
            <div className="flex-row space-between my-2">
              <label htmlFor="email">Email</label>
              <input
                className="text-center form-control"
                placeholder="youremail@test.com"
                name="email"
                type="email"
                id="email"
                onChange={handleChange}
              />
            </div>
            <div className="flex-row space-between my-2">
              <label htmlFor="pwd">Password</label>
              <input
                className="text-center form-control"
                placeholder="******"
                name="password"
                type="password"
                id="pwd"
                onChange={handleChange}
              />
            </div>
            <button className="btn btn-primary m-2" type="submit">Submit</button>
          </form>
          <p>
            Already have an account?
            <br />
            <Link className='' to="/login"><b>Go to Login</b></Link>
          </p>
        </div>
        <div className='col-md-3'></div>
      </div>
    </div>
  );
}

export default Signup;
