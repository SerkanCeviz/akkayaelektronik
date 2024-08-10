import React from 'react';
import { Container, Typography, Box } from '@mui/material';
import { useTranslation } from 'react-i18next'; // i18n'den useTranslation'u içeri aktarın

function About() {
  const { t } = useTranslation(); // useTranslation hook'unu kullanın

  return (
    <Container>
      <Box my={4}>
        <Typography variant="h3" component="h1" gutterBottom>
          {t('About_Title')}
        </Typography>
        <Typography variant="body1" paragraph>
          {t('About_Description')}
        </Typography>
      </Box>

      <Box my={4}>
        <Typography variant="h4" component="h2" gutterBottom>
          {t('About_History_Title')}
        </Typography>
        <Typography variant="body1" paragraph>
          {t('About_History_Description')}
        </Typography>
      </Box>

      <Box my={4}>
        <Typography variant="h4" component="h2" gutterBottom>
          {t('About_Mission_Vision_Title')}
        </Typography>
        <Typography variant="body1" paragraph>
          {t('About_Mission_Vision_Description')}
        </Typography>
      </Box>

      <Box my={4}>
        <Typography variant="h4" component="h2" gutterBottom>
          {t('About_Values_Title')}
        </Typography>
        <Typography variant="body1" paragraph>
          {t('About_Values_Description')}
        </Typography>
      </Box>
    </Container>
  );
}

export default About;
