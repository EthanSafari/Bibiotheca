import React, { useContext } from 'react';
import { useSelector } from 'react-redux';
import { OptionContext } from '../context/OptionContext';
import LogoutButton from './auth/LogoutButton';
import EditTagModal from './EditTagModal';
import Greeting from './EditTagModal';
import OpenModalButton from './OpenModalButton';

const UserNavigation = () => {
    const sessionUser = useSelector(state => state.session.user);

    const { option, setOption, setCurrentOption } = useContext(OptionContext);
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
            {option !== 'home' && (
                <div className='browser-user-nav mrgnbtm1rem hello-user'
                    onClick={() => {
                        setOption('home');
                        setCurrentOption(null);
                    }}>
                    <div>Home</div>
                    <i class="fa-solid fa-house edit-button"></i>
                </div>
            )}
            <div className='browser-user-nav'>
                <div className='browser-heading'>Details</div>
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
