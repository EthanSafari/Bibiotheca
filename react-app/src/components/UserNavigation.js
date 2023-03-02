import React from 'react';
import { useSelector } from 'react-redux';
import LogoutButton from './auth/LogoutButton';

const UserNavigation = () => {
    const sessionUser = useSelector(state => state.session.user);
    const userTags = useSelector(state => state.session.tags);
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
                Tags
            </div>
        </div>
    );
};

export default UserNavigation
