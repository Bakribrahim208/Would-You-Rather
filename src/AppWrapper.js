import { Provider } from 'react-redux'
import React, { useEffect } from 'react' 
import {NewQuestionScreen} from './pages/NewQuestionScreen'
import store from './Redux/Store'
import App from './App'
const AppWrapper = () => {
   
    return (
      <Provider store={store}>  
        <App />  
       
      </Provider>
    )
  }

  export default AppWrapper
  