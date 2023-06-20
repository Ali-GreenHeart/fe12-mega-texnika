import { Button, Container, Grid, Paper, Typography } from "@mui/material"
import PageContainer from "../../components/PageContainer"
import ekskavator from "../../assets/ekskavator_1.png"
import ekskavator_yukleyici from "../../assets/ekskavator_yukleyici.png"
import eskavator from "../../assets/eskavator.png"
import CategoryCard from "../../components/CategoryCard"

const texnikalar = [
    {
        id: 0,
        title: 'Avtokranlar',
        img: ekskavator
    },
    {
        id: 1,
        title: 'Traktorlar',
        img: ekskavator_yukleyici
    },
    {
        id: 2,
        title: 'Qaldırıcı səbətlər',
        img: eskavator
    },
    {
        id: 3,
        title: 'Avtokranlar',
        img: ekskavator
    },
    {
        id: 4,
        title: 'Traktorlar',
        img: ekskavator_yukleyici
    },
    {
        id: 5,
        title: 'Qaldırıcı səbətlər',
        img: eskavator
    },
    {
        id: 6,
        title: 'Avtokranlar',
        img: ekskavator
    },
    {
        id: 7,
        title: 'Traktorlar',
        img: ekskavator_yukleyici
    }
]

const Home = () => {
    return (
        <PageContainer>
            <Container className="background_radiuses_texture">
                <Grid container alignItems="center" spacing={2}>
                    <Grid item xs={12} md={6}>
                        <Typography variant="h4" fontWeight="bold">Ağır texnikanızı bizdən satın alın</Typography>
                        <Typography my={2}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled</Typography>
                        <Button variant="outlined">Ətraflı</Button>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <Paper sx={{ p: 2 }}>
                            <img
                                style={{ width: '100%' }}
                                src={ekskavator}
                                alt="eskavator"
                            />
                        </Paper>
                    </Grid>
                </Grid>
                <Typography my={2} variant="h6" fontWeight="bold">Kateqoriyalar</Typography>
                <Grid my={2} container spacing={2} justifyContent="center">
                    {
                        texnikalar.map((texnika) => {
                            return <Grid key={texnika.id} item xs={12} sm={6} md={4} lg={3}>
                                <CategoryCard
                                    title={texnika.title}
                                    src={texnika.img}
                                />
                            </Grid>
                        })
                    }
                </Grid>
            </Container>
        </PageContainer>
    )
}
export default Home
