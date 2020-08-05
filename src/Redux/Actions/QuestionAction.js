import axios from 'axios'
import { SAVE_QUESTION_ANSWER, ADD_QUESTION, FETCH_Question_REQUEST, FETCH_Question_SUCCESS, FETCH_Question_ERROR } from '../Type'
import { getInitialData, saveQuestion } from '../../utils/api'
import { addQuestionToUser } from './UserAction'






export const fetchQuestionSUCCESS = (Questions) => {
  return {
    type: FETCH_Question_SUCCESS,
    Questions
  }


}



export const saveQuestionAnswer = (userId, questionId, answer) => ({
  type: SAVE_QUESTION_ANSWER,
  userId,
  questionId,
  answer,
})



function addQuestion(question) {
  return {
    type: ADD_QUESTION,
    question,
  };
}



export function handleAddQuestion(optionOneText, optionTwoText, author) {
  return (dispatch) => {
    return saveQuestion({ optionOneText, optionTwoText, author }).then(
      (question) => {
        dispatch(addQuestion(question));
        dispatch(addQuestionToUser(question));
      }
    );
  };
}




export const fetchQuestion = () => {


  return (dispatch) => {
    dispatch(fetchQuestionSUCCESS())

    return getInitialData()
      .then(({ users, questions }) => {
        dispatch(fetchQuestionSUCCESS(questions))
      })
  }

}


