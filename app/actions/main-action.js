import dispatcher from '../dispatcher/dispatcher';

export function updateValue(value) {
    dispatcher.dispatch({
        type: "UPDATE_INPUT",
        value: value
    });
}