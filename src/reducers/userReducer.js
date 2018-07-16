import constants from '../constants'

const initialState = {
    name: 'Alice',
    age: 27,
}
const userReducer = (state=initialState, action) => {
    switch(action.type) {
        case 'SET_NAME':
           state = {
                ...state,
                name: action.payload
           }
           console.log('set name ' + state.name )
           break;
        case 'SET_AGE':
           state = {
               ...state,
               age: action.payload
           }
           console.log('set age ' + state.age )
           break;
    }
    return state;
}

export default userReducer;