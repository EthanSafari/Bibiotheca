
const LOAD_NOTEBOOKS = 'notebooks/loadAllNotebooks';
const LOAD_SINGLE_NOTEBOOKS = 'notebooks/loadOneNotebook';
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
        type: LOAD_SINGLE_NOTEBOOKS
    }
}
