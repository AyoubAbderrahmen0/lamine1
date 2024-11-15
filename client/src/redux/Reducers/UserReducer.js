

const { LOAD_USER, LOGIN_USER, REGISTER_USER, ERROR_USER } = require("../ActionTypes/ActionTypes");

const initialState={
    load:false,
    user:null,
    error:null
}

//pure function

const UserReducer=(state=initialState,{type,payload})=>{


    switch (type) {
        case LOAD_USER:
            return{...state,load:true}
        case LOGIN_USER:
            return{...state,user:payload.foundUser,load:false}
        case REGISTER_USER:
            return{...state,load:false,user:payload.newUser}
        case ERROR_USER:
            return{...state,error:payload,load:false}
        default:
            return state
    }
}

export default UserReducer