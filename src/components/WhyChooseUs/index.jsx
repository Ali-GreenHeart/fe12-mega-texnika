import { Grid, Typography } from "@mui/material"
import PaperImg from "../PaperImg"
import about2 from "../../assets/about/about2.png";

const WhyChooseUs = ({ }) => {
    return (
        <Grid
            mt={10}
            pb={4}
            container
            alignItems="center"
            justifyContent="space-between"
            spacing={3}
        >
            <Grid item xs={12} md={6}>
                <Typography
                    variant="h5"
                    fontSize="50px"
                    fontFamily="sans-serif"
                    fontWeight={700}
                    color="secondary.main"
                >
                    Niyə bizi seçməlisiniz
                </Typography>
                <Typography>
                    Lorem Ipsum is simply dummy text of the printing and typesetting
                    industry. Lorem Ipsum has been the industry's standard dummy text
                    ever since the 1500s, when an unknown printer took a galley of
                    type and scrambled It is a long established fact that a reader
                    will be distracted by the readable content of a page when looking
                    at its layout. The point of using Lorem Ipsum is that it has a
                    more-or-less normal distribution of letters, as opposed to using
                    'Content here, content here', making it look like readable English
                </Typography>
            </Grid>

            <Grid item xs={12} md={6}>
                <PaperImg src={about2} />
            </Grid>
        </Grid>
    )
}
export default WhyChooseUs
