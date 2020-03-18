import { DISPLAY_DETAILS } from '../constants/types'

const initialState = {
    empdetails: []
}

export const employeeReducer = (state = initialState, action) => {

    console.log("dataaction", action.payload)
    switch (action.type) {
        case DISPLAY_DETAILS:
            // let empdetails = action.payload
            console.log("reducer",action.payload)
            return {
                ...state, empdetails:action.payload
            }
        default:
            return state;
    }
}
