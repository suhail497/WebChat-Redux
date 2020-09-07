import { userActionTypes } from './auth.actionTypes';
import { firestore } from 'firebase';


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
        case userActionTypes.GET_REALTIME_MESSAGES:
            state = {
                ...state,
                conversations: action.payload.conversations
            }
            break;
        // case `${userActionTypes.GET_REALTIME_MESSAGES}_FAILURE`:
        //     state = {
        //         ...state,
        //         convversations: []
        //     }
        //     break;
    }



    return state;

}

export default userReducer

