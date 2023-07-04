import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Container,
  Dialog,
  Grid,
  Paper,
  Stack,
  Typography,
} from "@mui/material";
import PageContainer from "../../components/PageContainer";
import ekskavator from "../../assets/ekskavator_1.png";
import ekskavator_yukleyici from "../../assets/ekskavator_yukleyici.png";
import eskavator from "../../assets/eskavator.png";
import forklift from "../../assets/forklift.png";
import belas from "../../assets/belas.png";
import { useState } from "react";
import LeaseModal from "../../components/LeaseModal";
import { Link } from "react-router-dom";

let imgList = [ekskavator, ekskavator_yukleyici, eskavator, forklift, belas];

let obj = {
  titleOne: "Məhsulun adı",
  titleTwo: "Ekskavator",
  dateOne: "2017",
  paragraphs:
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer",
  textOne: "Günlük icarə:",
  textTwo: "Aylıq icarə:",
  azn: "1000 AZN",
};

const TexnikalarSingle = () => {
  const [boxImg, setBoxImg] = useState(imgList[0]);

  return (
    <PageContainer>
      <Container className="background_radiuses_texture">
        <Grid container alignItems="center" spacing={3}>
          <Grid item xs={3} sm={2} md={1}>
            {imgList.map((img) => (
              <Card
                key={img}
                sx={{ mt: 2, p: 1, cursor: "pointer", minWidth: "60px" }}
              >
                <CardMedia
                  height="85"
                  component="img"
                  image={img}
                  onClick={() => setBoxImg(img)}
                />
              </Card>
            ))}
          </Grid>
          <Grid item xs={9} sm={10} md={5}>
            <Paper sx={{ p: 1 }}>
              <CardMedia height="350" component="img" image={boxImg} />
            </Paper>
          </Grid>
          <Grid item xs={12} md={6}>
            <Card sx={{ p: 2 }}>
              <Box
                display={{ display: "flex", justifyContent: "space-between" }}
              >
                <CardContent>
                  <Typography variant="h5" color="#596C74">
                    {obj.titleOne}
                  </Typography>
                  <Typography variant="h6" color="#686868">
                    {obj.titleTwo}
                  </Typography>
                </CardContent>
                <CardContent>
                  <Typography sx={{ fontSize: 16 }} color="#B0ADAD">
                    {obj.dateOne}
                  </Typography>
                </CardContent>
              </Box>
              <CardContent>
                <Typography color="secondary.light">
                  {obj.paragraphs}
                </Typography>
              </CardContent>
              <CardContent>
                <Stack flexDirection="row" justifyContent="space-between">
                  <Typography
                    sx={{ fontSize: 18 }}
                    fontWeight="bold"
                    color="#596C74"
                  >
                    {obj.textOne}
                  </Typography>
                  <Typography
                    sx={{ fontSize: 18 }}
                    fontWeight="bold"
                    color="primary"
                  >
                    {obj.azn}
                  </Typography>
                </Stack>
                <Stack flexDirection="row" justifyContent="space-between">
                  <Typography
                    sx={{ fontSize: 18 }}
                    fontWeight="bold"
                    color="#686868"
                  >
                    {obj.textTwo}
                  </Typography>
                  <Typography
                    sx={{ fontSize: 18 }}
                    fontWeight="bold"
                    color="primary"
                  >
                    {obj.azn}
                  </Typography>
                </Stack>
              </CardContent>
              <CardActions>
                <LeaseModal />
              </CardActions>
            </Card>
          </Grid>
        </Grid>
        <Grid mt={6} container justifyContent="flex-end">
          <Grid textAlign="center" item xs={4}>
            pagination
          </Grid>
          <Grid item xs={4} textAlign="right">
            <Link to="/texnikalar">Bütün məhsullar</Link>
          </Grid>
        </Grid>
      </Container>
    </PageContainer>
  );
};
export default TexnikalarSingle;
