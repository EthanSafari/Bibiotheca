import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { reviseNotebook } from '../store/notebook';

const CurrentOptionContent = () => {
    const dispatch = useDispatch();
    const sessionUser = useSelector(state => state.session.user);
    const currentNotebook = useSelector(state => state.notebooks.oneNotebook);
    const notebookItem = Object.values(currentNotebook);

    const [switchEdit, setSwitchEdit] = useState(false);
    const [editNotebookName, setEditNotebookName] = useState(notebookItem[0]?.name);

    useEffect(() => {
        if (currentNotebook) {
            setEditNotebookName(notebookItem[0]?.name);
        };
    }, [currentNotebook])


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

    return (
        <div className='current-option-content-details'>
            <div className='edit-container'>
                {switchEdit && currentNotebook ? (
                    <form onSubmit={handleSubmit}>
                        <input
                            type='text'
                            placeholder={'name'}
                            value={editNotebookName}
                            onChange={e => setEditNotebookName(e.target.value)}
                            required
                        />
                        <button disabled={editNotebookName == ''}>Save</button>
                    </form>
                ) : (
                    <div className='edit-name'>
                        <button className='edit-button' onClick={() => setSwitchEdit(true)}><i class="fa-regular fa-pen-to-square edit-pencil"></i></button>
                        <div>{notebookItem[0]?.name}</div>
                    </div>
                )}
            </div>
            <div className='edit-container-area'>

            </div>
        </div>
    );
};

export default CurrentOptionContent;
