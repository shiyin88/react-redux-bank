import constants from '../constants';

export function onDeposit(amount) {
    return {
        type: constants.DEPOSIT_INTO_ACCOUNT,
        payload: amount
    };
}

export function onWithdrawl(amount) {
    return {
        type: constants.WITHDRAW_FROM_ACCOUNT,
        payload: amount
    }
}

export function setName(name) {
    return {
        type: 'SET_NAME',
        payload: name
    }
}

export function setAge(age) {
    return {
        type: 'SET_AGE',
        payload: age
    }
}
