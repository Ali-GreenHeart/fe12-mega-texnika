import { Container } from "@mui/system";
import PageContainer from "../../components/PageContainer";
import { Box, Grid, Typography } from "@mui/material";
import PaperImg from "../../components/PaperImg";
import about1 from "../../assets/about/about1.png";
import WhyChooseUs from "../../components/WhyChooseUs";
import AboutTexnikaSection from "../../components/AboutTexnikaSection";

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
        <AboutTexnikaSection
          text="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum" />
        <WhyChooseUs />
      </Container>
    </PageContainer>
  );
};
