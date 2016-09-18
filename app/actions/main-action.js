import dispatcher from '../dispatcher/dispatcher';
import axios from 'axios';

export function updateValue(value) {
    dispatcher.dispatch({
        type: "UPDATE_INPUT",
        value: value
    });
}

export function makeAjaxRequest(url) {
    axios.get(url)
        .then((response) => successHandler(response))
        .catch((error) => failureHandler(error))
}

function successHandler(response) {
    dispatcher.dispatch({
        type: "RESPONSE_DATA_SUCCESS",
        value: response
    });
}

function failureHandler(error) {
    dispatcher.dispatch({
        type: "RESPONSE_DATA_FAILURE",
        value: error
    });
}