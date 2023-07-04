import { Container, Grid, Typography } from "@mui/material";
import { useParams } from "react-router";
import img from "../../assets/img.png";
import PageContainer from "../../components/PageContainer";
import PaperImg from "../../components/PaperImg";


const Xeber = () => {
    const { id } = useParams()
    return (
        <>
            <PageContainer>
                <Container>
                    <Grid container alignItems="center" spacing={2}>
                        <Grid item xs={12} md={6}>
                            <Typography component="h2" fontWeight="700" fontSize="35px" color="secondary">Xəbərin adı</Typography>
                            <Typography my={2} fontWeight="400" fontSize="14px" color="secondary">12.04.2022</Typography>
                            <Typography my={2} fontWeight="400" fontSize="14px" color="secondary">Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer
                                took a galley of type and scrambled it to make a type specimen book. It has survived not only
                                five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                                It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,
                                and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
                                standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a
                                type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining
                                essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,
                                and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum</Typography>
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <PaperImg src={img} />
                        </Grid>
                    </Grid>
                </Container>
            </PageContainer>
        </>
    )
}
export default Xeber;
