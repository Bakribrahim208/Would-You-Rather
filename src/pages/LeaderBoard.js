
import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Card, Row, Image, Container, Col, Badge } from 'react-bootstrap';
import { LeaderBoardItem } from '../component/LeaderBoardItem';

export function LeaderBoard() {
    const userState = useSelector(state => state.user)
    const usersData = Object.values(userState.users)
        .map((user) => ({
            id: user.id,
            name: user.name,
            image: user.avatarURL,
            answers: Object.values(user.answers).length,
            questions: user.questions.length,
            total: Object.values(user.answers).length + user.questions.length,
        }))
        .sort((a, b) => a.total - b.total)
        .reverse()
        .slice(0, 3);

    console.log(usersData)
    return (
        <Container style={{ margin: '30px', }}>
            <Row>
                {usersData.map((user, key) => (
                    <Col key={user.id}><LeaderBoardItem user={user} rank={key} /></Col>
                ))
                }
            </Row>

        </Container>
    )
}
