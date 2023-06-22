import { Box, Container, Grid, Stack, Typography } from "@mui/material";
import MegaTexnikaLogo from "../../assets/logo.png";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";

const Footer = () => {
  return (
    <Box sx={{ backgroundColor: "rgba(255, 192, 31, 0.1)", py: 1 }}>
      <Container>
        <Grid container>
          <Grid my={1} item xs={12} md={3}>
            <img src={MegaTexnikaLogo} alt="" />
          </Grid>
          <Grid my={1} item xs={5} md={2}>
            <a href="#">Haqqımızda</a> <br />
            <a href="#">Texnikalar</a> <br />
            <a href="#">İcarə şərtləri</a> <br />
            <a href="#">Blog</a> <br />
            <a href="#">Əlaqə</a> <br />
          </Grid>
          <Grid my={1} item xs={6} md={3}>
            <Typography>Fətəli Xan Xoyski 111A, Bakı Azərbaycan</Typography>
            <Typography>+994(51) 123 45 67</Typography>
            <Typography>+994(12) 123 45 67</Typography>
            <Typography>info@lmegatexnika.az</Typography>
          </Grid>
          <Grid my={1} item xs={12} sm={6} md={3}>
            <Typography>
              Qrafik (iş saatlarımız): B.e - Ş. 10:00 - 19:00
            </Typography>
            <Stack flexDirection="row" gap={2}>
              <InstagramIcon />
              <FacebookIcon />
              <TwitterIcon />
            </Stack>
          </Grid>
          <Grid item xs={12} my={2}>
            <Stack
              flexDirection={{ xs: "column", sm: "row" }}
              alignItems="center"
              justifyContent="space-between"
            >
              <Typography>© 2022 Megatexnika / Müəllif hüquqları</Typography>
              <Typography>
                Design by <b>JEDAİ</b>
              </Typography>
            </Stack>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};
export default Footer;
