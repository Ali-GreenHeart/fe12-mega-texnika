import { Box, Container, Grid, Pagination, Paper, Stack, Typography } from "@mui/material";
import PageContainer from "../../components/PageContainer";
import Traktor from "../../assets/traktor.png";
import news1 from "../../assets/news1.png"
import news2 from "../../assets/news2.png"
import news3 from "../../assets/news3.png"
import CategoryCard from "../CategoryCard";
import PaperImg from "../PaperImg";
import BlogCard from "../BlogCard";
import { useState } from "react";


const news = [
  {
    id: 0,
    date: '20.12.2023',
    title: "Xeberin adi",
    img: news1
  },
  {
    id: 1,
    date: '20.12.2023',
    title: "Xeberin adi",
    img: news2
  },
  {
    id: 2,
    date: '20.12.2023',
    title: "Xeberin adi",
    img: news3
  },
  {
    id: 3,
    date: '20.12.2023',
    title: "Xeberin adi",
    img: news1
  },
  {
    id: 4,
    date: '20.12.2023',
    title: "Xeberin adi",
    img: news2
  },
  {
    id: 5,
    date: '20.12.2023',
    title: "Xeberin adi",
    img: news3
  },
  {
    id: 6,
    date: '20.12.2023',
    title: "Xeberin adi",
    img: news1
  },
  {
    id: 7,
    date: '20.12.2023',
    title: "Xeberin adi",
    img: news2
  },
  {
    id: 10,
    date: '20.12.2023',
    title: "Xeberin adi0",
    img: news1
  },
  {
    id: 11,
    date: '20.12.2023',
    title: "Xeberin adi1",
    img: news2
  },
  {
    id: 12,
    date: '20.12.2023',
    title: "Xeberin adi2",
    img: news3
  },
  {
    id: 13,
    date: '20.12.2023',
    title: "Xeberin adi3",
    img: news1
  },
  {
    id: 14,
    date: '20.12.2023',
    title: "Xeberin adi4",
    img: news2
  },
  {
    id: 15,
    date: '20.12.2023',
    title: "Xeberin adi5",
    img: news3
  },
  {
    id: 16,
    date: '20.12.2023',
    title: "Xeberin adi6",
    img: news1
  },
  {
    id: 17,
    date: '20.12.2023',
    title: "Xeberin adi7",
    img: news2
  },
  {
    id: 20,
    date: '20.12.2023',
    title: "Xeberin adi20",
    img: news1
  },
  {
    id: 21,
    date: '20.12.2023',
    title: "Xeberin adi21",
    img: news2
  },
  {
    id: 22,
    date: '20.12.2023',
    title: "Xeberin adi22",
    img: news3
  },
  {
    id: 23,
    date: '20.12.2023',
    title: "Xeberin adi23",
    img: news1
  },
  {
    id: 24,
    date: '20.12.2023',
    title: "Xeberin adi24",
    img: news2
  },
  {
    id: 25,
    date: '20.12.2023',
    title: "Xeberin adi25",
    img: news3
  },
  {
    id: 26,
    date: '20.12.2023',
    title: "Xeberin adi26",
    img: news1
  },
  {
    id: 27,
    date: '20.12.2023',
    title: "Xeberin adi27",
    img: news2
  }
]


const Blog = () => {
  const [page, setPage] = useState(1)
  return (
    <PageContainer>
      <Container className="line_raduis">
        <Grid container>
          <Grid item xs={12} md={6}>
            <Typography color="secondary.main" variant="h4" fontWeight="bold">
              Yeniliklər
            </Typography>
            <Typography>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged
            </Typography>
          </Grid>
          <Grid item xs={12} md={6}>
            <PaperImg
              src={Traktor}
            />
          </Grid>
        </Grid>
        <Grid container spacing={2} justifyContent="center" py={2} my={4}>
          {
            news.slice((page - 1) * 8, (page - 1) * 8 + 8).map(({ id, title, img, date }) => {
              return <Grid component="a" href={`/blog/${id}`} key={id} item xs={12} sm={6} md={4} lg={3}>
                <BlogCard
                  title={title}
                  src={img}
                  date={date}
                />
              </Grid>
            })
          }
        </Grid>
        <Stack alignItems="center">
          <Pagination onChange={(e, value) => setPage(value)} count={5} color="primary" />
        </Stack>
      </Container>
    </PageContainer>
  );
};
export default Blog;






