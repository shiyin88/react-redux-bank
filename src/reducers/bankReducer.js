import constants from '../constants';

const initialState = {
    result: 0,
    lastValue: [0]
}
const bankReducer = (state=initialState, action) => {
    switch(action.type) {
        case constants.DEPOSIT_INTO_ACCOUNT:
            state = {
                ...state,
                result: state.result + action.payload,
                lastValue: [...state.lastValue, " " +action.payload]
            }
            console.log('deposit result ' + state.result + ' last value: ' + state.lastValue)
            break;
        case constants.WITHDRAW_FROM_ACCOUNT:
            state = {
                ...state,
                result: state.result - action.payload,
                lastValue: [...state.lastValue, " " + action.payload]
            }
            console.log('deposit result ' + state.result + ' last value: ' + state.lastValue)
            break;
    }
    return state;
}
export default bankReducer;