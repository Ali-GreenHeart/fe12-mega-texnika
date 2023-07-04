import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import {
  Box,
  Button,
  Card,
  CardContent,
  Container,
  Grid,
  IconButton,
  TextField,
  Typography
} from "@mui/material";
import PageContainer from "../../components/PageContainer";

function Contact() {
  return (
    <PageContainer>
      <Container className="background_elipse_texture">
        <Grid container alignItems="center" spacing={2}>
          <Grid item xs={12} md={6}>
            <Typography mb={5} variant="h4">Bizə yazın!</Typography>
            <Grid
              container
              spacing={1}
            >
              <Grid item xs={12} sm={6}>
                <TextField label="Ad, Soyad*" />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField label="E-mail*" />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField label="Şirkətin adı" variant="outlined" />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField label="Telefon*" variant="outlined" />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  multiline
                  rows={6}
                  label="Mesaj*"
                />
              </Grid>
            </Grid>
            <Button fullWidth sx={{ mt: 2 }}>
              Göndər
            </Button>
          </Grid>
          <Grid item xs={12} md={6}>

            <Card sx={{ p: 2 }}>
              <CardContent>
                <Typography textAlign="center" color="#596C72" variant="h4">
                  Əlaqə
                </Typography>
              </CardContent>
              <CardContent>
                <Typography mb={2}>
                  Fətəli Xan Xoyski 111A, Bakı Azərbaycan
                </Typography>
                <Typography mb={2}>+994(51) 123 45 67    +994(12) 123 45 67</Typography>
                <Typography mb={2}>info@megatexnika.az</Typography>
                <Typography mb={2}>Qrafik (iş saatlarımız): B.e - Ş. 10:00 - 19:00</Typography>
                <IconButton>
                  <InstagramIcon sx={{ color: "black" }} />
                </IconButton>
                <IconButton>
                  <FacebookIcon sx={{ color: "black" }} />
                </IconButton>
                <IconButton>
                  <TwitterIcon sx={{ color: "black" }} />
                </IconButton>
              </CardContent>
            </Card>
          </Grid >
        </Grid >
      </Container >
    </PageContainer >
  );
}

export default Contact;
