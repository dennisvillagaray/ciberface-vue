export const setUser = (state, user) => {
  state.users = user;
}

export const addContact = (state, contacts) => {
  state.contacts = contacts;
}

export const deleteContact = (state, contactId) => {
  state.contacts = state.contacts.filter((contact) => contact.id !== contactId);
}