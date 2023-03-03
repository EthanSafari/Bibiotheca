import React, { useContext } from 'react';
import { useSelector } from 'react-redux';
import { OptionContext } from '../context/OptionContext';
import LogoutButton from './auth/LogoutButton';

const UserNavigation = () => {
    const sessionUser = useSelector(state => state.session.user);
    const userTags = useSelector(state => state.session.tags);

    const { option, setOption } = useContext(OptionContext);
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
            <div>
                <div>Browser</div>
                <div onClick={() => setOption('notebooks')}>Notebooks</div>
                <div onClick={() => setOption('tags')}>Tags</div>
                <div onClick={() => setOption('notes')}>Notes</div>
            </div>
        </div>
    );
};

export default UserNavigation
