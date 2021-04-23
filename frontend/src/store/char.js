const GET_CHARS = 'chars/all';
const USER_CHAR = 'char/one';
const DEL_CHAR = 'char/del';
// const EDIT_CHAR = 'char/edit';
const NEW_CHAR = 'char/new';



function allChars(characters) {
    return {
        type: GET_CHARS,
        payload: characters
    }
}

function userChar(character) {
    return {
        type: USER_CHAR,
        payload: character
    }
}

function delChar(character) {
    return {
        type: DEL_CHAR,
        payload: character
    }
}

// function editChar(character) {
//     return {
//         type: EDIT_CHAR,
//         payload: character
//     }
// }

function newChar(character) {
    return {
        type: NEW_CHAR,
        payload: character
    }
}



export const getAllChars = () => async (dispatch) => {
    const res = await fetch(`http://localhost:5000/api/characters`);
    console.log('res ---->', res);
    // dispatch(allChars(res.data.characters));
    // return res;
}

export const getUserChar = (charId) => async (dispatch) => {
    const res = await fetch(`http://localhost:5000/api/characters/${charId}`);
    console.log('res ---->', res);
    // dispatch(userChar(res.data.character));
    // return res;
}

export const deleteChar = (id) => async (dispatch) => {
    const res = await fetch(`http://localhost:5000/api/characters/${id}`, {
        method: 'DELETE'
    });
    dispatch(delChar(id));
}

export const createChar = (character) => async (dispatch) => {
    const res = await fetch(`http://localhost:5000/api/characters/new`, {
        method: 'POST',
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(character)
    });
    console.log('res ---->', res)
    return dispatch(newChar(res.data.character));
}


// reducer
const charReducer = (state = { characters: {}, character: {} }, action) => {
    let newState;
    switch (action.type) {
        case GET_CHARS:
            return { ...state, characers: action.payload };
        case USER_CHAR:
            return { ...state, character: action.payload};
        case NEW_CHAR:
            return { ...state, character: action.payload};
        case DEL_CHAR:
            newState = state.filter(character => character === action.payload);
            return newState;
        default:
            return state;
    }
}

export default charReducer;