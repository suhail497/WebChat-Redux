import { combineReducers } from "redux"
import authReducer from './User/auth.Reducer';
import userReducer from "./User/user.reducer";


// export default () => ({
//     user: "suhail"
// })

const rootReducer = combineReducers({
    auth: authReducer,
    user: userReducer

})
export default rootReducer