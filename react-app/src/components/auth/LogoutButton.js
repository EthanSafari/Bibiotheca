import React from 'react';
import { useDispatch } from 'react-redux';
import { logout } from '../../store/session';

const LogoutButton = () => {
  const dispatch = useDispatch()
  const onLogout = async (e) => {
    await dispatch(logout());
  };

  return <button className='edit-button' onClick={onLogout}><i class="fa-solid fa-right-from-bracket edit-pencil"></i></button>;
};

export default LogoutButton;
