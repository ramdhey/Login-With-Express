import {combineReducers} from 'redux'

import userRegisterReducers from '../Redux/Regis/RegisReducers'


const rootReducers = combineReducers  ({
    userRegister: userRegisterReducers,
})




export default rootReducers