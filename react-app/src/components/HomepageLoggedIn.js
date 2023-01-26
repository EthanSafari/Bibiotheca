import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllNotebooks, getSingleNotebook } from '../store/notebook';
import CurrentOptionMenu from './CurrentOptionMenu';
import UserNavigation from './UserNavigation';

const HomepageLoggedIn = () => {
    const dispatch = useDispatch();
    const sessionUser = useSelector(state => state.session.user);
    const userNotebooks = useSelector(state => state.notebooks.allNotebooks);

    useEffect(() => {
        dispatch(getAllNotebooks(sessionUser.id));
    }, []);

    const notebookArray = userNotebooks ? Object.values(userNotebooks) : null;

    useEffect(() => {
        dispatch(getSingleNotebook(notebookArray[0]?.id));
    }, [notebookArray.length]);

    return (
        <div className='homepage'>
            <UserNavigation />
            <CurrentOptionMenu notebooks={notebookArray} />
        </div>
    );
};

export default HomepageLoggedIn;
