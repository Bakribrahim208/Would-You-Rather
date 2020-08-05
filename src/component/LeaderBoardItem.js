import React from 'react'
import { Card, Row, Image, Container, Col, Badge } from 'react-bootstrap';

export function LeaderBoardItem(props) {
    const { user, rank } = props


    return (
        <Card border="secondary" style={{ width: '18rem' }}>
            <Card.Img variant="top" style={{ width: '18rem', height: '12rem' }} src={user.image} />
            <Card.Title style={{ textAlign: "left", marginLeft: '12px', marginTop: '8px' }}>{user.name}

            </Card.Title>
            <Card.Text style={{ color: 'white', textAlign: "left", marginLeft: '12px', }}>
                <Badge variant="primary"> Rank :<br /> {rank + 1}th</Badge>

            </Card.Text>
            <Row style={{ textAlign: "left", marginLeft: '12px' }}>
                <Col>
                    <Card.Text >Questions  :  {user.questions} </Card.Text>
                    <Card.Text  >Answers  :  {user.answers} </Card.Text>

                </Col>
                <Col  >
                    <Card.Title> Scored</Card.Title>
                    <Badge variant="primary" style={{ fontSize: 25 }}>{user.total}</Badge>

                </Col>
            </Row>
        </Card>


    )
}
