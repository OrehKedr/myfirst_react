export const SEND_MESSAGE = '@@chat/SEND_MESSAGE';

export const sendMessage = (messageId, text, sender, chatId, css) => ({
    type: SEND_MESSAGE,
    messageId,
    text,
    sender,
    chatId,
    css,
});
