import React from 'react';
import { Button, Container, Paper, Typography } from '@mui/material';

function Home() {

  document.title = "Home | MochaSteve";

  return (
    <div>
      <Container maxWidth="sm">
        <Paper elevation={5} style={{ padding: '20px', marginTop: '50px' }}>
          <Typography variant="h4" gutterBottom>
            Hi, I'm MochaSteve
          </Typography>
          <Typography variant="body1" paragraph>
            Welcome to my website
          </Typography>
          <Button variant="contained"
            onClick={() => {
              window.location.href = "/page2"
            }
          }>
          Click me
          </Button>
        </Paper>
      </Container>
    </div>
  );
}

export default Home;
