
import { USER_REGISTER_RESET_FORM, USER_SET_EMAIL, USER_SET_FULLNAME, USER_SET_PASSWORD } from './../ActionType';


const inititalState={
    email:"",
    password:"",
    fullName:"",

};


const userRegisterReducers = (state = inititalState,action) =>{
    switch (action.type) {
        case USER_REGISTER_RESET_FORM:
            return{
                ...state,

            };
            case USER_SET_EMAIL:
                return{
                    ...state,
                    email: action.payload.email,
                };
            
            case USER_SET_PASSWORD:
                return{
                    ...state,
                    password: action.payload.password,
                };
            
            case USER_SET_FULLNAME:
                return{
                    ...state,
                    fullName: action.payload.fullName,
                };
            
            
    
        default:
            return state;
    }

}
export default userRegisterReducers