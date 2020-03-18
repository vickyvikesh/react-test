import {combineReducers} from 'redux'
import {loginReducer} from '../reducers/loginReducer'
import {employeeReducer} from '../reducers/employeeDetailsReducer'


  const rootReducer = combineReducers({

    loginReducer,
    employeeReducer

 })
 export default rootReducer;