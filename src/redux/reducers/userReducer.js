import {GET_USER, REGISTER_USER, LOGIN_USER} from '../actions/types'

const initialState = {
    user: {},
    token: null
}

function userReducer(state = initialState, action)
{
    switch(action.type){
        case GET_USER:
            return {
                user: action.payload.user, 
                token: action.payload.token
            }

        case REGISTER_USER:
            return state

        case LOGIN_USER:
            return state

        default:
            return state
    }
}

export default userReducer