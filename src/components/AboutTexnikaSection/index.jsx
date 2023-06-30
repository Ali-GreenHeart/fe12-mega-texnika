import { Box, Button, Grid, Typography } from "@mui/material";
import belas from "../../assets/belas.png";
import forklift from "../../assets/forklift.png";
import PaperImg from "../PaperImg";


const AboutTexnikaSection = ({ text, withButton = false }) => {
    return (
        <Grid
            pb={4}
            mb={4}
            mt={6}
            container
            alignItems="flex-end"
            justifyContent="space-between"
        >
            <Grid
                item
                md={4}
                lg={3}
                sx={{ display: { xs: "none", md: "block" } }}
            >
                <PaperImg src={forklift} />
            </Grid>
            <Grid item xs={12} md={7} lg={8}>
                <PaperImg src={belas} />
                <Box pl={5} pt={5}>
                    <Typography variant="h4" fontWeight="bold">
                        Mega Texnika-da sınaqdan keçirilmiş texnikalar
                    </Typography>
                    <Typography my={2}>
                        {text}
                    </Typography>
                    {
                        withButton && <Button>Haqqımızda</Button>
                    }
                </Box>
            </Grid>
        </Grid>
    )
}
export default AboutTexnikaSection
