import {
  Box,
  Button,
  Container,
  Grid,
  Stack,
  TextField,
  Typography
} from "@mui/material";
import y1 from "../../assets/Home_Yenilikler/y1.png";
import y2 from "../../assets/Home_Yenilikler/y2.png";
import y3 from "../../assets/Home_Yenilikler/y3.png";
import y4 from "../../assets/Home_Yenilikler/y4.png";
import ekskavator from "../../assets/ekskavator_1.png";
import ekskavator_yukleyici from "../../assets/ekskavator_yukleyici.png";
import img1 from "../../assets/elaqe/img1.png";
import eskavator from "../../assets/eskavator.png";
import CategoryCard from "../../components/CategoryCard";
import MarkalarCarousel from "../../components/MarkalarCarousel";
import NewsCard from "../../components/NewsCard/index";
import PageContainer from "../../components/PageContainer";
import PaperImg from "../../components/PaperImg";
import TexnikaCard from "../../components/TexnikaCard";
import WhyChooseUs from "../../components/WhyChooseUs";
import AboutTexnikaSection from "../../components/AboutTexnikaSection";

const texnikalar = [
  {
    id: 0,
    title: "Avtokranlar",
    img: ekskavator,
  },
  {
    id: 1,
    title: "Traktorlar",
    img: ekskavator_yukleyici,
  },
  {
    id: 2,
    title: "Qaldırıcı səbətlər",
    img: eskavator,
  },
  {
    id: 3,
    title: "Avtokranlar",
    img: ekskavator,
  },
  {
    id: 4,
    title: "Traktorlar",
    img: ekskavator_yukleyici,
  },
  {
    id: 5,
    title: "Qaldırıcı səbətlər",
    img: eskavator,
  },
  {
    id: 6,
    title: "Avtokranlar",
    img: ekskavator,
  },
  {
    id: 7,
    title: "Traktorlar",
    img: ekskavator_yukleyici,
  },
];
const News = [
  {
    id: 1,
    title: "Lorem Ipsum is simply dummy",
    img: y1,
    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry...",
    date: "01.04.2022",
  },
  {
    id: 2,
    title: "Lorem Ipsum has been the industry's standard dummy text ever since",
    img: y2,
    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry...",
    date: "01.04.2022",
  },
  {
    id: 3,
    title: "Lorem Ipsum is simply dummy",
    img: y3,
    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry...",
    date: "01.04.2022"
  },
  {
    id: 4,
    title: "Lorem Ipsum is simply dummy",
    img: y4,
    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry...",
    date: "01.04.2022",
  },
];

const Home = () => {
  return (
    <PageContainer>
      <Container>
        <Grid container alignItems="center" spacing={2}>
          <Grid item xs={12} md={6}>
            <Typography variant="h4" fontWeight="bold">
              Ağır texnikanızı bizdən satın alın
            </Typography>
            <Typography my={2}>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled
            </Typography>
            <Button>Ətraflı</Button>
          </Grid>
          <Grid item xs={12} md={6}>
            <PaperImg src={ekskavator} />
          </Grid>
        </Grid>
        <Typography my={2} variant="h6" fontWeight="bold">
          Kateqoriyalar
        </Typography>
        <Grid my={2} mb={5} container spacing={2} justifyContent="center">
          {texnikalar.map((texnika) => {
            return (
              <Grid key={texnika.id} item xs={12} sm={6} md={4} lg={3}>
                <CategoryCard title={texnika.title} src={texnika.img} />
              </Grid>
            );
          })}
        </Grid>
        <AboutTexnikaSection
          text="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled"
          withButton
        />

        <Typography my={6} variant="h6" fontWeight="bold">
          Texnikalar
        </Typography>
        <Grid container spacing={4}>
          <Grid item xs={12} sm={6} md={4} lg={3}>
            <TexnikaCard
              priceDay={2}
              priceMonth={10}
              src={ekskavator_yukleyici}
              title="Eskavator"
              year={100}
            />
          </Grid>
          <Grid item xs={12} sm={6} md={4} lg={3}>
            <TexnikaCard
              priceDay={2}
              priceMonth={10}
              src={ekskavator_yukleyici}
              title="Eskavator"
              year={100}
            />
          </Grid>
          <Grid item xs={12} sm={6} md={4} lg={3}>
            <TexnikaCard
              priceDay={2}
              priceMonth={10}
              src={ekskavator_yukleyici}
              title="Eskavator"
              year={100}
            />
          </Grid>
          <Grid item xs={12} sm={6} md={4} lg={3}>
            <TexnikaCard
              priceDay={2}
              priceMonth={10}
              src={ekskavator_yukleyici}
              title="Eskavator"
              year={100}
            />
          </Grid>
        </Grid>
        <Stack alignItems="center" py={4}>
          <Button>Hamısına bax</Button>
        </Stack>
        <Typography my={6} variant="h6" fontWeight="bold">
          Markalar
        </Typography>
        <MarkalarCarousel />
        <Typography
          variant="h6"
          color="secondary"
          fontSize="30px"
          fontFamily="Montserrat"
          fontWeight="600"
          my={1}
          mb={5}
          py={5}
        >
          Yeniliklər
        </Typography>
        <Grid container spacing={2}>
          {News.map((item) => {
            return (
              <Grid
                key={item.id}
                item
                xs={12}
                sm={6}
                md={3}
              >
                <NewsCard
                  title={item.title}
                  src={item.img}
                  text={item.text}
                  date={item.date}
                />
              </Grid>
            );
          })}
        </Grid>
      </Container>
      <Box sx={{ backgroundColor: "secondary.white" }} py={4} mt={10}>
        <Container>
          <Grid container>
            <Grid item xs={12} md={6}>
              <Typography
                variant="h5"
                color="secondary"
                fontFamily="Montserrat"
                fontSize="30px"
                fontWeight="700"
                my={2}
              >
                Bizimlə əlaqə saxla!
              </Typography>
              <Typography
                variant="h6"
                fontFamily="Mulish"
                fontSize="14px"
              >
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled
              </Typography>
              <Grid my={2} container spacing={1}>
                <Grid item xs={12} sm={6}>
                  <TextField
                    name="fullName"
                    label="Ad, Soyad"
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    name="companyName"
                    label="Şirkətin adı"
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    name="eMail"
                    label="E-mail"
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    name="phone"
                    label="Telefon"
                  />
                </Grid>
              </Grid>
              <Button fullWidth>Göndər</Button>
            </Grid>
            <Grid item xs={12} md={6}
              sx={{
                '& > img': {
                  display: { xs: 'none', md: 'inline' },
                  mt: { md: '-100px', lg: "-140px" },
                  width: '100%'
                }
              }}
            >
              <img src={img1} alt="Traktor" />
            </Grid>
          </Grid>
        </Container>
      </Box>
      <Container>
        <WhyChooseUs />
      </Container>
    </PageContainer>
  );
};
export default Home;
