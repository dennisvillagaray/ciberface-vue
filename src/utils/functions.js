import store from '@/store';
const { user, isLogged } = store.state

export const usernameFunction = (to, from, next) => {
  if (!to.params.username && isLogged) {
    next({ path: `/profile/${user.userCurrent.username}` });
  } else if (!to.params.username && !isLogged) {
    next({ path: `/` });
  }
  else {
    next();
  }
}

export const setLogged = (logged) => {
  store.commit('modifyLogged', logged);
}