import { SAVE_QUESTION_ANSWER, ADD_QUESTION, FETCH_Question_SUCCESS } from '../Type'


const QuestionReducer = (state = {}, action) => {

  switch (action.type) {

    case FETCH_Question_SUCCESS: return {
      ...state,
      ...action.Questions
    }

    case ADD_QUESTION:
      const { question } = action;
      return {
        ...state,
        [question.id]: question,
      };

    case SAVE_QUESTION_ANSWER:
      {
        const { userId, questionId, answer } = action;
        return {
          ...state,
          [questionId]: {
            ...state[questionId],
            [answer]: {
              ...state[questionId][answer],
              votes: state[questionId][answer].votes.concat(userId),
            },
          },
        };
      }







    default: return state
  }
}

export default QuestionReducer