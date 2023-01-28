import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { rewriteNote } from '../store/note';
import { reviseNotebook } from '../store/notebook';

const CurrentOptionContent = () => {
    const dispatch = useDispatch();
    const sessionUser = useSelector(state => state.session.user);
    const currentNotebook = useSelector(state => state.notebooks.oneNotebook);
    const currentNote = useSelector(state => state.notes.oneNote);

    const notebookItem = Object.values(currentNotebook);
    const noteItem = Object.values(currentNote);

    console.log(currentNote)

    const [switchEdit, setSwitchEdit] = useState(false);
    const [editNotebookName, setEditNotebookName] = useState(notebookItem[0]?.name);

    const [switchEditNoteBody, setSwitchEditNoteBody] = useState(false);
    const [editNoteBody, setEditNoteBody] = useState(noteItem[0]?.body);
    const [editNoteName, setEditNoteName] = useState(noteItem[0]?.name);

    useEffect(() => {
        if (currentNotebook) {
            setEditNotebookName(notebookItem[0]?.name);
        };
    }, [currentNotebook])

    useEffect(() => {
        if (currentNote) {
            setEditNoteBody(noteItem[0]?.body);
            setEditNoteName(noteItem[0]?.name);
        };
    }, [currentNote]);


    const handleSubmit = (e) => {
        e.preventDefault();

        const updateNotebook = {
            id: notebookItem[0]?.id,
            name: editNotebookName,
            trash: notebookItem[0]?.trash,
            user_id: sessionUser.id,
        };
        dispatch(reviseNotebook(updateNotebook));
        setSwitchEdit(false);
        setEditNotebookName(editNotebookName);
    };

    const onNoteEditSubmit = async () => {

        const updatedNote = {
            id: noteItem[0]?.id,
            name: editNoteName,
            body: editNoteBody,
            trash: noteItem[0]?.trash,
            user_id: sessionUser.id,
            notebook_id: notebookItem[0]?.id
        };
        await dispatch(rewriteNote(updatedNote));
        setSwitchEditNoteBody(false);
        setEditNoteBody(editNoteBody);
        setEditNoteName(editNoteName);
    }

    return (
        <div className='current-option-content-details'>
            <div className='edit-container'>
                {switchEdit && currentNotebook ? (
                    <form onSubmit={handleSubmit}>
                        <input
                            type='text'
                            placeholder={'Please enter a valid name'}
                            value={editNotebookName}
                            onChange={e => setEditNotebookName(e.target.value)}
                            required
                        />
                    </form>
                ) : (
                    <div className='edit-name'>
                        <button className='edit-button' onClick={() => setSwitchEdit(true)}><i class="fa-regular fa-pen-to-square edit-pencil"></i></button>
                        <div>{notebookItem[0]?.name}</div>
                    </div>
                )}
                {switchEditNoteBody && currentNote ? (
                    <form>
                        <input
                            type='text'
                            placeholder={'Please enter a valid name'}
                            value={editNoteName}
                            onChange={e => setEditNoteName(e.target.value)}
                            required
                        />
                    </form>
                ) : (
                    <div>{noteItem[0]?.name}</div>
                )}
                <div>
                    <button>delete</button>
                    {switchEditNoteBody && currentNote ? (
                        <button onClick={() => onNoteEditSubmit()}>save</button>
                    ) : (
                    <button onClick={() => setSwitchEditNoteBody(true)}>edit</button>
                    )}
                </div>
            </div>
            <div className='edit-container-area'>
                {switchEditNoteBody && currentNote ? (
                    <form>
                        <textarea
                            type='text'
                            placeholder={'Please enter youre thoughts here...'}
                            value={editNoteBody}
                            onChange={e => setEditNoteBody(e.target.value)}
                            required
                        />
                    </form>
                ) : (
                    <div>{noteItem[0]?.body}</div>
                )}
            </div>
        </div >
    );
};

export default CurrentOptionContent;
