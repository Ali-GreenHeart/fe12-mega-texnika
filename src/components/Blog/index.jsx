import { Box, Container, Grid, Paper, Stack, Typography } from "@mui/material";
import PageContainer from "../../components/PageContainer";
import Traktor from "../../assets/traktor.png";
import news1 from "../../assets/news1.png"
import news2 from "../../assets/news2.png"
import news3 from "../../assets/news3.png"
import CategoryCard from "../CategoryCard";


const news=[
{
    id:0,
    title:"Xeberin adi",
    img:news1
 
},
{
    id:1,
    title:"Xeberin adi",
    img:news2
},
{
    id:2,
    title:"Xeberin adi",
    img:news3
},
{
    id:3,
    title:"Xeberin adi",
    img:news1
},
{
    id:4,
    title:"Xeberin adi",
    img:news2
},
{
    id:5,
    title:"Xeberin adi",
    img:news3
},
{
    id:6,
    title:"Xeberin adi",
    img:news1
},
{
    id:7,
    title:"Xeberin adi",
    img:news2
}

]


const Blog = () => {
  return (
    <PageContainer>
      <Container className="line_raduis">
        <Grid container>
          <Grid item xs={12} md={6}>
            <Typography variant="h4" fontWeight="bold">
              Yeniliklər
            </Typography>
            <Typography sx={{ fontSize: "100%" }}>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged
            </Typography>
          </Grid>
          <Grid item xs={12} md={6}>
            <Paper sx={{ p: 2 }}>
              <img style={{ width: "99%" }} src={Traktor} />
            </Paper>
          </Grid>
          <Grid item container spacing={2} justifyContent="center" py={2}>
           {
            news.map((elem)=>{
                return <Grid key={elem.id} item xs={12 } sm={6} md={4} lg={3}>
    <CategoryCard
     title={elem.title}
     src={elem.img}
     />
    </Grid>
            })
           }
          </Grid>
        </Grid>
      </Container>
    </PageContainer>
  );
};
export default Blog;






