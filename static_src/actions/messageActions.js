export const SEND_MESSAGE = '@@chat/ADD_CHAT';

export const sendMessage = (messageId, text, sender, chatId) => ({
    type: SEND_MESSAGE,
    messageId,
    text,
    sender,
    chatId,
});
