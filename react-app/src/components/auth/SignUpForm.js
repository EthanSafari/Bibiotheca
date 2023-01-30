import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { NavLink, Redirect } from 'react-router-dom';
import { signUp } from '../../store/session';

const SignUpForm = () => {
  const [errors, setErrors] = useState([]);
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [repeatPassword, setRepeatPassword] = useState('');
  const [firstName, setFirstName] = useState('');
  const user = useSelector(state => state.session.user);
  const dispatch = useDispatch();

  const onSignUp = async (e) => {
    e.preventDefault();
    if (password === repeatPassword) {
      const data = await dispatch(signUp(username, email, password, firstName));
      if (data) {
        setErrors(data)
      }
    }
  };

  const updateFirstName = (e) => {
    setFirstName(e.target.value);
  };

  const updateUsername = (e) => {
    setUsername(e.target.value);
  };

  const updateEmail = (e) => {
    setEmail(e.target.value);
  };

  const updatePassword = (e) => {
    setPassword(e.target.value);
  };

  const updateRepeatPassword = (e) => {
    setRepeatPassword(e.target.value);
  };

  if (user) {
    return <Redirect to='/' />;
  }

  return (
    <div className='not-logged-in'>

    <form onSubmit={onSignUp} className='login-signup'>
    <img src='https://th.bing.com/th/id/R.3d328148c3a9233908abcfdb70d50054?rik=Qn52TFs0brJ9Lw&riu=http%3a%2f%2fclipart-library.com%2fimages_k%2fopen-book-transparent-background%2fopen-book-transparent-background-10.png&ehk=qE1MFU8x43ler4lDf9xKsTgXQM42qy5WTEsZtDavo8s%3d&risl=&pid=ImgRaw&r=0' className='bibliotheca-logo-png' />
          <div className='bibliotheca-login-welcome'>
            Welcome to Bibliotheca!
          </div>
      <div>
        {errors.map((error, ind) => (
          <div key={ind}>{error}</div>
        ))}
      </div>
      <div className='signup-input'>
        <label>User Name</label>
        <input
          type='text'
          name='username'
          onChange={updateUsername}
          value={username}
        ></input>
      </div>
      <div className='signup-input'>
        <label>First Name</label>
        <input
          type='text'
          name='first_name'
          onChange={updateFirstName}
          value={firstName}
        ></input>
      </div>
      <div className='signup-input'>
        <label>Email</label>
        <input
          type='text'
          name='email'
          onChange={updateEmail}
          value={email}
        ></input>
      </div>
      <div className='signup-input'>
        <label>Password</label>
        <input
          type='password'
          name='password'
          onChange={updatePassword}
          value={password}
        ></input>
      </div>
      <div className='signup-input'>
        <label>Repeat Password</label>
        <input
          type='password'
          name='repeat_password'
          onChange={updateRepeatPassword}
          value={repeatPassword}
          required={true}
        ></input>
      </div>
      <button type='submit'
      className='signup-button'>Sign Up</button>
    <div className='register-link'>
            <div className='register-link-words'>
              Already organizing your thoughts?
            </div>
            <div className='register-link-words'>
              <NavLink to={'/login'}>
                Login here!
              </NavLink>
            </div>
          </div>
    </form>
    </div>
  );
};

export default SignUpForm;
