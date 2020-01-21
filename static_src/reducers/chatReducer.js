import update from 'react-addons-update';
import { SEND_MESSAGE, SUCCESS_MESSAGES_LOADING } from '../actions/messageActions';
import { ADD_CHAT } from "../actions/chatActions";

const initialStore = {
   chats: {
           1: {title: 'Чат 1', messageList: [], css: ''},
           2: {title: 'Чат 2', messageList: [], css: ''},
           3: {title: 'Чат 3', messageList: [], css: ''},
       },
};


export default function chatReducer(store = initialStore, action) {
   switch (action.type) {
       case SEND_MESSAGE: {
           return update(store, {
               chats: { $merge: { [action.chatId]: {
                   title: store.chats[action.chatId].title,
                   messageList: [...store.chats[action.chatId].messageList, action.messageId],
                   css: action.css
               } } },
           });
       }
       case SUCCESS_MESSAGES_LOADING: {
            const chats = {...store.chats};
            action.payload.forEach(msg => {
                const { id, chatId } = msg;
                chats[chatId].messageList.push(id);
            });
            return update(store, {
                chats: { $set: chats },
                isLoading: { $set: false },
            });
        }
       case ADD_CHAT: {
           const chatId = Object.keys(store.chats).length + 1;
           return update(store, {
              chats: { $merge: {
                  [chatId]: {
                      title: action.title, messageList: [], css: ''
              } } },
           });
       }
       default:
           return store;
   }
}
