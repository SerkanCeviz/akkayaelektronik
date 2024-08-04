import React from 'react';
import { Container, Typography, Box} from '@mui/material';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

// Leaflet marker icons fix
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon-2x.png',
  iconUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png',
  shadowUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png',
});

function Contact() {
  return (
    <Container>
      <Box my={4}>
        <Typography variant="h3" component="h1" gutterBottom>
          Bizimle İletişime Geçin
        </Typography>
        <Typography variant="body1" paragraph>
          Herhangi bir sorunuz varsa veya daha fazla bilgi almak istiyorsanız lütfen bizimle iletişime geçiniz.
        </Typography>
      </Box>

      <Box my={4}>
        <Typography variant="h4" component="h2" gutterBottom>
          İletişim Bilgilerimiz
        </Typography>
        <Typography variant="body1" paragraph>
          <strong>Telefon:</strong> (0362) 447 22 32
        </Typography>
        <Typography variant="body1" paragraph>
          <strong>Email:</strong> buseakkaya@gmail.com
        </Typography>
        <Typography variant="body1" paragraph>
          <strong>Adres:</strong> Esenevler, 100.yıl Bulvarı 21/B Samsun
        </Typography>
      </Box>

      <Box my={4}>
        <Typography variant="h4" component="h2" gutterBottom>
          Google Maps üzerinden adresimiz
        </Typography>
        <MapContainer center={[41.3309702, 36.3182968]} zoom={10} style={{ height: '400px', width: '100%' }}>
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          />
          <Marker position={[41.3309702, 36.3182968]}>
            <Popup>
              Akkaya Elektronik <br /> Esenevler, 100.yıl Bulvarı 21/B Samsun
            </Popup>
          </Marker>
        </MapContainer>
      </Box>
    </Container>
  );
}

export default Contact;
