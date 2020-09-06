import { userActionTypes } from './auth.actionTypes';


const intiState = {
    users: [],
    conversations: []
}

const userReducer = (state = intiState, action) => {

    switch (action.type) {
        case `${userActionTypes.REALTIMEUSER}_REQUEST`:
            break;
        case `${userActionTypes.REALTIMEUSER}_SUCCESS`:
            state = {
                ...state,
                users: action.payload.users
            }
            break;

    }


    return state;

}

export default userReducer