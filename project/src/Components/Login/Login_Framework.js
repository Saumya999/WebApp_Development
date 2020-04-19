import React from 'react';
import {
  Button,
  Form,
  Grid,
  Header,
  Message,
  Segment
} from 'semantic-ui-react';

function Login_Framework() {
    return (
        <Grid left columns={3}>
          <Grid.Column>
            <Header as="h2" textAlign="center">
              Login
            </Header>
            <Segment>
              <Form size="large">
                <Form.Input
                  fluid
                  icon="user"
                  iconPosition="left"
                  placeholder="Email address"
                />
                <Form.Input
                  fluid
                  icon="lock"
                  iconPosition="left"
                  placeholder="Password"
                  type="password"
                />
                <Button color="blue" fluid size="large">
                  Login
                </Button>
              </Form>
            </Segment>
            <Message>
              Not registered yet? <a href="#">Sign Up</a>
            </Message>
          </Grid.Column>
        </Grid>
      );
} 

export default Login_Framework