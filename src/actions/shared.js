import { hideLoading, showLoading } from "react-redux-loading-bar";
import { getInitialData, saveQuestionAnswer } from "../utils/api";
import { receiveQuestions, toggleQuestion } from "./questions";
import { setAuthedUser } from "./authedUser";
import { receiveUsers, toggleUser } from "./users";

const AUTHED_ID = "tylermcginnis";

export function handleInitialData() {
  return (dispatch) => {
    dispatch(showLoading());
    return getInitialData().then(({ users, questions }) => {
      dispatch(receiveUsers(users));
      dispatch(receiveQuestions(questions));
      dispatch(setAuthedUser(AUTHED_ID));
      dispatch(hideLoading());
    });
  };
}

export function handleSaveQuestionAnswer({ authedUser, qid, answer }) {
  return (dispatch) => {
    dispatch(showLoading());
    return saveQuestionAnswer({
      authedUser,
      qid,
      answer,
    }).then((_res) => {
      dispatch(
        toggleQuestion({
          id: qid,
          authedUser,
          answer,
        })
      );
      dispatch(
        toggleUser({
          qid,
          authedUser,
          answer,
        })
      );
      dispatch(hideLoading());
    });
  };
}
