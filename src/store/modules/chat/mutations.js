export const addMessage = (state, { chatId, message }) => {
  if (state.chats[chatId]) {
    state.chats[chatId].push(message);
  } else {
    state.chats[chatId] = [message];
  }
}

export const addChatIdToList = (state, chatId) => {
  const chatIdFormated = parseInt(chatId);
  if (state.chatIdList.includes(chatIdFormated)) {
    return;
  }
  state.chatIdList.push(chatIdFormated);
}

export const removeChatIdFromList = (state, chatId) => {
  state.chatIdList = state.chatIdList.filter((id) => id !== parseInt(chatId));
}