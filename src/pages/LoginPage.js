import { fetchUser } from '../Redux/index';
import { useSelector, useDispatch } from 'react-redux'

import React, { useEffect, useState } from 'react';
import { Alert } from 'react-bootstrap'
import { userAuth } from '../Redux/Actions/UserAuthAction'
import {
  Card,
  Grid,
  CardHeader,
  InputLabel,
  FormControl,
  CircularProgress,
  Select, MenuItem, ListItemIcon, ListItem, Typography, Button,
  ListItemText, Avatar

}
  from '@material-ui/core'
function LoginPage(props) {
  const { history } = props;
  console.log(props)
  const lastpath = props.location ? props.location.state.from.pathname : null



  const [user, setUser] = useState('');
  const [showError, setshowError] = useState(false);

  const userData = useSelector(state => state.user)
  const dispatch = useDispatch()
  useEffect(() => {

    dispatch(fetchUser())
  }, [dispatch])


  const handleChange = (event) => {

    setshowError(false) //hide eror bar if user click button befor  select

    setUser(event.target.value)
  }



  const handleLogin = () => {

    if (user.length > 0) {
      dispatch(userAuth(user))
      localStorage.setItem('auth', true);

      // if (lastpath && lastpath !== '/unauthorized') {
      //   console.log(lastpath)
      //   console.log('lastpath')
      //   history.push(lastpath);

      // } else {
      //   console.log('homee')


      // }
      //  history.push("/home");

    }
    else {
      setshowError(true)


    }

  }
  return userData.loading ? (<CircularProgress />) : userData.error ? (<h1>error</h1>) :
    (
      <div
      >

        {

          userData.users !== undefined ?

            <Grid
              container
              spacing={0}
              direction="column"
              alignItems="center"
              justify="center"
              style={{ minHeight: '100vh' }}
            >
              <Grid item xs={7}>
                <Card>
                  <CardHeader title='Login-in to Your Account'></CardHeader>
                  <FormControl  >
                    <InputLabel id="demo-controlled-open-select-label">Users</InputLabel>
                    <Select
                      labelId="demo-controlled-open-select-label"
                      id="demo-controlled-open-select"
                      value={user}
                      defaultValue={user}
                      displayEmpty
                      onChange={handleChange}
                      style={{ padding: '8px', margin: '8px', minWidth: 300 }}
                    >


                      {

                        Object.keys(userData.users).map((singleUser) => {
                          return (
                            <MenuItem key={userData.users[singleUser].id} value={userData.users[singleUser].id}>
                              <ListItem button>
                                <ListItemIcon><Avatar alt="Remy Sharp" src={userData.users[singleUser].avatarURL} />
                                </ListItemIcon>
                                <ListItemText primary={userData.users[singleUser].name} />
                              </ListItem></MenuItem>
                          )
                        }


                        )
                      }

                    </Select>
                  </FormControl>


                  <Typography variant="body2" color="textSecondary"
                    style={{ padding: '8px', margin: '20px' }}
                    id="demo-controlled-open-select-label">
                    Select a user from above and click the login button.
                    <br />
                    This is a demo app and doesn't require a password.</Typography >
                  <Button onClick={handleLogin} style={{ padding: '8px', margin: '8px', width: '50%' }}
                    variant="contained" color="primary">
                    Login
                 </Button>

                </Card>
              </Grid>
            </Grid>

            : <CircularProgress />

        }

        {
          showError ?

            <Alert variant="danger" onClose={() => setshowError(false)} dismissible>
              <Alert.Heading>Oh snap! You got an error!</Alert.Heading>
              <p>
                Please Select User To Login
 </p>
            </Alert> : <div></div>

        }



      </ div >);
}




export default LoginPage