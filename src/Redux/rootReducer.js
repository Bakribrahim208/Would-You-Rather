import { combineReducers } from 'redux'
import userReducer from './Reducer/UserReducer'
import questionReducer from './Reducer/QuestionsReducer'
import authReducer from './Reducer/AuthReducer'

const rootReducer = combineReducers({
  user: userReducer,
  question: questionReducer,
  auth: authReducer
})

export default rootReducer
