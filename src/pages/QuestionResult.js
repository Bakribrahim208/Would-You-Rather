
import React from 'react'
import { useSelector } from 'react-redux'
import { ProgressBar, Row, Col, ListGroup, ListGroupItem, Container, Card } from 'react-bootstrap';

export function QuestionResult(props) {
    const chooseStyle = { background: '#BEFE9D', justifyContent: 'center' }
    const defualtStyle = { justifyContent: 'center' }


    const userData = useSelector(state => state.user)
    const question = useSelector(state => state.question)
    const auth = useSelector(state => state.auth)

    const question_id = props.question_id === undefined ? props.match.params.question_id : props.question_id
    const result = question[question_id]
    const currentUserchoose = question[question_id][userData.users[auth.userId].answers[question_id]].text
    const total = result.optionOne.votes.length + result.optionTwo.votes.length

    const optionOneTotal = result.optionOne.votes.length
    const optionTwoTotal = result.optionTwo.votes.length



    return (



        <Container>
            <Card>
                <Card.Header ><b>Asked by {result.author}</b></Card.Header>
                <Row className="justify-content-md-center">
                    <Col md="auto">
                        <ListGroup>
                            <ListGroupItem style={(result.optionOne.text === currentUserchoose) ? chooseStyle : defualtStyle}>
                                <b>Would You Rather {result.optionOne.text}</b>

                                <ProgressBar animated now={(result.optionOne.votes.length / total) * 100}
                                    label={`${parseInt((result.optionOne.votes.length / total) * 100, 10)}%`} />
                                <b>({optionOneTotal}    votes out of   {total})</b>
                            </ListGroupItem>

                            <ListGroupItem style={(result.optionTwo.text === currentUserchoose) ? chooseStyle : defualtStyle}>
                                <b>Would You Rather {result.optionTwo.text}</b>

                                <ProgressBar animated now={(result.optionTwo.votes.length / total) * 100}
                                    label={`${parseInt((result.optionTwo.votes.length / total) * 100, 10)}%`}
                                />
                                <b>({optionTwoTotal}    votes out of   {total})</b>
                            </ListGroupItem>

                        </ListGroup>
                    </Col>
                </Row>

            </Card >
        </Container >


    )
}

