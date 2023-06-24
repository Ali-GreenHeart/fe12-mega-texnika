import { Container } from "@mui/system";
import PageContainer from "../../components/PageContainer";
import { Box, Grid, Typography } from "@mui/material";
import PaperImg from "../../components/PaperImg";
import about1 from "../../assets/about/about1.png";
import forklift from "../../assets/forklift.png";
import belas from "../../assets/belas.png";
import about2 from "../../assets/about/about2.png";

export const About = () => {
  return (
    <PageContainer>
      <Container>
        <Typography
          variant="h4"
          fontSize="80px"
          fontFamily="sans-serif"
          fontWeight={900}
          alignItems="center"
          textAlign="center"
          color="rgba(89, 108, 114, 1)"
        >
          megaTexnika
        </Typography>
        <Typography
          variant="h6"
          fontSize="20px"
          color="rgba(255, 192, 31, 1)"
          fontFamily="Mulish"
          fontWeight={500}
          textAlign="center"
          mt="30px"
        >
          Haqqımızda
        </Typography>
        <Typography
          variant="h6"
          display="flex"
          flexDirection="column"
          color="rgba(53, 53, 53, 1)"
          fontFamily="Mulish"
          fontSize="20px"
          textAlign="center"
          alignItems="center"
          pt="30px"
          mb="20px"
          sx={{ maxWidth: "100%" }}
        >
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled
        </Typography>
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

        <Grid
          mt={10}
          pb={4}
          container
          alignItems="flex-start"
          justifyContent="space-between"
          spacing={3}
        >
          <Grid item xs={12} md={6}>
            <Typography
              variant="h5"
              display="flex"
              flexDirection="column"
              fontSize="50px"
              fontFamily="sans-serif"
              fontWeight={700}
              color="rgba(89, 108, 114, 1)"
            >
              Niyə bizi seçməlisiniz
            </Typography>
            <Typography>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled It is a long established fact that a reader
              will be distracted by the readable content of a page when looking
              at its layout. The point of using Lorem Ipsum is that it has a
              more-or-less normal distribution of letters, as opposed to using
              'Content here, content here', making it look like readable English
            </Typography>
          </Grid>

          <Grid item xs={12} md={6}>
            <PaperImg src={about2} />
          </Grid>
        </Grid>
      </Container>
    </PageContainer>
  );
};
