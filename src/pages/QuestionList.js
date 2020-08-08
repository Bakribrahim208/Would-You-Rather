

import { QuestionItem } from '../component/QuestionItem'
import { useHistory } from "react-router-dom";
import React from 'react';



import {
  Col
} from 'react-bootstrap'
function QuestionList(props) {
  const history = useHistory();

  const { questions, users } = props


  return (
    (questions.length !== 0) ?
      // map Ttems
      <div className="container"   >
        <div className="row">

          {
            questions.map((questionId) => {
              return (
                <Col key={questionId.id} xs={6} className="col-xs-1" >
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




