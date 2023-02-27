
const LOAD_TAGS = 'tags/loadAllUserTags';
const LOAD_SINGLE_TAG = 'tags/loadOneTag';
const ADD_TAG = 'tags/addNewTag';
const EDIT_TAG = 'tags/editUserTag';
const DELETE_TAG = 'tags/deleteSingleTag';
const CLEAR_TAGS = 'tags/clearTags';



export const loadAllUserTags = (tags) => {
    return {
        type: LOAD_TAGS,
        tags,
    };
};

export const loadOneTag = (tag) => {
    return {
        type: LOAD_SINGLE_TAG,
        tag,
    };
};

export const addNewTag = (tag) => {
    return {
        type: ADD_TAG,
        tag,
    };
};

export const editUserTag = (tag) => {
    return {
        type: EDIT_TAG,
        tag,
    };
};

export const deleteSingleTag = (tagId) => {
    return {
        type: DELETE_TAG,
        tagId,
    };
};

export const clearTags = () => {
    return {
        type: CLEAR_TAGS,
    };
};



export const getAllTags = (userId) => async (dispatch) => {
    const res = await fetch(`/api/users/${userId}/tags`);
    if (res.ok) {
        const data = await res.json();
        dispatch(loadAllUserTags(data));
        return data;
    };
};

export const getSingleTag = (tagId) => async (dispatch) => {
    const res = await fetch(`/api/tags/${tagId}`);
    if (res.ok) {
        const data = await res.json();
        dispatch(loadOneTag(data));
        return data;
    };
};


