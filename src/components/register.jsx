import * as React from 'react';
import image from './../assets/images/background.jpg';
import { Link, NextUIProvider, Button, Card, Grid, Text, Input, Spacer, Container, Row, Col } from '@nextui-org/react';


function Register() {
  // 2. Use at the root of your app
  return (
    <div
    className="div"
    style={{backgroundImage: `url(${image})`, height: '100vh'}}>
    <Container css={{ display: 'flex' ,paddingTop: '$32'}}>
        <Card css={{padding: '$15', margin: 'auto', justifySelf: 'center', maxWidth: 'fit-content', backgroundColor:'#202225'}}>
          <Card.Header >
            <Grid.Container justify='center'>              
                    <Text h1>Register</Text>
            </Grid.Container>
          </Card.Header>
          <Card.Body>
          <Grid.Container gap={2}>
                <Grid>
                    <Input css={{width:'$60'}} label="Username"/>
                </Grid>
            </Grid.Container>
          <Grid.Container gap={2}>
                <Grid>
                    <Input css={{width:'$60'}} label="Email"/>
                </Grid>
            </Grid.Container>
            <Grid.Container gap={2}>
                <Grid>
                <Input.Password css={{width:'$60'}} label="Password" />
                </Grid>
            </Grid.Container>
            <Spacer></Spacer>
            <Grid.Container gap={2} justify='center'>
                <Grid>

                    <Button>Sign Up</Button>
                </Grid>
            </Grid.Container>
            <Grid.Container gap={2} justify='center'>
                <Grid>
                <Link css={{fontSize:'$xs'}} href="/signin">
                 Already have an account? Sign In
                </Link>
                </Grid>
            </Grid.Container>
            
          </Card.Body>
        </Card>
    </Container>
    </div>
  );
}

export default Register;