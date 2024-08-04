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

function Home() {
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
          Akkaya Elektroniğe hoş geldiniz.
        </Typography>
        <Typography variant="h5" paragraph>
          Led ekran ve aradığınız her şeyi burada bulabilirsiniz.
        </Typography>
      </Box>

      <Box my={4}>
        <Typography variant="h4" component="h2" gutterBottom>
          Hizmetlerimiz
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
                  Led Işıklar
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  City Mall Alışveriş Merkezi ışıklandırmalar için bizi tercih
                  etti.
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
                  Led Yazılar
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  KelinYeri Led yazılar için bizi tercih etti.
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
                  Led Aydınlatma Sistemleri
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  City Mall avm'nin her bir yanını aydınlatan canlandıran
                  sistem.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Box>

      <Box my={4}>
        <Typography variant="h4" component="h2" gutterBottom>
          Müşteri Değerlendirmeleri
        </Typography>
        <Grid container spacing={4}>
          <Grid item xs={12} md={4}>
            <Card style={cardStyle}>
              <CardContent>
                <Typography variant="h6" component="h3">
                  Dilek Aslan
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  Çok nazik davrandılar ve tüm istediklerimi daha fazlasıyla
                  yerine getirdiler. Güzellik salonum çok şık görünüyor.
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
                  Nişanım için çok güzel led aydınlatma tasarladılar. Çok titiz
                  ve bir o kadar da hızlıydı.
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
                  Çok dikkat çekiyoruz. Ellerinize sağlık böyle devam edin.
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
