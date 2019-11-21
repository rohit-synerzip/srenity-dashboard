import * as types  from "./types";

const initialState = {
    name: null
};

export default function(state = initialState, action) {
    switch(action.type) {
        case types.USER_GET_DATA:
            return {
                ...state,
                name: action.payload.name,
            }

            case types.USER_SET_DATA:
                return {
                    ...state,
                    name: action.payload.name,
                }
    
            default: 
            return state
    }
}