// const { firestore } = require("firebase")
import firebase from "firebase"
import { firestore } from "firebase"
import { userActionTypes } from './auth.actionTypes';

export const realTimeuser = (uid) => {
    return async (dispatch) => {
        dispatch({
            type: `${userActionTypes.REALTIMEUSER}_REQUEST`
        })


        const db = firestore();
        const unsubscribe = db.collection("users")
            //.where("uid", "!=", uid)
            .onSnapshot((querySnapshot) => {
                const users = [];
                querySnapshot.forEach(function (doc) {
                    if (doc.data().uid != uid) {
                        users.push(doc.data());
                    }
                });

                console.log(users)
                dispatch({
                    type: `${userActionTypes.REALTIMEUSER}_SUCCESS`,
                    payload: { users }
                });

            })
        return unsubscribe;

    }
}


export const updateMessage = (msgObj) => {
    return async dispatch => {
        const db = firestore()
        db.collection("conversations")
            .add({
                ...msgObj,
                isView: false,
                createdAt: new Date()
            })
            .then((data) => {
                console.log(data)

            })
            .catch(error =>
                console.log(error))
    }
}

export const getRealTimeMessages = (user) => {
    return async dispatch => {
        const db = firestore()
        db.collection("conversations")
            .where('user_uid_1', 'in', [user.uid_1, user.uid_2])
            .orderBy("createdAt", "asc")
            .onSnapshot(querySnapshot => {
                const conversations = []
                querySnapshot.forEach(doc => {
                    if (
                        (doc.data().user_uid_1 == user.uid_1 && doc.data().user_uid_2 == user.uid_2)
                        ||
                        (doc.data().user_uid_1 == user.uid_2 && doc.data().user_uid_2 == user.uid_1)

                    ) {
                        conversations.push(doc.data())
                    }
                    if (conversations.length > 0) {
                        dispatch({
                            type: userActionTypes.GET_REALTIME_MESSAGES,
                            payload: { conversations }
                        })
                    }
                    else {
                        dispatch({
                            type: `${userActionTypes.GET_REALTIME_MESSAGES}_FAILURE`,
                            payload: { conversations: [] }
                        })
                    }
                })
                console.log(conversations)
            })
    }
}











































//     return async dispatch => {
//         const db = firestore()
//         db.collection("conversattions")
//             // .where("user_uid_1", "in", [user.uid_1, user.uid_2])
//             .where('user_uid_1', 'in', [user.uid_1, user.uid_2])
//             .onSnapshot(snapshot => {
//                 const conversations = [];
//                 snapshot.forEach(doc => {

//                     if (
//                         (doc.data().user_uid_1 == user.uid_1 && doc.data().user_uid_2 == user.uid_2)
//                         ||
//                         (doc.data().user_uid_1 == user.uid_2 && doc.data().user_uid_2 == user.uid_1)
//                     ) {
//                         conversations.push(doc.data())
//                     }





//                     if (conversations.length > 0) {
//                         dispatch({
//                             type: userActionTypes.REALTIMEUSER_MESSAGES,
//                             payload: { conversations }
//                         })
//                     } else {
//                         dispatch({
//                             type: `${userActionTypes.REALTIMEUSER_MESSAGES}_FAILURE`,
//                             payload: { conversations }
//                         })
//                     }
//                 })
//                 console.log(conversations)
//             })

//     }
// }