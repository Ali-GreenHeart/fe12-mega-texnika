import { Button, Container, Grid, Stack, Typography } from "@mui/material";
import PageContainer from "../../components/PageContainer";
import TexnikaCard from "../../components/TexnikaCard";
import TexnikalarMenu from "./texnikalarMenu";

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
  {
    id: 4,
    img: "ekskavator.png",
    title: "Ekskavator",
    year: 2022,
    priceMonth: 1000,
    priceDay: 100,
  },

  {
    id: 5,
    img: "ekskavator_yukleyici.png",
    title: "Ekskavator yükləyici",
    year: 2022,
    priceMonth: 1000,
    priceDay: 100,
  },
  {
    id: 6,
    img: "avtokran.png",
    title: "Avtokran",
    year: 2022,
    priceMonth: 1000,
    priceDay: 100,
  },
  {
    id: 7,
    img: "forklift.png",
    title: "Forkliftlər",
    year: 2022,
    priceMonth: 1000,
    priceDay: 100,
  },

];



const Texnikalar = () => {
  return (<>
    <PageContainer>
      <Container >
        <Typography
          mb={6}
          fontSize="12px"
          color="secondary.light"
        >Ana səhifə | <b>Texnikalar</b>
        </Typography>

        <Typography
          component="h2"
          my={3}
          textAlign="center"
          fontWeight="700" fontSize="30px"
          color="secondary"
          sx={{ display: { xs: "none", md: "none", lg: "block" } }}
        >Texnikalar
        </Typography>
        <TexnikalarMenu />
        <Stack
          className="btn"
          flexDirection="row"
          sx={{
            minHeight: "35px",
            textAlign: "center",
            display: { xs: "none", lg: "block" }
          }}
          border="1px solid"
          borderRadius="20px"
        >
          <Button variant="text">Hamısı</Button>
          <Button variant="text">Ekskavator</Button>
          <Button variant="text">Ekskavator yükləyici</Button>
          <Button variant="text">Forkliftlər</Button>
          <Button variant="text">Avtokran</Button>
          <Button variant="text">Eskavator</Button>
          <Button variant="text">Eskavator yükləyici</Button>
          <Button variant="text">Forkliftlər</Button>
          <Button variant="text">Avtokran</Button>
        </Stack>
        <Grid container position={"relative"}
          my={2}
          spacing={2}
          justifyContent="center"
        >
          {
            texnikalar.map(({ id, img, title, year, priceMonth, priceDay }) => {
              return <Grid
                key={id}
                item xs={12} sm={6} md={3} lg={3}>

                <TexnikaCard
                  id={id}
                  title={title}
                  src={"/texnikalar_img/" + img}
                  year={year}
                  priceMonth={priceMonth}
                  priceDay={priceDay}
                />
              </Grid>
            })
          }
        </Grid>
      </Container>
    </PageContainer>
  </>)
}


export default Texnikalar;
