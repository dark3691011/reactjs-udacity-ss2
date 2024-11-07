export const SET_AUTHED_USER = "SET_AUTHED_USER";

export function setAuthedUser(id) {
  return {
    type: SET_AUTHED_USER,
    id,
  };
}

export function handleLogin({userName, password}) {
  return (dispatch) => {
    dispatch(showLoading());
    login({userName, password}).then((res) => {
      if(res){
        dispatch(setAuthedUser(userName));
      }
      dispatch(hideLoading());
      return res
    });
  }
}

export function handleLogout() {
  return (dispatch) => {
    dispatch(showLoading());
    dispatch(setAuthedUser(null))
    dispatch(hideLoading());
    return true;
  }
}