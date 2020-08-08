
import React from 'react'

import {

  Card
  , Button
} from "react-bootstrap";



export const QuestionItem = (props) => {

  const { question, users, history } = props;



  const user = users[question.author]




  const handleSumbit = () => {
    history.push(`/questions/${question.id}`)

  }
  return (
    <div>

      <Card style={{ width: '25rem', marginLeft: '5.8rem', marginBottom: '1rem', marginTop: '1rem' }}>
        <Card.Img variant="top" width="150" height="150" className="img-rounded text-center " src={user.avatarURL} />
        <Card.Body>
          <Card.Title className="text-center" ><b>{question.author}</b> asks would you rather:
        <br />
            {question.optionOne.text}
            <br />
            {question.optionTwo.text}
          </Card.Title>


          <Card.Footer>
            <Button variant="primary" style={{ width: "75%" }} onClick={handleSumbit}>View Poll</Button>

          </Card.Footer>

        </Card.Body>
      </Card>
    </div>
  )



}
