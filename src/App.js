import React, { useEffect, Fragment } from 'react'
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
  const auth = useSelector(state => state.auth)

  useEffect(() => {

    dispatch(fetchQuestion())

  }, [dispatch])





  return (
    <Provider store={store} >
      <div className="App">

        <NavB></NavB>

        <div >{getLoginOrAppContent({ auth: auth })}</div>


      </div>

    </Provider>
  );
}


const getLoginOrAppContent = (props) => {
  const { auth } = props
  if (auth.userId) {
    return mainRoutes();
  } else {
    return <Route render={() => <LoginPage />} />;
  }

}


function mainRoutes() {
  return (
    <Fragment key="dashboard">
      <div >


        <Switch >
          <ProtectedRoute exact path='/' component={HomeScreen} />
          <ProtectedRoute exact path="/questions/:question_id" component={QuestionShowScreen} />
          <ProtectedRoute exact path="/questionresult/:question_id" component={QuestionResult} />
          <ProtectedRoute exact path="/add" component={NewQuestionScreen} />
          <ProtectedRoute exact path="/leaderboard" component={LeaderBoard} />
          <ProtectedRoute exact component={pageNotFound} />




        </Switch>
        <Route exact path='/unauthorized' component={Unauthorized} />


      </div>
    </Fragment>
  );
}


export default App;
