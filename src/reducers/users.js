import { RECEIVE_USERS } from "../actions/users";

export default function users(state = {}, action) {
  switch (action.type) {
    case RECEIVE_USERS:
      return {
        ...state,
        ...action.users,
      };
      case TOGGLE_USER:
        return {
          ...state,
          [action.authedUser]:{
            ...state[authedUser],
            answers: {
              ...state[authedUser].answers,
              [action.qid]: action.answer
            }
          },
        };
    default:
      return state;
  }
}
