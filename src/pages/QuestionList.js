
import React, { useEffect } from 'react';

import { fetchQuestion, fetchUser } from '../Redux/index';
import { useSelector, useDispatch } from 'react-redux'
import { QuestionItem } from '../component/QuestionItem'
import { useHistory } from "react-router-dom";

import {
  Row, Col
} from 'react-bootstrap'
import { _saveQuestion } from '../utils/_DATA';
function QuestionList(props) {
  const history = useHistory();

  const { questions, users } = props

  console.log(questions.length)
  console.log('sizzzzzzzzzzzzzzz')

  return (
    (questions.length !== 0) ?
      // map Ttems
      <div className="container"   >
        <div className="row">

          {
            questions.map((questionId) => {
              return (
                <Col key={questionId.id} xs={6} key={questionId} className="col-xs-1" >
                  <QuestionItem key={questionId.id} history={history} users={users} question={questionId}></QuestionItem>
                </Col>


              )

            }
            )
          }
        </div>
      </div>


      : <h1  >Congratulation You Answer All Question</h1>

  );
}


export default QuestionList




