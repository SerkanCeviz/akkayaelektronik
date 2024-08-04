import React from 'react';
import { Container, Typography, Grid, Card, CardContent, Box, Avatar } from '@mui/material';

function About() {
  return (
    <Container>
      <Box my={4}>
        <Typography variant="h3" component="h1" gutterBottom>
          About Us
        </Typography>
        <Typography variant="body1" paragraph>
          Welcome to our electronics store. We specialize in LED screens and lighting solutions. Our mission is to provide high-quality products and exceptional customer service.
        </Typography>
      </Box>

      <Box my={4}>
        <Typography variant="h4" component="h2" gutterBottom>
          Our History
        </Typography>
        <Typography variant="body1" paragraph>
          Founded in 2000, our company has grown from a small local business to a leading provider of electronics and lighting solutions. We have always focused on quality and customer satisfaction.
        </Typography>
      </Box>

      <Box my={4}>
        <Typography variant="h4" component="h2" gutterBottom>
          Our Mission and Vision
        </Typography>
        <Typography variant="body1" paragraph>
          Our mission is to deliver innovative and reliable electronics solutions that enhance the lives of our customers. Our vision is to be the most trusted and preferred provider of LED screens and lighting solutions worldwide.
        </Typography>
      </Box>

      <Box my={4}>
        <Typography variant="h4" component="h2" gutterBottom>
          Our Values
        </Typography>
        <Typography variant="body1" paragraph>
          Integrity, innovation, and customer satisfaction are at the core of our values. We believe in building long-term relationships with our customers and partners.
        </Typography>
      </Box>

      <Box my={4}>
        <Typography variant="h4" component="h2" gutterBottom>
          Meet Our Team
        </Typography>
        <Grid container spacing={4}>
          <Grid item xs={12} md={4}>
            <Card>
              <CardContent>
                <Avatar sx={{ width: 100, height: 100, mx: 'auto' }} src="https://via.placeholder.com/100" alt="CEO" />
                <Typography variant="h6" component="h3" align="center">
                  John Doe
                </Typography>
                <Typography variant="body2" color="textSecondary" align="center">
                  CEO
                </Typography>
                <Typography variant="body2" color="textSecondary" paragraph align="center">
                  John has over 20 years of experience in the electronics industry and leads our team with a vision for innovation.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} md={4}>
            <Card>
              <CardContent>
                <Avatar sx={{ width: 100, height: 100, mx: 'auto' }} src="https://via.placeholder.com/100" alt="CTO" />
                <Typography variant="h6" component="h3" align="center">
                  Jane Smith
                </Typography>
                <Typography variant="body2" color="textSecondary" align="center">
                  CTO
                </Typography>
                <Typography variant="body2" color="textSecondary" paragraph align="center">
                  Jane is responsible for our technological advancements and ensures we stay ahead of industry trends.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} md={4}>
            <Card>
              <CardContent>
                <Avatar sx={{ width: 100, height: 100, mx: 'auto' }} src="https://via.placeholder.com/100" alt="COO" />
                <Typography variant="h6" component="h3" align="center">
                  Mark Johnson
                </Typography>
                <Typography variant="body2" color="textSecondary" align="center">
                  COO
                </Typography>
                <Typography variant="body2" color="textSecondary" paragraph align="center">
                  Mark oversees our operations and ensures that our products and services meet the highest standards.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
}

export default About;
