import React from 'react';
import { Container, Paper, Typography } from '@mui/material';

function About() {
    return (
        <div>
            <Container maxWidth="sm">
                <Paper elevation={3} style={{ padding: '20px', marginTop: '50px' }}>
                    <Typography variant="h2" gutterBottom>
                        About
                    </Typography>
                    <Typography variant="body1" paragraph>
                        This is the about page.
                    </Typography>
                </Paper>
            </Container>
        </div>
    )
}

export default About