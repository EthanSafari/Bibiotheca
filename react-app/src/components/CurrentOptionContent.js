import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { burnNote, rewriteNote } from '../store/note';
import { reviseNotebook } from '../store/notebook';

const CurrentOptionContent = () => {
    const dispatch = useDispatch();
    const sessionUser = useSelector(state => state.session.user);
    const currentNotebook = useSelector(state => state.notebooks.oneNotebook);
    const currentNote = useSelector(state => state.notes.oneNote);
    const currentNotesObj = useSelector(state => state.notes.allNotes);

    const notebookItem = Object.values(currentNotebook);
    const noteItem = Object.values(currentNote);
    const currentNotesArray = Object.values(currentNotesObj);

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
    };

    const deleteNoteItem = (noteId) => {
        dispatch(burnNote(noteId));
    };

    return (
        <div className='current-option-content-details'>
            <div className='edit-container'>
                {switchEdit && currentNotebook ? (
                    <form onSubmit={handleSubmit}>
                        <input
                            type='text'
                            placeholder={'Please enter a valid name*'}
                            value={editNotebookName}
                            onChange={e => setEditNotebookName(e.target.value)}
                            required
                        />
                        <button className='edit-button notebook-edit'
                            disabled={editNotebookName?.length < 1 || new Array(editNotebookName?.length).fill(' ').join('') === editNotebookName}>
                            <i class="fa-regular fa-floppy-disk edit-pencil"></i> Save
                        </button>
                    </form>
                ) : (
                    <div className='edit-name'>
                        <button title='Edit Notebook Name' className='edit-button' onClick={() => setSwitchEdit(true)}><i class="fa-regular fa-pen-to-square edit-pencil"></i></button>
                        <div>{notebookItem[0]?.name}</div>
                    </div>
                )}
                {switchEditNoteBody && currentNote ? (
                    <form>
                        <input
                            type='text'
                            placeholder={'Please enter a valid name*'}
                            value={editNoteName}
                            onChange={e => setEditNoteName(e.target.value)}
                            required
                            className='note-edit-name'
                        />
                    </form>
                ) : (
                    <div>{noteItem[0]?.name}</div>
                )}
                <div className='note-delete-and-edit-container'>
                    {currentNotesArray?.length > 1 && !switchEditNoteBody && (
                        <button className='edit-button' title='Delete Note' id='delete-note' onClick={() => deleteNoteItem(noteItem[0]?.id)}><i class="fa-solid fa-fire fire-button margin-delete"></i>Delete</button>
                    )}
                    {switchEditNoteBody && currentNote ? (
                        <button disabled={editNoteBody.length < 1
                            || editNoteName < 1
                            || new Array(editNoteName.length).fill(' ').join('') === editNoteName
                            || new Array(editNoteBody.length).fill(' ').join('') === editNoteBody}
                            onClick={() => onNoteEditSubmit()}
                            className='edit-button'><i class="fa-regular fa-floppy-disk edit-pencil"></i> Save</button>
                    ) : (
                        <button className='edit-button' onClick={() => setSwitchEditNoteBody(true)} title='Edit Note'><i class="fa-regular fa-file-lines edit-pencil"></i> Edit</button>
                    )}
                </div>
            </div>
            <div className='edit-container-area'>
                {switchEditNoteBody && currentNote ? (
                    <form>
                        <textarea
                            type='text'
                            placeholder={'* No one has an empty head. Even the most unhinged of minds contain at least a single thought. I would suggest you enter yours here. *'}
                            value={editNoteBody}
                            onChange={e => setEditNoteBody(e.target.value)}
                            required
                            className='text-area-note'
                        />
                    </form>
                ) : (
                    <div className='note-body-container'>{noteItem[0]?.body}</div>
                )}
            </div>
        </div >
    );
};

export default CurrentOptionContent;
