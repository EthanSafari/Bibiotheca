import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { NavLink, Redirect } from 'react-router-dom';
import { login } from '../../store/session';

const LoginForm = () => {
  const [errors, setErrors] = useState([]);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const user = useSelector(state => state.session.user);
  const dispatch = useDispatch();

  const onLogin = async (e) => {
    e.preventDefault();
    const data = await dispatch(login(email, password));
    if (data) {
      setErrors(data);
    }
  };

  const updateEmail = (e) => {
    setEmail(e.target.value);
  };

  const updatePassword = (e) => {
    setPassword(e.target.value);
  };

  if (user) {
    return <Redirect to='/' />;
  }

  return (
    <div className='not-logged-in'>
      <div>
        <form onSubmit={onLogin} className='login-signup'>
          <img src='https://th.bing.com/th/id/R.3d328148c3a9233908abcfdb70d50054?rik=Qn52TFs0brJ9Lw&riu=http%3a%2f%2fclipart-library.com%2fimages_k%2fopen-book-transparent-background%2fopen-book-transparent-background-10.png&ehk=qE1MFU8x43ler4lDf9xKsTgXQM42qy5WTEsZtDavo8s%3d&risl=&pid=ImgRaw&r=0' className='bibliotheca-logo-png' />
          <div className='bibliotheca-login-welcome'>
            Welcome Back to Bibliotheca!
          </div>
          <div>
            {errors.map((error, ind) => (
              <div key={ind}>{error}</div>
            ))}
          </div>
          <div className='login-signup-input'>
            <label htmlFor='email'>Email</label>
            <input
              name='email'
              type='text'
              placeholder='Email'
              value={email}
              onChange={updateEmail}
            />
          </div>
          <div className='login-signup-input'>
            <label htmlFor='password'>Password</label>
            <input
              name='password'
              type='password'
              placeholder='Password'
              value={password}
              onChange={updatePassword}
            />
          </div>
          <div className='login-buttons'>
            <button type='submit' className='login-button' id='login'>Login</button>
            <button onClick={() => {
              setEmail('demo@aa.io');
              setPassword('password');
            }}
              className='login-button'
              id='demo-login'
            >Demo Login</button>
          </div>
          <div className='register-link'>
            <div className='register-link-words'>
              Aren't organizing your thoughts yet?
            </div>
            <div className='register-link-words'>
              <NavLink to={'/sign-up'}>
                Register here!
              </NavLink>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
