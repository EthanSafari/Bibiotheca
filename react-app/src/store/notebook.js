
const LOAD_NOTEBOOKS = 'notebooks/loadAllNotebooks';
const LOAD_SINGLE_NOTEBOOK = 'notebooks/loadOneNotebook';
const ADD_NOTEBOOK = 'notebooks/addNotebook';
const EDIT_NOTEBOOK = 'notebooks/editNotebook';
const DELETE_NOTEBOOK = 'notebooks/deleteNotebook';


export const loadAllNotebooks = (notebooks) => {
    return {
        type: LOAD_NOTEBOOKS,
        notebooks,
    };
};

export const loadOneNotebook = (notebook) => {
    return {
        type: LOAD_SINGLE_NOTEBOOK,
        notebook,
    };
};

export const addNotebook = (notebook) => {
    return {
        type: ADD_NOTEBOOK,
        notebook,
    };
};

export const editNotebook = (notebook) => {
    return {
        type: EDIT_NOTEBOOK,
        notebook,
    };
};

export const deleteNotebook = (notebookId) => {
    return {
        type: DELETE_NOTEBOOK,
        notebookId,
    };
};



export const getAllNotebooks = (userId) => async (dispatch) => {
    const res = await fetch(`/api/users/${userId}/notebooks`);
    if (res.ok) {
        const data = await res.json();
        dispatch(loadAllNotebooks(data));
        return data;
    };
};

export const getSingleNotebook = (notebookId) => async (dispatch) => {
    const res = await fetch(`/api/notebooks/${notebookId}`);
    if (res.ok) {
        const data = await res.json();
        console.log(data)
        dispatch(loadOneNotebook(data));
        return data;
    };
};

export const createNotebook = (notebook, userId) => async (dispatch) => {
    const res = await fetch(`/api/notebooks/`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(notebook),
    });
    if (res.ok) {
        const data = await res.json();
        const createNote = await fetch(`/api/notes/`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                name: 'First Note',
                trash: false,
                user_id: userId,
                notebook_id: data.id,
                body: 'Here is a place to display all your thoughts...',
            }),
        });
        dispatch(addNotebook(data));
        return data;
    };
};

export const reviseNotebook = (notebook) => async (dispatch) => {
    const res = await fetch(`/api/notebooks/${notebook.id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(notebook),
    });
    if (res.ok) {
        const data = await res.json();
        dispatch(editNotebook(data));
        return data;
    };
};

export const burnNotebook = (notebookId) => async (dispatch) => {
    const res = await fetch(`/api/notebooks/${notebookId}`, {
        method: 'DELETE'
    });
    if (res.ok) {
        const data = res.json();
        dispatch(deleteNotebook(notebookId));
        return data;
    };
};



const intialState = { allNotebooks: {}, oneNotebook: {} };
const notebookReducer = (state = intialState, action) => {
    let newState;
    switch (action.type) {
        case LOAD_NOTEBOOKS:
            newState = { allNotebooks: {}, oneNotebook: {...state.oneNotebook} };
            action.notebooks.notebooks.forEach(notebook => {
                newState.allNotebooks[notebook.id] = notebook;
            });
            return newState;

        case LOAD_SINGLE_NOTEBOOK:
            newState = { allNotebooks: {...state.allNotebooks}, oneNotebook: {} };
            newState.oneNotebook[action.notebook.id] = action.notebook;
            return newState;

        case ADD_NOTEBOOK:
            newState = { allNotebooks: {...state.allNotebooks}, oneNotebook: {...state.oneNotebook} };
            newState.allNotebooks[action.notebook.id] = action.notebook;
            newState.oneNotebook[action.notebook.id] = action.notebook;
            return newState;

        case EDIT_NOTEBOOK:
            newState = { allNotebooks: {...state.allNotebooks}, oneNotebook: {...state.oneNotebook} };
            newState.allNotebooks[action.notebook.id] = action.notebook;
            newState.oneNotebook[action.notebook.id] = action.notebook;
            return newState

        case DELETE_NOTEBOOK:
            newState = { allNotebooks: {...state.allNotebooks}, oneNotebook: {...state.oneNotebook} };
            delete newState.allNotebooks[action.notebookId];
            delete newState.oneNotebook[action.notebookId];
            return newState;

        default:
            return state;
    }
}

export default notebookReducer;
