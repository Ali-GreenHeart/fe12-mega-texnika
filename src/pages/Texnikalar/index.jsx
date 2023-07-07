import { Button, Container, Grid, Pagination, Stack, Typography } from "@mui/material";
import PageContainer from "../../components/PageContainer";
import TexnikaCard from "../../components/TexnikaCard";
import TexnikalarMenu from "./texnikalarMenu";
import { useState } from "react";

export const texnikalar = [
  {
    id: 0,
    img: "ekskavator.png",
    title: " 0Ekskavator",
    year: 2022,
    priceMonth: 1000,
    priceDay: 100,
    category: 0,
  },
  {
    id: 1,
    img: "ekskavator_yukleyici.png",
    title: " 1Ekskavator yükləyici",
    year: 2022,
    priceMonth: 1000,
    priceDay: 100,
    category: 1,
  },
  {
    id: 2,
    img: "avtokran.png",
    title: " 1Avtokran",
    year: 2022,
    priceMonth: 1000,
    priceDay: 100,
    category: 1,
  },
  {
    id: 3,
    img: "forklift.png",
    title: " 2Forkliftlər",
    year: 2022,
    priceMonth: 1000,
    priceDay: 100,
    category: 2,
  },
  {
    id: 4,
    img: "ekskavator.png",
    title: " 3Ekskavator",
    year: 2022,
    priceMonth: 1000,
    priceDay: 100,
    category: 3,
  },

  {
    id: 5,
    img: "ekskavator_yukleyici.png",
    title: " 3Ekskavator yükləyici",
    year: 2022,
    priceMonth: 1000,
    priceDay: 100,
    category: 3,
  },
  {
    id: 6,
    img: "avtokran.png",
    title: " 4Avtokran",
    year: 2022,
    priceMonth: 1000,
    priceDay: 100,
    category: 2,
  },
  {
    id: 7,
    img: "forklift.png",
    title: " 4Forkliftlər",
    year: 2022,
    priceMonth: 1000,
    priceDay: 100,
    category: 1,
  },

];



const Texnikalar = () => {
  const [category, setCategory] = useState(-1)  // -1 all, 0 eskavator, 1 -esk yuk , 2 - forklift 3 avtok 4 esk

  return (
    <>
      <PageContainer>
        <Container >
          <Typography
            component="h2"
            my={3}
            textAlign="center"
            fontWeight="700" fontSize="30px"
            color="secondary"
            sx={{ display: { xs: "none", md: "none", lg: "block" } }}
          >Texnikalar
          </Typography>
          <TexnikalarMenu setCategory={setCategory} />
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
            <Button onClick={() => setCategory(-1)} variant="text">Hamısı</Button>
            <Button onClick={() => setCategory(0)} variant="text">Ekskavator</Button>
            <Button onClick={() => setCategory(1)} variant="text">Ekskavator yükləyici</Button>
            <Button onClick={() => setCategory(2)} variant="text">Forkliftlər</Button>
            <Button onClick={() => setCategory(3)} variant="text">Avtokran</Button>
          </Stack>
          <Grid container position={"relative"}
            my={2}
            spacing={2}
            justifyContent="center"
          >
            {
              texnikalar.filter((texnika) => category === -1 || texnika.category === category).map(({ id, img, title, year, priceMonth, priceDay }) => {
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
        <Stack alignItems="center">
          <Pagination onChange={(e, value) => console.log(value)} count={5} color="primary" />
        </Stack>
      </PageContainer>
    </>)
}


export default Texnikalar;
