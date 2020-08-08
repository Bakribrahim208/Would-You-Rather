import React from 'react'

import { Tabs, Tab } from 'react-bootstrap';
import { useSelector } from 'react-redux'
import QuestionList from '../pages/QuestionList'
import { Redirect } from 'react-router-dom';

function HomeScreen(props) {


  const questionData = useSelector(state => state.question)
  const Users = useSelector(state => state.user)
  const auth = useSelector(state => state.auth)

  console.log(auth)
  let answerIds = null
  let answered = null
  let unanswered = null

  if (auth.userId) {
    answerIds = Object.keys(Users.users[auth.userId].answers);
    answered = Object.values(questionData)
      .filter((question) => !answerIds.includes(question.id))
      .sort((a, b) => b.timestamp - a.timestamp);


    unanswered = Object.values(questionData)
      .filter((question) => answerIds.includes(question.id))
      .sort((a, b) => b.timestamp - a.timestamp);

  }












  return auth.userId ? (
    <div style={{ justifyContent: 'center', margin: '30px' }} >
      <Tabs
        className="tabs d-flex justify-content-center"
        defaultActiveKey="Unanswered" id="uncontrolled-tab-example"
      >
        <Tab eventKey="Unanswered" title="Unanswered Questions"   >
          <QuestionList questions={answered} users={Users.users}></QuestionList>
        </Tab>
        <Tab eventKey="nswered" title="Answered Questions">
          <QuestionList questions={unanswered} users={Users.users}></QuestionList>

        </Tab>

      </Tabs>


    </div>
  ) : <Redirect to={{
    pathname: '/',
    state: { from: props.location }
  }}
    />
}






export default HomeScreen
