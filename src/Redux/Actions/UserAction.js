import {
  FETCH_USER_REQUEST, FETCH_USER_SUCCESS, USER_ANSWERED_QUESTION, FETCH_USER_ERROR
  , ADD_QUESTION_TO_USER
} from '../Type'
import { getInitialData } from '../../utils/api'


export const fetchUserRequest = () => {
  console.log('acion')
  return {
    type: FETCH_USER_REQUEST
  }
}




export const fetchUserSUCCESS = (users) => {
  return {
    type: FETCH_USER_SUCCESS,
    users
  }


}
export function userAnsweredQuestion(authedUser, qid, answer) {
  return { type: USER_ANSWERED_QUESTION, answer, qid, authedUser };
}

export function addQuestionToUser({ id, author }) {
  return {
    type: ADD_QUESTION_TO_USER,
    id,
    author
  };
}





export const fetchUserERROR = (error) => {
  return {
    type: FETCH_USER_ERROR,
    payload: { error: error }

  }

}



export const fetchUser = () => {


  return (dispatch) => {
    dispatch(fetchUserSUCCESS())

    return getInitialData()
      .then(({ users, questions }) => {
        dispatch(fetchUserSUCCESS(users))
      })
  }

}
