import csrfFetch from "./csrf";

export const SET_CURRENT_USER = 'session/SET_CURRENT_USER';
export const REMOVE_CURRENT_USER = 'session/SET_CURRENT_USER';

export const setCurrentUser = (user) => {
   return {
    type: SET_CURRENT_USER,
    user
   } 
}

export const removeCurrentUser = () => {
    return {
        type: REMOVE_CURRENT_USER
    }
}

export const login = ({email, password}) => async (dispatch) => {
    const res = await csrfFetch('/api/session', {
        method: "POST",
        body: JSON.stringify({email, password})
    });

    const data = await res.json();
    dispatch(setCurrentUser(data.user));
    return res;
}

const initialState = {user: null};

const sessionReducer = (state = initialState, action) => {
    switch(action.type) {
        case SET_CURRENT_USER:
            return { ...state, user: action.user };
        case REMOVE_CURRENT_USER:
            return { ...state, user: null }
        default:
            return state;
    }
}

export default sessionReducer;