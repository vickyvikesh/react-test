import { LOGIN_DETAILS } from '../constants/types'

const initialState = {
    data: [
        {

            username: "hruday@gmail.com",
            password: "hruday123"

        }
    ],

    newData: {}

}

export const loginReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOGIN_DETAILS:
            const finddata = state.data;
            let newData = finddata.find((item) =>
                item.username === action.payload.username &&
                item.password === action.payload.password)

            return {
                ...state,
                newData
            }
        default:
            return state;
    }

}