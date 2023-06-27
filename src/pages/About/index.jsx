import { Container } from "@mui/system";
import PageContainer from "../../components/PageContainer";
import { Box, Grid, Typography } from "@mui/material";
import PaperImg from "../../components/PaperImg";
import about1 from "../../assets/about/about1.png";
import forklift from "../../assets/forklift.png";
import belas from "../../assets/belas.png";
import WhyChooseUs from "../../components/WhyChooseUs";

export const About = () => {
  return (
    <PageContainer>
      <Container>
        <Typography
          variant="h2"
          sx={{ fontSize: { xs: '2rem', sm: "3rem", md: "4rem" } }}
          fontFamily="sans-serif"
          fontWeight={900}
          textAlign="center"
          color="secondary.main"
        >
          megaTexnika
        </Typography>
        <Typography
          variant="h6"
          fontSize="20px"
          color="primary"
          fontFamily="Mulish"
          fontWeight={500}
          textAlign="center"
          mt="30px"
        >
          Haqqımızda
        </Typography>
        <Container maxWidth="sm">
          <Typography
            fontFamily="Mulish"
            textAlign="center"
            pt="30px"
            mb="20px"
          >
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text ever
            since the 1500s, when an unknown printer took a galley of type and
            scrambled
          </Typography>
        </Container>
        <PaperImg src={about1} />
        <Grid
          mt={10}
          pb={4}
          container
          alignItems="flex-end"
          justifyContent="space-between"
        >
          <Grid
            item
            md={4}
            lg={3}
            sx={{ display: { xs: "none", md: "block" } }}
          >
            <PaperImg src={forklift} />
          </Grid>
          <Grid item xs={12} md={7} lg={8}>
            <PaperImg src={belas} />
            <Box pl={5} pt={5}>
              <Typography variant="h4" fontWeight="bold">
                Mega Texnika-da sınaqdan keçirilmiş texnikalar
              </Typography>
              <Typography my={2}>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled
              </Typography>
            </Box>
          </Grid>
        </Grid>
        <WhyChooseUs />
      </Container>
    </PageContainer>
  );
};
