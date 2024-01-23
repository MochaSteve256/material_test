import React from 'react';
import { Button, Container, Paper, Typography } from '@mui/material';

function NoPage() {

  document.title = "Error 404 | MochaSteve";

  return (
    <div>
      <Container maxWidth="sm">
        <Paper elevation={10} style={{ padding: '20px', marginTop: '50px' }}>
          <Typography variant="h4" align='center' sx={{ marginTop: '50px' }}>
            Page not found
          </Typography>
          <Typography variant="h1" align='center' fontFamily={"monospace"} fontSize={"300px"}>
            404
          </Typography>
          <Button variant="contained" style={{ display: 'block', margin: 'auto' }} onClick={() => window.location.href = "/"}>Go Home</Button>
        </Paper>
      </Container>
    </div>
  )
}

export default NoPage