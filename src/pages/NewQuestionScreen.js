import { useSelector, useDispatch } from 'react-redux'
import { handleAddQuestion } from '../Redux/Actions/QuestionAction'
import { Redirect } from 'react-router-dom';

import React, { useState } from 'react'
import {
    Row,
    FormGroup
    , Button, Col,
    Image
    , Form, Card
} from 'react-bootstrap'

export function NewQuestionScreen(props) {

    const dispatch = useDispatch()
    const { history } = props

    const [optionOne, setoptionOne] = useState("");
    const [optionTwo, setoptionTwo] = useState("");


    const userState = useSelector(state => state.user)
    const authState = useSelector(state => state.auth)

    const currentUser = userState.users[authState.userId]







    const handleChange = (e) => {

        switch (e.target.name) {
            case "optionOne":
                setoptionOne(e.target.value)

                break

            case "optionTwo":
                setoptionTwo(e.target.value)
                break

            default:

                break;
        }

    }
    const addNewQuestion = (e) => {

        e.preventDefault();

        new Promise((res, rej) => {
            dispatch(handleAddQuestion(optionOne, optionTwo, authState.userId));

            setTimeout(() => res('success'), 500);
        }).then(() => {

            history.push('/home')
        });





    }

    return authState.userId ? (
        <div style={{ display: 'flex', justifyContent: 'center' }}  >
            <Card style={{ width: '25rem', display: 'flex', flexDirection: 'row', justifyContent: 'center' }}>
                <Card.Header >
                    <Form inline className="justify-content-md-center">
                        <Image className="mr-sm-2"
                            width={150}
                            height={200}
                            src={currentUser.avatarURL} rounded />
                        <Card.Title> {currentUser.name} </Card.Title>

                    </Form>
                </Card.Header>
                <Card.Body>
                    <Row className="justify-content-md-center">
                        <Col xs="12" md="auto">
                            <Col xs="12" className="p-3" >
                                <b>Would You Rather:</b></Col>
                            <Form onSubmit={addNewQuestion}>
                                <FormGroup>
                                    <Form.Control type="text"
                                        size='lg'
                                        name="optionOne"
                                        value={optionOne}
                                        onChange={handleChange}
                                        placeholder="Option One" />
                                </FormGroup>
                                <FormGroup>
                                    <Form.Control type="text"
                                        size='lg'
                                        name="optionTwo"
                                        value={optionTwo}
                                        onChange={handleChange}
                                        placeholder="Option Two" />
                                </FormGroup>
                                <Button variant="primary" type="submit" value='Submit' disabled={optionOne.trim().length <= 0 || optionTwo.trim().length <= 0} >Submit</Button>
                            </Form>
                        </Col>
                    </Row>
                </Card.Body>
            </Card>




        </div>



    ) :
        <Redirect to={{
            pathname: '/',
            state: { from: props.location }
        }}
        />

}
