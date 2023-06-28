export const setUser = (state, user) => {
  state.users = user;
}

export const setUserCurrent = (state, userCurrent) => {
  state.userCurrent = userCurrent;
}

export const addContact = (state, contacts) => {
  state.contacts = contacts;
}

export const deleteContact = (state, contactId) => {
  state.contacts = state.contacts.filter((contact) => contact.id !== contactId);
}

export const setModalProfile = (state, modalProfile) => {
  state.modalProfile = modalProfile;
}

export const modifyUserCurrent = (state, user) => {
  state.userCurrent = user;
}