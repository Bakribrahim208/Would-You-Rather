import React, { useEffect } from 'react'
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import LoginPage from './pages/LoginPage';
import { Provider } from 'react-redux'
import store from './Redux/Store'
import NavB from './component/Nav';
import HomeScreen from './component/Tabs'
import { Route, Switch } from 'react-router-dom'
import { QuestionShowScreen } from './pages/QuestionShowScreen';
import { useSelector, useDispatch } from 'react-redux'

import { fetchQuestion } from './Redux/index';
import { QuestionResult } from './pages/QuestionResult';
import { NewQuestionScreen } from './pages/NewQuestionScreen';
import { LeaderBoard } from './pages/LeaderBoard';
import { pageNotFound } from './pages/PageNotFound';
import { Unauthorized } from './pages/Unauthorized ';
import ProtectedRoute from './component/ProtectedRoute '

function App() {

  const dispatch = useDispatch()

  useEffect(() => {

    dispatch(fetchQuestion())

  }, [])




  return (




    <Provider store={store} >
      <div className="App">

        <NavB></NavB>




        <Switch >
          <Route exact path="/" component={LoginPage} />
          <ProtectedRoute exact path='/home' component={HomeScreen} />
          <ProtectedRoute exact path="/qustionwithAnswer/:question_id" component={QuestionShowScreen} />


          <ProtectedRoute exact path="/questionresult/:question_id" component={QuestionResult} />
          <ProtectedRoute exact path="/addquestion" component={NewQuestionScreen} />
          <ProtectedRoute exact path="/leaderboard" component={LeaderBoard} />
          <ProtectedRoute exact path="/404" component={pageNotFound} />
          <ProtectedRoute exact component={pageNotFound} />



        </Switch>
        <Route exact path='/unauthorized' component={Unauthorized} />


      </div>

    </Provider>
  );
}

export default App;
