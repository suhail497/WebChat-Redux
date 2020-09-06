// import db from '../../firebase';
// import { auth } from 'firebase';

import { firestore, auth } from "firebase";
import { authActionTypes } from './auth.actionTypes';



const signUpReducer = (user) => {
    return async (dispatch) => {

        const db = firestore();

        dispatch({ type: `${authActionTypes.USER_LOGIN}_REQUEST` });

        auth()
            .createUserWithEmailAndPassword(user.email, user.password)
            .then(data => {
                console.log(data);
                const currentUser = auth().currentUser;
                const name = `${user.firstName} ${user.lastName}`;
                currentUser.updateProfile({
                    displayName: name
                })
                    .then(() => {
                        //if you are here means it is updated successfully
                        db.collection('users').add({
                            firstName: user.firstName,
                            lastName: user.lastName,
                            uid: data.user.uid,
                            cretedAt: new Date(),
                            isOnline: true
                        })

                            .then(() => {
                                //succeful
                                const loggedInUser = {
                                    firstName: user.firstName,
                                    lastName: user.lastName,
                                    uid: data.user.uid,
                                    email: user.email
                                }
                                localStorage.setItem('user', JSON.stringify(loggedInUser));
                                console.log('User logged in successfully...!');
                                dispatch({
                                    type: `${authActionTypes.USER_LOGIN}_SUCCESS`,
                                    payload: { user: loggedInUser }
                                })
                            })
                            .catch(error => {
                                console.log(error);
                                dispatch({
                                    type: `${authActionTypes.USER_LOGIN}_FAILURE`,
                                    payload: { error }
                                });
                            });
                    });
            })
            .catch(error => {
                console.log(error);
            })


    }
}

const signInReducer = (user) => {
    return async (dispatch) => {
        dispatch({
            type: `${authActionTypes.USER_LOGIN}_REQUEST`
        })
        auth().signInWithEmailAndPassword(user.email, user.password)
            .then(data => {
                console.log(data)
                const name = data.user.displayName.split(" ")
                const firstName = name[0]
                const LastName = name[1]
                const loggedInUser = {
                    firstName: firstName,
                    lastName: LastName,
                    uid: data.user.uid,
                    email: user.email,

                }
                localStorage.setItem('user', JSON.stringify(loggedInUser))
                dispatch(
                    {
                        type: `${authActionTypes.USER_LOGIN}_SUCCESS`,
                        payload: { user: loggedInUser }
                    }
                )
            })
            .catch(error => {
                console.log(error)
                dispatch({
                    type: `${authActionTypes.USER_LOGIN}_FAILURE`,
                    payload: { error }
                })
            })
    }
}


const isLoggedInUser = () => {
    return dispatch => {
        const user = localStorage.getItem("user") ? JSON.parse(localStorage.getItem("user")) : null
        if (user) {
            dispatch(
                {
                    type: `${authActionTypes.USER_LOGIN}_SUCCESS`,
                    payload: { user }
                })
        }
        else {
            dispatch({
                type: `${authActionTypes.USER_LOGIN}_FAILURE`,
                payload: { error: "please login" }
            })
        }

    }

}

const isLoggedOut = () => {
    return async dispatch => {
        dispatch({
            type: `${authActionTypes.USER_LOGOUT}_REQUEST`

        })
        auth().signOut()
            .then(() => {
                localStorage.clear();
                dispatch({
                    type: `${authActionTypes.USER_LOGOUT}_SUCCESS`
                })

            })
            .catch(error => {
                console.log(error)

                dispatch({
                    type: `${authActionTypes.USER_LOGOUT}_FAILURE`,
                    payload: { error }
                })
            })
    }
}

export { signUpReducer, signInReducer, isLoggedInUser, isLoggedOut };



























































































//   return async (dispatch) => {
//         const db = firestore();
//         // dispatch({
//         //     type: `${authActionTypes.USER_LOGIN}_REQUEST`
//         // })
//         dispatch({ type: `${authActionTypes.USER_LOGIN}_REQUEST` });


//         auth()
//             .createUserWithEmailAndPassword(user.email, user.password)
//             .then(data => {
//                 console.log("user", data)
//                 const currentUser = auth().currentUser;
//                 const name = `${user.firstName} ${user.lastName} `
//                 currentUser.updateProfile({
//                     displayName: name
//                 })
//                     .then(() => {
//                         db.collection("users").add({
//                             firstName: user.firstName,
//                             lastName: user.lastName,
//                             uid: data.user.uid,
//                             cretedAt: new Date()
//                         })
//                     })

//                     .then(() => {
//                         const loggedUser = {
//                             firstName: user.firstName,
//                             lastName: user.lastName,
//                             email: user.email,
//                             uid: data.user.uid
//                         }
//                         localStorage.setItem('user', JSON.stringify(loggedUser))
//                         console.log("userlogged succesfuly")

//                         dispatch(
//                             {
//                                 type: `${authActionTypes.USER_LOGIN}_LOGGEDIN`,
//                                 paylaod: { user: loggedUser }
//                             }
//                         )
//                     })
//                     .catch(error => {
//                         console.log(error)
//                         dispatch({
//                             type: `${authActionTypes.USER_LOGIN}_FAILURE`,
//                             payload: { error }
//                         })
//                     })


//             })
//             .catch(error =>
//                 console.error(error)
//             )
//     }