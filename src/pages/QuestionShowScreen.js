import React from 'react'
import { QuestionwithAnswerItem } from '../component/QuestionwithAnswerItem'
import { useSelector } from 'react-redux'
import { QuestionResult } from './QuestionResult'

export function QuestionShowScreen(props) {

    const userData = useSelector(state => state.user)
    const questionstate = useSelector(state => state.question)
    const auth = useSelector(state => state.auth)
    const question = questionstate[props.match.params.question_id]

    const currentUser = userData.users[auth.userId]



    const { history } = props;






    try {
        return (
            <div>
                {
                    currentUser.answers[question.id] ?
                        < QuestionResult question_id={question.id} />

                        :
                        <QuestionwithAnswerItem history={history} question={question} users={userData.users} />



                }
            </div>
        )
    } catch (e) {
        console.log(e)
        return <div></div>
    }

}
