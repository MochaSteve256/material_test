import React from 'react';
import { Container, Paper, Typography } from '@mui/material';

function Contact() {
    return (
        <div>
            <Container maxWidth="sm">
                <Paper elevation={5} style={{ padding: '20px', marginTop: '50px' }}>
                    <Typography variant="h2" gutterBottom>
                        Contact
                    </Typography>
                    <Typography variant="body1" paragraph>
                        This is the contact page.
                    </Typography>
                </Paper>
            </Container>
        </div>
    )
}

export default Contact