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
        db.collection("users")
            //.where("uid", "!=", uid)
            .onSnapshot((querySnapshot) => {
                const users = [];
                querySnapshot.forEach(function (doc) {
                    if (doc.data().uid != uid) {
                        users.push(doc.data());
                    }
                });
                // const db = firestore();
                // db.collection("users")
                //     .onSnapshot(snapshot => {
                //         const users = []
                //         snapshot.forEach(doc => {
                //             if (doc.data().uid != uid) {
                //                 users.push(doc.data())
                //             }
                //         })
                console.log(users)
                dispatch({
                    type: `${userActionTypes.REALTIMEUSER}_SUCCESS`,
                    payload: { users }
                });

            })

    }
}