import React from "react";
import {
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  CardMedia,
  Box,
} from "@mui/material";
import { useTranslation } from 'react-i18next'; // i18n'den useTranslation'u içeri aktarın
import IMG_1193 from "../assets/IMG_1193.jpg";
import IMG_1195 from "../assets/IMG_1195.jpg";
import IMG_1194 from "../assets/IMG_1194.jpg";
import IMG_1075 from "../assets/IMG_1075.jpg";
import IMG_1088_AI from "../assets/IMG_1088_AI.jpeg";
import IMG_1075_34 from "../assets/IMG_1075_34.jpeg";

const cardStyle = {
  display: "flex",
  flexDirection: "column",
  height: "100%",
};

const mediaStyle = {
  objectFit: "contain",
  width: "100%",
  height: "300px",
};

export default function Projects() {
  const { t } = useTranslation(); // useTranslation hook'unu kullanın

  return (
    <Container>
      {/* City Mall Alışveriş Merkezi Section */}
      <Box my={4}>
        <Typography variant="h4" component="h2" gutterBottom>
          {t('City_Mall_Section_Title')}
        </Typography>
        <Grid container spacing={4}>
          <Grid item xs={12} md={4}>
            <Card style={cardStyle}>
              <CardMedia
                component="img"
                alt="LED Screens"
                src={IMG_1193}
                title="LED Screens"
                style={mediaStyle}
              />
              <CardContent>
                <Typography variant="body2" color="textSecondary" component="p">
                  {t('City_Mall_Led_Systems_Description')}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} md={4}>
            <Card style={cardStyle}>
              <CardMedia
                component="img"
                alt="Lighting Solutions"
                src={IMG_1194}
                title="Lighting Solutions"
                style={mediaStyle}
              />
              <CardContent>
                <Typography variant="body2" color="textSecondary" component="p">
                  {t('City_Mall_Led_Signs_Description')}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} md={4}>
            <Card style={cardStyle}>
              <CardMedia
                component="img"
                alt="Installation Services"
                src={IMG_1195}
                title="Installation Services"
                style={mediaStyle}
              />
              <CardContent>
                <Typography variant="body2" color="textSecondary" component="p">
                  {t('City_Mall_Lighting_Systems_Description')}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Box>

      <Box my={4}>
        <Typography variant="h4" component="h2" gutterBottom>
          {t('LED_Lighting_Systems_Title')}
        </Typography>
        <Grid container spacing={4}>
          <Grid item xs={12} md={6}>
            <Card style={cardStyle}>
              <CardMedia
                component="img"
                alt="LED Screens"
                src={IMG_1075_34}
                title="LED Screens"
                style={mediaStyle}
              />
              <CardContent>
                <Typography variant="body2" color="textSecondary" component="p">
                  {t('Kelin_Yeri_Lighting_Description')}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} md={6}>
            <Card style={cardStyle}>
              <CardMedia
                component="img"
                alt="Lighting Solutions"
                src={IMG_1088_AI}
                title="Lighting Solutions"
                style={mediaStyle}
              />
              <CardContent>
                <Typography variant="body2" color="textSecondary" component="p">
                  {t('Buildings_Valued_Description')}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
}
