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
import IMG_1193 from "../assets/IMG_1193.jpg";
import IMG_1076 from "../assets/IMG_1076.jpg";
import IMG_1195 from "../assets/IMG_1195.jpg";
import { useTranslation } from "react-i18next";

function Home() {
  const { t } = useTranslation();
  const cardStyle = {
    display: "flex",
    flexDirection: "column",
    height: "100%",
  };

  const mediaStyle = {
    objectFit: "contain", // Resmin tamamını görünecek şekilde ayarlar
    width: "100%",
    height: "300px", // Sabit yükseklik, ihtiyaca göre ayarlanabilir
  };

  return (
    <Container>
      <Box my={4}>
        <Typography variant="h3" component="h1" gutterBottom>
          {t("WELCOME")}
        </Typography>
        <Typography variant="h5" paragraph>
          {t("LED_SCREEN_AND_EVERYTHING")}
        </Typography>
      </Box>

      <Box my={4}>
        <Typography variant="h4" component="h2" gutterBottom>
          {t("SERVICES")}
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
                <Typography variant="h5" component="h2">
                  {t("LED_LIGHTS")}
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  {t("CITYMALL_CHOOSE_US")}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} md={4}>
            <Card style={cardStyle}>
              <CardMedia
                component="img"
                alt="Lighting Solutions"
                src={IMG_1076}
                title="Lighting Solutions"
                style={mediaStyle}
              />
              <CardContent>
                <Typography variant="h5" component="h2">
                  {t("LED_SIGNS")}
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  {t("KELIN_YERI")}
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
                <Typography variant="h5" component="h2">
                  {t("LED_Lighting_Systems")}
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  {t("City_Mall_Lighting_System")}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Box>

      <Box my={4}>
        <Typography variant="h4" component="h2" gutterBottom>
          {t("Customer_Reviews")}
        </Typography>
        <Grid container spacing={4}>
          <Grid item xs={12} md={4}>
            <Card style={cardStyle}>
              <CardContent>
                <Typography variant="h6" component="h3">
                  Dilek Aslan
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  {t("Dilek_Aslan_Review")}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} md={4}>
            <Card style={cardStyle}>
              <CardContent>
                <Typography variant="h6" component="h3">
                  Serkan Ceviz
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  {t("Serkan_Ceviz_Review")}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} md={4}>
            <Card style={cardStyle}>
              <CardContent>
                <Typography variant="h6" component="h3">
                  City Mall Sahibi
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  {t("City_Mall_Owner_Review")}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
}

export default Home;
