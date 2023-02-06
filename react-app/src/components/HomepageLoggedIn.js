import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllNotes, getSingleNote } from '../store/note';
import { getAllNotebooks, getSingleNotebook } from '../store/notebook';
import CurrentOptionMenu from './CurrentOptionMenu';
import UserNavigation from './UserNavigation';

const HomepageLoggedIn = () => {
    const dispatch = useDispatch();
    const sessionUser = useSelector(state => state.session.user);
    const userNotebooks = useSelector(state => state.notebooks.allNotebooks);
    const userNotebookNotes = useSelector(state => state.notes.allNotes);

    useEffect(() => {
        dispatch(getAllNotebooks(sessionUser.id));
    }, [dispatch]);

    const notebookArray = userNotebooks ? Object.values(userNotebooks) : null;
    const noteArray = userNotebookNotes ? Object.values(userNotebookNotes) : null;

    let noteArrayCopy = noteArray[0] ? noteArray[0] : null;

    useEffect(() => {
        dispatch(getSingleNotebook(notebookArray[0]?.id));
        dispatch(getAllNotes(notebookArray[0]?.id));
    }, [notebookArray.length]);

    useEffect(() => {
        dispatch(getSingleNote(noteArray[0]?.id));
    }, [noteArray.length, noteArrayCopy]);

    return (
        <div className='homepage'>
            <UserNavigation />
            <CurrentOptionMenu notebooks={notebookArray} notes={noteArray} />
        </div>
    );
};

export default HomepageLoggedIn;
