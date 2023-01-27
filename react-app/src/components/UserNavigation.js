import React from 'react';
import { useSelector } from 'react-redux';

const UserNavigation = () => {
    const sessionUser = useSelector(state => state.session.user);
    return (
        <div className='user-nav'>
            <div>
                Hello, {sessionUser.firstName}
            </div>
            <div>

            </div>
            <div>
                
            </div>
        </div>
    );
};

export default UserNavigation
