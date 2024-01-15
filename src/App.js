import React from 'react';
import { Button, Container, Paper, Typography } from '@mui/material';
import MyDrawer from './MyDrawer';
function App() {
  return (
    <div>
      <MyDrawer />
      <Container maxWidth="sm">
        <Paper elevation={3} style={{ padding: '20px', marginTop: '50px' }}>
          <Typography variant="h4" gutterBottom>
            Material-UI Website
          </Typography>
          <Typography variant="body1" paragraph>
            Welcome to your Material-UI powered website.
          </Typography>
          <Button variant="contained" color="primary" onClick={() => {window.location.href = "/page2";}}>
            Click me
          </Button>
        </Paper>
      </Container>
    </div>
  );
}

export default App;
