import { Button, Container, Grid, Typography, Stack, TextField, Box } from "@mui/material";
import PageContainer from "../../components/PageContainer";
import PaperImg from "../../components/PaperImg";
import Traktor from "../../assets/traktor.png";
import CategoryCard from "../../components/CategoryCard";
import eskavator from "../../assets/eskavator.png";
import ekskavator_yukleyici from "../../assets/ekskavator_yukleyici.png";
import AboutTexnikaSection from "../../components/AboutTexnikaSection";
import TexnikaCard from "../../components/TexnikaCard";
import MarkalarCarousel from "../../components/MarkalarCarousel";
import HomeCard from "../../components/Homecard";
import WhyChooseUs from "../../components/WhyChooseUs";
import img1 from "../../assets/elaqe/img1.png"

const texniknews = [
  {
    id: 0,
    img: eskavator,
    title: "Ekskavator",
    text: "Lorem Ipsum is simply dummy",
    date: "2022"
  },
  {
    id: 1,
    img: ekskavator_yukleyici,
    title: "Ekskavator yükləyici",
    text: "Lorem Ipsum is simply dummy",
    date: "2022"

  },
  {
    id: 2,
    img: eskavator,
    title: "Avtokran",
    text: "Lorem Ipsum is simply dummy",
    date: "2022"

  },
  {
    id: 3,
    img: ekskavator_yukleyici,
    title: "Forkliftlər",
    text: "Lorem Ipsum is simply dummy",
    date: "2022"

  },
];

const texnikalar = [
  {
    id: 0,
    img: "ekskavator.png",
    title: "Ekskavator",
    year: 2022,
    priceMonth: 1000,
    priceDay: 100,
  },
  {
    id: 1,
    img: "ekskavator_yukleyici.png",
    title: "Ekskavator yükləyici",
    year: 2022,
    priceMonth: 1000,
    priceDay: 100,
  },
  {
    id: 2,
    img: "avtokran.png",
    title: "Avtokran",
    year: 2022,
    priceMonth: 1000,
    priceDay: 100,
  },
  {
    id: 3,
    img: "forklift.png",
    title: "Forkliftlər",
    year: 2022,
    priceMonth: 1000,
    priceDay: 100,
  },
];

const newsd = [
  {
    id: 0,
    title: "Avtokranlar",
    img: eskavator,
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
    img: eskavator,
  },
  {
    id: 4,
    title: "Traktorlar",
    img: ekskavator_yukleyici,
  },
  {
    id: 5,
    title: "Qaldirici səbətlər",
    img: eskavator,
  },
  {
    id: 6,
    title: "Avtokranlar",
    img: eskavator,
  },
  {
    id: 7,
    title: "Traktorlar",
    img: ekskavator_yukleyici,
  },
];

const Homeali = () => {
  return (
    <PageContainer>
      <Container>
        <Grid container>
          <Grid item xs={12} md={5}>
            <Typography color="secondary.main" variant="h4">
              Ağir texnikanizi bizden satin alin
            </Typography>
            <Typography>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled
            </Typography>
          </Grid>
          <Grid item xs={12} md={6}>
            <PaperImg src={Traktor} />
          </Grid>
        </Grid>

        <Typography color="secondary.main" variant="h4">
          Kateqoriyalar
        </Typography>
        <Grid container spacing={2} my={3}>
          {newsd.map(({ id, title, img }) => {
            return (
              <Grid key={id} item xs={12} sm={6} md={4} lg={3}>
                <CategoryCard title={title} src={img} />
              </Grid>
            );
          })}
        </Grid>

        <Grid container my={7}>
          <Grid item className="background_radiuses_texture">
            <AboutTexnikaSection
              text="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled"
              withButton
            />
          </Grid>
        </Grid>

        <Grid container my={2} spacing={2} justifyContent="center">
          {texnikalar.map(({ id, img, title, year, priceMonth, priceDay }) => {
            return (
              <Grid key={id} item xs={12} sm={6} md={4} lg={3}>
                <TexnikaCard
                  title={title}
                  src={"/texnikalar_img/" + img}
                  year={year}
                  priceMonth={priceMonth}
                  priceDay={priceDay}
                />
              </Grid>
            );
          })}
        </Grid>

        <Stack alignItems="center" py={4}>
          <Button>Hamisina bax</Button>
        </Stack>

        <Typography my={6} variant="h4" fontWeight="bold" textAlign="center">
          Markalar
        </Typography>

        <MarkalarCarousel />

        <Grid container my={2} spacing={2} justifyContent="center">
          {texniknews.map((ite) => {
            return (
              <Grid key={ite.id} item xs={12} sm={6} md={4} lg={3}>
                <HomeCard
                  title={ite.title}
                  src={ite.img}
                  date={ite.date}
                  text={ite.text}
                />
              </Grid>
            );
          })}
        </Grid>


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










        <WhyChooseUs />


      </Container>
    </PageContainer>
  );
};

export default Homeali;
