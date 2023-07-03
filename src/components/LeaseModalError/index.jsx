import { Box, Grid, Typography } from "@mui/material";
import PaperImg from "../PaperImg";
import error from "../../assets/LeaseModalError/error.png";
import Texnikalar from "../../pages/Texnikalar";

let obj = {
  title: "Sifarişiniz tamamlanmadı",
  text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer",
};

const LeaseModalError = () => {
  return (
    <Box sx={{ p: 2 }}>
      <Grid
        xs={12}
        sm={6}
        md={2}
        item
        className="error_img"
        sx={{ p: 2, width: 170 }}
        style={{ margin: "0 auto" }}
      >
        <PaperImg src={error} className="error" />
      </Grid>
      <Typography
        variant="h4"
        className="firstTitle"
        p={2}
        xs={12}
        sm={6}
        md={3}
      >
        {obj.title}
      </Typography>
      <Typography
        variant="h6"
        className="secontTitle"
        p={2}
        xs={12}
        sm={6}
        md={3}
      >
        {obj.text}
      </Typography>
    </Box>
  );
};
export default LeaseModalError;
