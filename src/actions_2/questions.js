import { saveQuestion, saveQuestionAnswer } from "../utils/api_2";
import { showLoading, hideLoading } from "react-redux-loading-bar";

export const RECEIVE_TWEETS = "RECEIVE_TWEETS";
export const TOGGLE_TWEET = "TOGGLE_TWEET";
export const ADD_QUESTION = "ADD_QUESTION";

function addQuestion(question) {
  return {
    type: ADD_QUESTION,
    question,
  };
}

export function handleAddQuestion(text, replyingTo) {
  return (dispatch, getState) => {
    const { authedUser } = getState();

    dispatch(showLoading());

    return saveTweet({
      text,
      author: authedUser,
      replyingTo,
    })
      .then((tweet) => dispatch(addTweet(tweet)))
      .then(() => dispatch(hideLoading()));
  };
}

export function receiveTweets(tweets) {
  return {
    type: RECEIVE_TWEETS,
    tweets,
  };
}

function toggleTweet({ id, authedUser, hasLiked }) {
  return {
    type: TOGGLE_TWEET,
    id,
    authedUser,
    hasLiked,
  };
}

export function handleToggleTweet(info) {
  return (dispatch) => {
    dispatch(toggleTweet(info));

    return saveLikeToggle(info).catch((e) => {
      console.warn("Error in handleToggleTweet: ", e);
      dispatch(toggleTweet(info));
      alert("The was an error liking the tweet. Try again.");
    });
  };
}
