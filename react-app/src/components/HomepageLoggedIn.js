import React, { useContext, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { OptionContext } from '../context/OptionContext';
import { getAllNotes, getSingleNote } from '../store/note';
import { getAllNotebooks, getSingleNotebook } from '../store/notebook';
import { getAllTags } from '../store/tag';
import CurrentOptionMenu from './CurrentOptionMenu';
import UserNavigation from './UserNavigation';

const HomepageLoggedIn = () => {
    const dispatch = useDispatch();
    const sessionUser = useSelector(state => state.session.user);
    const userNotebooks = useSelector(state => state.notebooks.allNotebooks);
    const userNotebookNotes = useSelector(state => state.notes.allNotes);

    const { option } = useContext(OptionContext);

    useEffect(() => {
        dispatch(getAllNotebooks(sessionUser.id));
        dispatch(getAllTags(sessionUser.id));
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
            {option === 'notebooks' && <CurrentOptionMenu notebooks={notebookArray} notes={noteArray} />}
        </div>
    );
};

export default HomepageLoggedIn;
