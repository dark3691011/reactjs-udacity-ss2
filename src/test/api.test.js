import { _saveQuestion, _saveQuestionAnswer } from "../utils/_DATA";

describe("saveQuestion", () => {
  it("will return the question data", async () => {
    var result = await _saveQuestion({
      optionOneText: `optionOneText`,
      optionTwoText: `optionTwoText`,
      author: `sarahedo`,
    });
    expect(result.author).toEqual(`sarahedo`);
    expect(result.optionOne.text).toEqual("optionOneText");
    expect(result.optionTwo.text).toEqual("optionTwoText");
  });

  it("will return an error", async () => {
    let error = "";
    try {
      await _saveQuestion({
        optionOneText: `optionOneText`,
        optionTwoText: `optionTwoText`,
      });
    } catch (err) {
      error = err;
    }
    expect(error).toEqual(
      "Please provide optionOneText, optionTwoText, and author"
    );
  });
});

describe("saveQuestionAnswer", () => {
  it("will return the question data", async () => {
    var result = await _saveQuestionAnswer({
      authedUser: `sarahedo`,
      qid: `am8ehyc8byjqgar0jgpub9`,
      answer: `optionOne`,
    });
    expect(result).toEqual(true);
  });

  it("will return an error", async () => {
    let error = "";
    try {
      await _saveQuestionAnswer({
        authedUser: `sarahedo`,
      });
    } catch (err) {
      error = err;
    }
    expect(error).toEqual("Please provide authedUser, qid, and answer");
  });
});
