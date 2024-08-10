import React from 'react';
import { Container, Typography, Box } from '@mui/material';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import { useTranslation } from 'react-i18next'; // i18n'den useTranslation'u içeri aktarın

// Leaflet marker icons fix
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon-2x.png',
  iconUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png',
  shadowUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png',
});

function Contact() {
  const { t } = useTranslation(); // useTranslation hook'unu kullanın

  return (
    <Container>
      <Box my={4}>
        <Typography variant="h3" component="h1" gutterBottom>
          {t('Contact_Title')}
        </Typography>
        <Typography variant="body1" paragraph>
          {t('Contact_Description')}
        </Typography>
      </Box>

      <Box my={4}>
        <Typography variant="h4" component="h2" gutterBottom>
          {t('Contact_Info_Title')}
        </Typography>
        <Typography variant="body1" paragraph>
          <strong>{t('Contact_Phone')}</strong>
        </Typography>
        <Typography variant="body1" paragraph>
          <strong>{t('Contact_Email')}</strong>
        </Typography>
        <Typography variant="body1" paragraph>
          <strong>{t('Contact_Address')}</strong>
        </Typography>
      </Box>

      <Box my={4}>
        <Typography variant="h4" component="h2" gutterBottom>
          {t('Contact_Map_Title')}
        </Typography>
        <MapContainer center={[41.3309702, 36.3182968]} zoom={10} style={{ height: '400px', width: '100%' }}>
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          />
          <Marker position={[41.3309702, 36.3182968]}>
            <Popup>
              {t('Contact_Map_Popup')}
            </Popup>
          </Marker>
        </MapContainer>
      </Box>
    </Container>
  );
}

export default Contact;
