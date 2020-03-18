import {DISPLAY_DETAILS} from '../constants/types';
import { user } from '../dashBoard/employeeDetails/employeeData'

export const employeeDetails = () => {
    // debugger
    // console.log("action",employeeData)
     return{
         type:DISPLAY_DETAILS,
         payload:user
     }
}