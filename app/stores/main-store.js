import { EventEmitter } from "events";

import dispatcher from '../dispatcher/dispatcher';

class MainStore extends EventEmitter {
    constructor() {
        super();
        this.displayInputValue = '';

    }

    getState() {
        return this.displayInputValue;
    }

    updateState(newValue) {
        this.displayInputValue = newValue;
        this.emit('change');
    }

    handelActions(action) {
        switch (action.type) {
            case "UPDATE_INPUT":
                this.updateState(action.value);
            default:
                return;
        }
    }
}

const mainStore = new MainStore;
dispatcher.register(mainStore.handelActions.bind(mainStore))
window.dispatcher = dispatcher;
export default mainStore;