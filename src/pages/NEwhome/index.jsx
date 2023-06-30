import { Button, Container, Grid, Typography } from "@mui/material";
import PageContainer from "../../components/PageContainer";
import PaperImg from "../../components/PaperImg";
import Traktor from "../../assets/traktor.png";
import CategoryCard from "../../components/CategoryCard";
import eskavator from "../../assets/eskavator.png";
import ekskavator_yukleyici from "../../assets/ekskavator_yukleyici.png";
import AboutTexnikaSection from "../../components/abouttexnika";
import { Category } from "@mui/icons-material";
import TexnikaCard from "../../components/TexnikaCard";
import MarkalarCarousel from "../../components/MarkalarCarousel";
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
    title: "Qaldırıcı səbətlər",
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
              Ağır texnikanızı bizden satin alin
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
          <Button className="line"> Hamisina bax</Button>
        </Grid>

        <Grid container py={6}>
          <Typography py={2} textAlign="center" variant="h3">
            Markalar
          </Typography>

          <MarkalarCarousel />
        </Grid>
      </Container>
    </PageContainer>
  );
};

export default Homeali;
