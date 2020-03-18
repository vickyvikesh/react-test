import { LOGIN_DETAILS } from '../constants/types'

export const loginDetails = (data) => {
    return {
        type: LOGIN_DETAILS,
        payload: data
    }

}