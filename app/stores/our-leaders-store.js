import { EventEmitter } from "events";
import dispatcher from '../dispatcher/dispatcher';

class OurLeaderStore extends EventEmitter {
    constructor() {
        super();
        this.rajyaSabhaAttendence = null;
    }

    getState() {
        return {
            rajyaSabhaAttendence: this.rajyaSabhaAttendence
        }
    }

    updateChart(response) {
        this.rajyaSabhaAttendence = response.data;
        this.emit('change');
    }

    showErrorMessage(error) {
        this.data = error;
        this.emit('change');
    }

    handelActions(action) {
        switch (action.type) {
            case "RESPONSE_DATA_SUCCESS":
                this.updateChart(action.value);
            case "RESPONSE_DATA_FAILURE":
                this.showErrorMessage(action.value);
            default:
                return;
        }
    }
}

const ourLeaderStore = new OurLeaderStore;
dispatcher.register(ourLeaderStore.handelActions.bind(ourLeaderStore))
export default ourLeaderStore;