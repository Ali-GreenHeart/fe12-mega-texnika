import {
  Box,
  Button,
  Container,
  Grid,
  Paper,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import PageContainer from "../../components/PageContainer";
import ekskavator from "../../assets/ekskavator_1.png";
import ekskavator_yukleyici from "../../assets/ekskavator_yukleyici.png";
import eskavator from "../../assets/eskavator.png";
import forklift from "../../assets/forklift.png";
import belas from "../../assets/belas.png";
import CategoryCard from "../../components/CategoryCard";
import PaperImg from "../../components/PaperImg";
import TexnikaCard from "../../components/TexnikaCard";
import MarkalarCarousel from "../../components/MarkalarCarousel";
import y1 from "../../assets/Home_Yenilikler/y1.png";
import y2 from "../../assets/Home_Yenilikler/y2.png";
import y3 from "../../assets/Home_Yenilikler/y3.png";
import y4 from "../../assets/Home_Yenilikler/y4.png";
import NewsCard from "../../components/NewsCard/index";
import img1 from "../../assets/elaqe/img1.png";
import { BorderAll } from "@mui/icons-material";

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
    date: "01.04.2022",
  },
  {
    id: y4,
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
        <Grid my={2} container spacing={2} justifyContent="center">
          {texnikalar.map((texnika) => {
            return (
              <Grid key={texnika.id} item xs={12} sm={6} md={4} lg={3}>
                <CategoryCard title={texnika.title} src={texnika.img} />
              </Grid>
            );
          })}
        </Grid>
        <Grid
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
              <Button>Haqqımızda</Button>
            </Box>
          </Grid>
        </Grid>

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
        <Grid container spacing={4}>
          <Grid item maxWidth="100%" display="flex" flexDirection="row" my={6}>
            {News.map((item) => {
              return (
                <NewsCard
                  key={item.id}
                  title={item.title}
                  src={item.img}
                  text={item.text}
                  date={item.date}
                />
              );
            })}
          </Grid>
        </Grid>
      </Container>
      <Box sx={{ backgroundColor: "secondary.light" }}>
        <Container>
          <Grid container>
            <Grid item xs={12} md={6}>
              <Typography
                variant="h5"
                color="secondary"
                fontFamily="Montserrat"
                fontSize="30px"
                fontWeight="700"
                my={3}
                mx={2}
              >
                Bizimlə əlaqə saxla!
              </Typography>
              <Typography
                variant="h6"
                fontFamily="Mulish"
                fontSize="14px"
                maxWidth="450px"
                mx={2}
              >
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled
              </Typography>
              <Grid item my={3}>
                <TextField
                  variant="outlined"
                  size="small"
                  label="Ad, Soyad"
                ></TextField>
                <TextField
                  variant="outlined"
                  size="small"
                  label="Şirkətin adı"
                ></TextField>
                <TextField
                  variant="outlined"
                  size="small"
                  label="E-mail"
                ></TextField>
                <TextField
                  variant="outlined"
                  size="small"
                  label="Telefon"
                ></TextField>
              </Grid>
              <Grid item my={3}>
                <Button fullWidth sx={{ backgroundColor: "secondary" }}>
                  Göndər
                </Button>
              </Grid>
            </Grid>
            <Grid item xs={12} md={6} mt="-100px">
              <img src={img1} alt="Traktor" />
            </Grid>
          </Grid>
        </Container>
      </Box>
    </PageContainer>
  );
};
export default Home;
