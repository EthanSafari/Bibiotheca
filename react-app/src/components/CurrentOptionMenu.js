import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { burnNotebook, createNotebook, getSingleNotebook } from '../store/notebook';
import CurrentOptionContent from './CurrentOptionContent';

const CurrentOptionMenu = ({ notebooks }) => {
    const dispatch = useDispatch();
    const [addNewNotebook, setAddNewNotebook] = useState(false);
    const [newNotebook, setNewNotebook] = useState('');
    const sessionUser = useSelector(state => state.session.user);
    // const notTrashedNotebooks = notebooks.filter(notebook => notebook.trash === false); //for when trash feature is implemented


    const getCurrentNotebook = (notebookId) => {
        dispatch(getSingleNotebook(notebookId))
    };

    const deleteNotebookById = (notebookId) => {
        dispatch(burnNotebook(notebookId));
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const newNotebookItem = {
            name: newNotebook,
            trash: false,
            user_id: sessionUser.id,
        };

        dispatch(createNotebook(newNotebookItem));
        setAddNewNotebook(false);
    };

    return (
        <div className='current-option'>
            <div className='add-and-notebooks'>

                <div>
                    <div className='note-book-heading'> Notebooks </div>
                    {addNewNotebook ? (
                        <form onSubmit={handleSubmit} className='new-notebook'>
                            <input
                                type='text'
                                placeholder={'name'}
                                value={newNotebook}
                                onChange={e => setNewNotebook(e.target.value)}
                                required
                                className='name-input'
                            />
                            <button >Add Notebook</button>
                        </form>
                    ) : (
                        <div>
                            <button onClick={() => setAddNewNotebook(true)}>
                                Add notebook
                            </button>
                        </div>
                    )}
                </div>
                <div className='current-option-options'>
                    <div>
                        {notebooks.map(notebook => (
                            <div key={notebook.id} className='notebook-list-item'>
                                <div onClick={() => getCurrentNotebook(notebook.id)}>
                                    <div>{notebook.name}</div>
                                </div>
                                <button onClick={() => deleteNotebookById(notebook.id)}>Del</button>
                            </div>
                        ))}
                    </div>
                </div>
                <div>
                    Notes
                </div>
            </div>
                <div className='current-option-content'>
                    <CurrentOptionContent />
                </div>
        </div>
    );
};

export default CurrentOptionMenu;