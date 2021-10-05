import { GET_USER, REGISTER_USER, LOGIN_USER } from './types'

export const getUser = (user) => {
    console.log(user);
    return {
        type: GET_USER,
        payload: user
    }
}
// export const loginUser = (user) => {
    
//     return {
//         type: REGISTER_USER,
//         payload: user
//     }
// }
// export const registerUser = (user) => {
//     return {
//         type: LOGIN_USER,
//         payload: user
//     }
// }