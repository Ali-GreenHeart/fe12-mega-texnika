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
          <Grid item xs={8} md={6}>
            <Box sx={{ p: 2 }}>
              <Box sx={{ mb: 6 }}>
                <Box>
                  <Typography variant="h4">Bizə yazın!</Typography>
                </Box>
              </Box>
              <Box
                display={{ display: "flex", justifyContent: "space-between" }}
                sx={{ mb: 2 }}
              >
                <Box>
                  <TextField label="Ad, Soyad*" variant="outlined" />
                </Box>
                <Box>
                  <TextField label="E-mail*" variant="outlined" />
                </Box>
              </Box>
              <Box
                display={{ display: "flex", justifyContent: "space-between" }}
                sx={{ mb: 2 }}
              >
                <Box>
                  <TextField label="Şirkətin adı" variant="outlined" />
                </Box>
                <Box>
                  <TextField label="Telefon*ad" variant="outlined" />
                </Box>
              </Box>
              <Box
                display={{ display: "flex", justifyContent: "space-between" }}
                sx={{ mb: 2 }}
              >
                <TextField
                  fullWidth
                  multiline
                  rows={6}
                  maxRows={6}
                  label="Mesaj*"
                  id="fullWidth"
                />
              </Box>
              <Box sx={{ mt: 4 }}>
                <Box>
                  <Button fullWidth sx={{ pt: 2, pb: 2 }}>
                    Göndər
                  </Button>
                </Box>
              </Box>
            </Box>
          </Grid>
          <Grid item xs={8} md={5}>
            <Card sx={{ p: 2 }}>
              <Box display="flex" justifyContent="center">
                <CardContent>
                  <Typography color="#596C72" variant="h4">
                    Əlaqə
                  </Typography>
                </CardContent>
              </Box>
              <Box>
                <Box display="flex" justifyContent="center">
                  <CardContent>
                    <Typography>
                      Fətəli Xan Xoyski 111A, Bakı Azərbaycan
                    </Typography>
                  </CardContent>
                </Box>
                <Grid
                  container
                  display="flex"
                  justifyContent={"center"}
                  flexDirection={"row"}
                >
                  <Grid item>
                    <CardContent>
                      <Typography>+994(51) 123 45 67</Typography>
                    </CardContent>
                    <CardContent>
                      <Typography>info@megatexnika.az</Typography>
                    </CardContent>
                  </Grid>
                  <Grid item>
                    <CardContent>
                      <Typography>+994(12) 123 45 67</Typography>
                    </CardContent>
                  </Grid>
                </Grid>
                <Box display="flex" justifyContent="center">
                  <CardContent>
                    <Typography>
                      Qrafik (iş saatlarımız): B.e - Ş. 10:00 - 19:00
                    </Typography>
                  </CardContent>
                </Box>
                <Grid container display={"flex"} justifyContent={"center"}>
                  <Grid item>
                    <IconButton>
                      <InstagramIcon />
                    </IconButton>
                  </Grid>
                  <Grid item>
                    <IconButton>
                      <FacebookIcon />
                    </IconButton>
                  </Grid>
                  <Grid item>
                    <IconButton>
                      <TwitterIcon />
                    </IconButton>
                  </Grid>
                </Grid>
              </Box>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </PageContainer>
  );
}

export default Contact;
