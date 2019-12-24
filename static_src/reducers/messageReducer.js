import update from 'react-addons-update';
import { SEND_MESSAGE } from '../actions/messageActions';

const initialStore = {
    messages: {
        1: { text: 'Привет!', sender: 'bot' },
        2: { text: 'Здравствуйте! ', sender: 'bot' },
    },
};

export default function messageReducer(store = initialStore, action) {
    switch (action.type) {
        case SEND_MESSAGE: {
            const messageId = Object.keys(store.messages).length + 1;

            return update(store, {
                messages: { $merge: { [messageId]: { text: action.text, sender: action.sender } } },
            });
        }
        default:
            return store;
    }
};