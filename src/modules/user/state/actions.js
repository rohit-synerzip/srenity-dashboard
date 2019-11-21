import * as types from './types'

export const getUserName = () => {
    return (dispatch) => {
        return dispatch({type: types.USER_GET_DATA,
        payload: {
            name: 'Srenity Admin'
        }
    })
}
}


export const setUserName = (userName) => {
    
    return (dispatch) => {
        return dispatch({type: types.USER_SET_DATA,
        payload: {
            name: userName
        }
    })
}
}