import React, { Component, useEffect } from 'react'
import { useHistory } from "react-router-dom";

import PropTypes from 'prop-types'
import { Tabs, Tab } from 'react-bootstrap';
import { Link } from 'react-router-dom'
import { fetchQuestion, fetchUser } from '../Redux/index';
import { useSelector, useDispatch } from 'react-redux'
import QuestionList from '../pages/QuestionList'



function HomeScreen(props) {


  const questionData = useSelector(state => state.question)
  const Users = useSelector(state => state.user)
  const auth = useSelector(state => state.auth)

  const answerIds = Object.keys(Users.users[auth.userId].answers);
  const answered = Object.values(questionData)
    .filter((question) => !answerIds.includes(question.id))
    .sort((a, b) => b.timestamp - a.timestamp);


  const unanswered = Object.values(questionData)
    .filter((question) => answerIds.includes(question.id))
    .sort((a, b) => b.timestamp - a.timestamp);
  // if (Users.users[auth.userId].answers[questionId] !== undefined) {
  //   return questionId;
  // }


  console.log('-------')

  return (
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
  )
}






export default HomeScreen
