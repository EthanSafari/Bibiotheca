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
    const currentNotebook = useSelector(state => state.notebooks.oneNotebook);


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
            <div>
                {addNewNotebook ? (
                    <form onSubmit={handleSubmit}>
                        <input
                            type='text'
                            placeholder={'name'}
                            value={newNotebook}
                            onChange={e => setNewNotebook(e.target.value)}
                            required
                        />
                        <button>Add Notebook</button>
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
                {notebooks.map(notebook => (
                    <div key={notebook.id}>
                        <div onClick={() => getCurrentNotebook(notebook.id)}>
                            <div>{notebook.name}</div>
                        </div>
                        <button onClick={() => deleteNotebookById(notebook.id)}>Del</button>
                    </div>
                ))}
            </div>
            <div className='current-option-content'>
                <CurrentOptionContent notebook={currentNotebook} />
            </div>
        </div>
    );
};

export default CurrentOptionMenu;
