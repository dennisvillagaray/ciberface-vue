export const setUser = (context, user) => {
  context.commit('setUser', user);
}

export const addContact = (context, { id, name }) => {
  context.commit('addContact', { id, name });
}

export const deleteContact = (context, contactId) => {
  context.commit('deleteContact', contactId);
}