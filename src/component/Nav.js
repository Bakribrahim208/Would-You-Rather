
import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { userLogout } from '../Redux/Actions/UserAuthAction'
import { useHistory } from "react-router-dom";
import { Link } from 'react-router-dom';

import {
  Navbar, Nav
  , Button,
  Image
  , Form,
} from 'react-bootstrap'


function NavB(props) {

  const dispatch = useDispatch()
  const history = useHistory();


  const auth = useSelector(state => state.auth)

  const userData = useSelector(state => state.user)

  const userinfo = userData.users !== undefined ? userData.users[auth.userId] : null;



  const hanldeLogout = () => {
    dispatch(userLogout())
    localStorage.removeItem('auth', false);

    history.entries = [];
    history.index = -1;

    history.push("/");
  }


  if (auth.islogin === true)
    return (
      <div>
        <Navbar bg="dark" variant="dark">
          <Navbar.Brand as={Link} to="/home">Would You Rather</Navbar.Brand>
          <Nav className="mr-auto"  >
            <Nav.Link as={Link} to="/home" >DashBoard</Nav.Link>
            <Nav.Link as={Link} to="/add"   >New Question</Nav.Link>
            <Nav.Link as={Link} to="/leaderboard" >LeaderBoard</Nav.Link>
          </Nav>
          <Form inline>

            <Image className="mr-sm-2"
              width={50}
              height={50}
              src={userinfo.avatarURL} roundedCircle />
            <Navbar.Brand > {userinfo.name}</Navbar.Brand>

            <Button variant="outline-info" onClick={hanldeLogout}>Logout</Button>
          </Form>
        </Navbar>
      </div>
    )
  else {
    return <div></div>
  }
}



export default NavB

