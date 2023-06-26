export const addMessage = (context, { chatId, message }) => {
  context.commit('addMessage', { chatId, message });
}

export const addChatIdToList = (context, chatId) => {
  context.commit('addChatIdToList', chatId);
}

export const removeChatIdFromList = (context, chatId) => {
  context.commit('removeChatIdFromList', chatId);
}