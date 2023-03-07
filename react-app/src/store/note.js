const LOAD_ALL_USER_NOTES = 'notes/getAllUserNotesById';
const LOAD_NOTES = 'notes/loadAllNotes';
const LOAD_SINGLE_NOTE = 'notes/loadOneNote';
const ADD_NOTE = 'notes/addNote';
const EDIT_NOTE = 'notes/editNote';
const DELETE_NOTE = 'notes/deleteNote';
const CLEAR_NOTES = 'notes/clearNotes';


export const getAllUserNotesById = (allUserNotes) => {
    return {
        type: LOAD_ALL_USER_NOTES,
        allUserNotes,
    };
};

export const loadAllNotes = (notes) => {
    return {
        type: LOAD_NOTES,
        notes,
    };
};

export const loadOneNote = (note) => {
    return {
        type: LOAD_SINGLE_NOTE,
        note,
    };
};

export const addNote = (note) => {
    return {
        type: ADD_NOTE,
        note,
    };
};

export const editNote = (note) => {
    return {
        type: EDIT_NOTE,
        note,
    };
};

export const deleteNote = (noteId) => {
    return {
        type: DELETE_NOTE,
        noteId,
    };
};

export const clearNotes = () => {
    return {
        type: CLEAR_NOTES,
    };
};



export const getAllUserNotes = (userId) => async dispatch => {
    const res = await fetch(`/api/users/${userId}/notes`);
    if (res.ok) {
        const data = await res.json();
        dispatch(getAllUserNotesById(data));
        return data;
    };
};

export const getAllNotes = (notebookId) => async (dispatch) => {
    const res = await fetch(`/api/notebooks/${notebookId}/notes`);
    if (res.ok) {
        const data = await res.json();
        dispatch(loadAllNotes(data));
        return data;
    };
};

export const getSingleNote = (noteId) => async (dispatch) => {
    const res = await fetch(`/api/notes/${noteId}`);
    if (res.ok) {
        const data = await res.json();
        dispatch(loadOneNote(data));
        return data;
    };
};

export const newNote = (note) => async (dispatch) => {
    const res = await fetch(`/api/notes/`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(note),
    });
    if (res.ok) {
        const data = await res.json();
        dispatch(addNote(data));
        return data;
    };
};

export const rewriteNote = (note) => async (dispatch) => {
    const res = await fetch(`/api/notes/${note.id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(note),
    });
    if (res.ok) {
        const data = await res.json();
        dispatch(editNote(data));
        return data;
    };
};

export const burnNote = (noteId) => async (dispatch) => {
    const res = await fetch(`/api/notes/${noteId}`, {
        method: 'DELETE'
    });
    if (res.ok) {
        const data = res.json();
        dispatch(deleteNote(noteId));
        return data;
    };
};



const intialState = { allNotes: {}, oneNote: {}, userNotes: {} };
const noteReducer = (state = intialState, action) => {
    let newState;
    switch (action.type) {
        case LOAD_ALL_USER_NOTES:
            newState = { allNotes: { ...state.allNotes }, oneNote: { ...state.oneNote }, userNotes: {} };
            action.allUserNotes.userNotes.forEach(note => {
                newState.userNotes[note.id] = note;
            });
            return newState;

        case LOAD_NOTES:
            newState = { allNotes: {}, oneNote: { ...state.oneNote }, userNotes: {...state.userNotes} };
            action.notes.notes.forEach(note => {
                newState.allNotes[note.id] = note;
            });
            return newState;

        case LOAD_SINGLE_NOTE:
            newState = { allNotes: { ...state.allNotes }, oneNote: {}, userNotes: {...state.userNotes} };
            newState.oneNote[action.note.id] = action.note;
            return newState;

        case ADD_NOTE:
            newState = { allNotes: { ...state.allNotes }, oneNote: { ...state.oneNote }, userNotes: {...state.userNotes} };
            newState.allNotes[action.note.id] = action.note;
            newState.oneNote[action.note.id] = action.note;
            newState.userNotes[action.note.id] = action.note;
            return newState;

        case EDIT_NOTE:
            newState = { allNotes: { ...state.allNotes }, oneNote: { ...state.oneNote }, userNotes: {...state.userNotes} };
            newState.allNotes[action.note.id] = action.note;
            newState.oneNote[action.note.id] = action.note;
            newState.userNotes[action.note.id] = action.note;
            return newState

        case DELETE_NOTE:
            newState = { allNotes: { ...state.allNotes }, oneNote: { ...state.oneNote }, userNotes: {...state.userNotes} };
            delete newState.allNotes[action.noteId];
            delete newState.oneNote[action.noteId];
            delete newState.userNotes[action.noteId];
            return newState;

        case CLEAR_NOTES:
            newState = { allNotes: {}, oneNote: {}, userNotes: {} };
            return newState;

        default:
            return state;
    };
};

export default noteReducer;
