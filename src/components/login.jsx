import * as React from 'react';
import image from './../assets/images/background.jpg';

// 1. import `NextUIProvider` component
import { Link, NextUIProvider, Button, Card, Grid, Text, Input, Spacer, Container, Row, Col } from '@nextui-org/react';


function Login() {
  // 2. Use at the root of your app
  return (
    <div
    className="div"
    style={{backgroundImage: `url(${image})`, height: '100vh'}}>
    <Container css={{ display: 'flex', paddingTop: '$40'}}>
        <Card css={{padding: '$15', margin: 'auto', justifySelf: 'center', maxWidth: 'fit-content', backgroundColor:'#202225'}}>
          <Card.Header >
            <Grid.Container justify='center'>              
                    <Text h1>Sign In</Text>
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
                <Input.Password css={{width:'$60'}} label="Password" />
                </Grid>
            </Grid.Container>
            <Grid.Container>
            <Spacer y={1.6} />
                <Grid>
                    <Link css={{fontSize:'$xs'}} href="#">
                    Forgot Password
                    </Link>
                </Grid>
            </Grid.Container>
            <Grid.Container gap={2} justify='center'>
                <Grid>
                    <Button>Sign In</Button>
                </Grid>
            </Grid.Container>
            <Grid.Container gap={2} justify='center'>
                <Grid>
                <Link css={{fontSize:'$xs'}} href="/register">
                 Register Now
                </Link>
                </Grid>
            </Grid.Container>
            
          </Card.Body>
        </Card>
    </Container>
    </div>
  );
}

export default Login;