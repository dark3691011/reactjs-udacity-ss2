export const RECEIVE_USERS = "RECEIVE_USERS";
export const TOGGLE_USER = "TOGGLE_USER"

export function receiveUsers(users) {
  return {
    type: RECEIVE_USERS,
    users,
  };
}

export function toggleUser({authedUser, qid, answer}) {
  return {
    type: TOGGLE_USER,
    authedUser, qid, answer
  }
}