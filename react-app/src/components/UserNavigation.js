import React, { useContext } from 'react';
import { useSelector } from 'react-redux';
import { OptionContext } from '../context/OptionContext';
import LogoutButton from './auth/LogoutButton';

const UserNavigation = () => {
    const sessionUser = useSelector(state => state.session.user);

    const { setOption, setCurrentOption } = useContext(OptionContext);
    return (
        <div className='user-nav'>
            <div className='hello-user'>
                <div>
                    Hello, {sessionUser.firstName}
                </div>
                <div>
                    <LogoutButton />
                </div>
            </div>
            <div>

            </div>
            <div className='browser-user-nav'>
                <div className='browser-heading'>Browser</div>
                <div onClick={() => {
                    setOption('home');
                    setCurrentOption(null);
                }}>Home</div>
                <div onClick={() => {
                    setOption('notebooks');
                    setCurrentOption(null);
                }}>Notebooks</div>
                <div onClick={() => {
                    setOption('tags');
                    setCurrentOption(null);
                }}>Tags</div>
                <div onClick={() => {
                    setOption('notes');
                    setCurrentOption(null);
                }}>Notes</div>
            </div>
        </div>
    );
};

export default UserNavigation
