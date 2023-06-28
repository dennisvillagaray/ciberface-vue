export const setUser = (context, user) => {
  context.commit('setUser', user);
}

export const setUserCurrent = (context, user) => {
  context.commit('setUserCurrent', user);
}

export const addContact = (context, { id, name }) => {
  context.commit('addContact', { id, name });
}

export const deleteContact = (context, contactId) => {
  context.commit('deleteContact', contactId);
}

export const setModalProfile = (context, modalProfile) => {
  context.commit('setModalProfile', modalProfile);
}

export const modifyUserCurrent = (context, user) => {
  context.commit('modifyUserCurrent', user);
}