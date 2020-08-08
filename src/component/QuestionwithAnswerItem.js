import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { userAnsweredQuestion } from '../Redux/Actions/UserAction'
import { saveQuestionAnswer } from '../Redux/Actions/QuestionAction'
import {

  Card,
  ListGroup,
  ListGroupItem,
  Form
  , Button

} from "react-bootstrap";






export const QuestionwithAnswerItem = (props) => {

  const dispatch = useDispatch()

  const [answer, setAnswer] = useState("");


  const { question, users, history } = props;
  const auth = useSelector(state => state.auth)


  const user = users[auth.userId]


  const handleChange = (e) => {
    setAnswer(e.target.value)
  }

  const submitAnswer = () => {




    new Promise((res, rej) => {
      dispatch(saveQuestionAnswer(user.id, question.id, answer))

      dispatch(userAnsweredQuestion(user.id, question.id, answer))
      setTimeout(() => res('success'), 500);
    }).then(() => {

      history.push(`/questionresult/${question.id}`)
    });

  }



  return (
    <div>

      <Card style={{ width: '25rem', marginLeft: '5.8rem', marginBottom: '1rem', marginTop: '1rem' }}>
        <Card.Img variant="top" width="150" height="150" className="img-rounded text-center " src={users[question.author].avatarURL} />
        <Card.Body>
          <Card.Title className="text-center" ><b>{question.author}</b> asks would you rather:</Card.Title>
          <Form>
            <ListGroup className="pb-3"                  >
              <ListGroupItem
              >
                <input type="radio"
                  name="questionPoll"
                  id="optionOne"
                  className="mr-1"
                  value="optionOne"
                  onChange={handleChange}
                />{question.optionOne.text}
              </ListGroupItem>
              <ListGroupItem

              >
                <input type="radio"
                  name="questionPoll"
                  id="optionTwo"
                  className="mr-1"
                  value="optionTwo"
                  onChange={handleChange}

                />{question.optionTwo.text}
              </ListGroupItem>
            </ListGroup>
          </Form>

          <Card.Footer>
            <Button variant="primary" onClick={submitAnswer} style={{ width: "75%" }}>Submit</Button>

          </Card.Footer>

        </Card.Body>
      </Card>
    </div>

  )


}


