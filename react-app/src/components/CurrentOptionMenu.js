import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { getAllNotes, getSingleNote } from '../store/note';
import { burnNotebook, createNotebook, getSingleNotebook } from '../store/notebook';
import CurrentOptionContent from './CurrentOptionContent';
import { newNote } from '../store/note';
import { createTag, deleteTag, getSingleTag } from '../store/tag';
import Greeting from './EditTagModal';
import EditTagModal from './EditTagModal';

const CurrentOptionMenu = ({ notebooks, notes, tags }) => {
    const dispatch = useDispatch();
    const sessionUser = useSelector(state => state.session.user);
    const currentNotebookObj = useSelector(state => state.notebooks.oneNotebook);
    // const notTrashedNotebooks = notebooks.filter(notebook => notebook.trash === false); //for when trash feature is implemented

    const [newNotebook, setNewNotebook] = useState('');
    const [addNewNotebook, setAddNewNotebook] = useState(false);

    const [newNoteItemName, setNewNoteItemName] = useState('');
    const [addNewNote, setAddNewNote] = useState(false);

    const [newTagName, setNewTagName] = useState('');
    const [addNewTag, setAddNewTag] = useState(false);

    const getCurrentNotebook = async (notebookId) => {
        await dispatch(getSingleNotebook(notebookId));
        await dispatch(getAllNotes(notebookId));
    };

    const deleteNotebookById = async (notebookId) => {
        await dispatch(burnNotebook(notebookId));
    };

    const getCurrentNote = async (noteId) => {
        await dispatch(getSingleNote(noteId));
    };

    const getCurrentTag = async (tagId) => {
        await dispatch(getSingleTag(tagId));
    };

    const deleteTagById = async (tagId) => {
        await dispatch(deleteTag(tagId));
    };

    const currentNotebook = currentNotebookObj ? Object.values(currentNotebookObj) : null;

    const handleSubmit = async (e) => {
        e.preventDefault();
        const newNotebookItem = {
            name: newNotebook,
            trash: false,
            user_id: sessionUser.id,
        };
        await dispatch(createNotebook(newNotebookItem, sessionUser.id));
        setNewNotebook('');
        setAddNewNotebook(false);
    };

    const handleNewNoteSubmit = async (e) => {
        e.preventDefault();
        const newNoteItem = {
            name: newNoteItemName,
            trash: false,
            user_id: sessionUser.id,
            body: 'Press edit button to display your thoughts here :)',
            notebook_id: currentNotebook[0]?.id
        };
        await dispatch(newNote(newNoteItem));
        setNewNoteItemName('');
        setAddNewNote(false);
    };

    const handleNewTagSubmit = async (e) => {
        e.preventDefault();
        const newTagItem = {
            name: newTagName,
            user_id: sessionUser.id,
        };
        await dispatch(createTag(newTagItem));
        setNewTagName('');
        setAddNewTag(false);
    };

    return (
        <div className='current-option'>
            <div className='add-and-notebooks'>
                <div className='note-book-heading'> Notebooks </div>
                {addNewNotebook ? (
                    <form onSubmit={handleSubmit} className='new-notebook'>
                        <input
                            type='text'
                            placeholder={'Please enter a valid name*'}
                            value={newNotebook}
                            onChange={e => setNewNotebook(e.target.value)}
                            required
                            className='name-input'
                        />
                        <button disabled={newNotebook.length < 1
                            || new Array(newNotebook.length).fill(' ').join('') === newNotebook}
                            className='add-button'>
                            Add Notebook
                        </button>
                    </form>
                ) : (
                    <div className='add-note-button-container'>
                        <button onClick={() => setAddNewNotebook(true)} className='edit-button'>
                            + Add Notebook
                        </button>
                    </div>
                )}

                <div className='current-option-options'>
                    <div>
                        {notebooks.map(notebook => (
                            <div key={notebook.id} className='notebook-list-item'>
                                <div onClick={() => getCurrentNotebook(notebook.id)}>
                                    <div className='notebook-list-item-name'>{notebook.name}</div>
                                </div>
                                {notebooks.length > 1 && <button className='delete-button' title='Delete Notebook'
                                    onClick={() => deleteNotebookById(notebook.id)}><i class="fa-solid fa-fire fire-button"></i></button>}
                            </div>
                        ))}
                    </div>
                </div>

                <div>
                    <div className='note-heading'>
                        Notes
                    </div>
                    {addNewNote ? (
                        <form onSubmit={handleNewNoteSubmit} className='new-notebook'>
                            <input
                                type='text'
                                placeholder={'Please enter a valid name*'}
                                value={newNoteItemName}
                                onChange={e => setNewNoteItemName(e.target.value)}
                                required
                                className='name-input'
                            />
                            <button disabled={newNoteItemName.length < 1
                                || new Array(newNoteItemName.length).fill(' ').join('') === newNoteItemName}
                                className='add-button'>
                                Add Note
                            </button>
                        </form>
                    ) : (
                        <div className='add-note-button-container'>
                            <button className='edit-button' onClick={() => setAddNewNote(true)}>
                                + Add Note
                            </button>
                        </div>
                    )}
                    <div className='current-option-options'>
                        <div>
                            {notes.map(note => (
                                <div key={note.id} className='notebook-list-item'>
                                    <div onClick={async () => await getCurrentNote(note.id)} className='dsplyflx'>
                                        <div>{notes.indexOf(note) + 1}.</div>
                                        <div className='notebook-list-item-name'>{note.name}</div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                <div>
                    <div className='note-heading'>
                        Tags
                    </div>
                    {addNewTag ? (
                        <form onSubmit={handleNewTagSubmit} className='new-notebook'>
                            <input
                                type='text'
                                placeholder={'Please enter a valid name*'}
                                value={newTagName}
                                onChange={e => setNewTagName(e.target.value)}
                                required
                                className='name-input'
                            />
                            <button disabled={newTagName.length < 1
                                || new Array(newTagName.length).fill(' ').join('') === newTagName}
                                className='add-button'>
                                Add Tag
                            </button>
                        </form>
                    ) : (
                        <div className='add-note-button-container'>
                            <button className='edit-button' onClick={() => setAddNewTag(true)}>
                                + Add Tag
                            </button>
                        </div>
                    )}
                    <div className='current-option-options'>
                        <div>
                            {tags.map(tag => (
                                <div key={tag.id} className='notebook-list-item'>
                                    <div style={{ display: 'flex' }}>
                                        <EditTagModal tag={tag} />
                                        <div onClick={async () => await getCurrentTag(tag.id)}>
                                            <div className='notebook-list-item-name'>{tag.name}</div>
                                        </div>
                                    </div>
                                    <button className='delete-button' title='Delete Notebook'
                                        onClick={() => deleteTagById(tag.id)}><i class="fa-solid fa-fire fire-button"></i></button>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
            <div className='current-option-content'>
                <CurrentOptionContent />
            </div>
        </div>
    );
};

export default CurrentOptionMenu;
