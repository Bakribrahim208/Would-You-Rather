import { FETCH_USER_REQUEST, USER_ANSWERED_QUESTION, FETCH_USER_SUCCESS, FETCH_USER_ERROR, ADD_QUESTION_TO_USER } from '../Type'


const initState = {
    loading: false,
    users: {},
    error: ''
}

const userReducer = (state = initState, action) => {



    switch (action.type) {
        case FETCH_USER_REQUEST: return {
            ...state,
            loading: true,

        }

        case FETCH_USER_SUCCESS: return {
            ...state,
            loading: false,
            users: action.users,
            error: ''
        }

        case FETCH_USER_ERROR: return {
            ...state,
            loading: false,
            users: {},
            error: action.playload
        }

        case ADD_QUESTION_TO_USER:
            const { id, author } = action;
            return {
                ...state,
                users: {
                    ...state.users,
                    [author]: {
                        ...state.users[author],
                        questions: state.users[author].questions.concat(id),
                    },

                }
            };
        case USER_ANSWERED_QUESTION:
            const { authedUser, qid, answer } = action

            return {

                ...state,
                users: {
                    ...state.users,
                    [authedUser]: {
                        ...state.users[authedUser],
                        answers: {
                            ...state.users[authedUser].answers,
                            [qid]: answer
                        }
                    }
                }
            };



        default: return state
    }
}

export default userReducer