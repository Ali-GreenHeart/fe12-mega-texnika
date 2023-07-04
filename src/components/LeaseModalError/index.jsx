import { Box, Grid, Typography } from "@mui/material";
import error from "../../assets/LeaseModalError/error.png";

let obj = {
  title: "Sifarişiniz tamamlanmadı",
  text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer",
};

const LeaseModalError = () => {
  return (
    <>
      <Box
        className="error_img"
        sx={{ p: 2 }}
        style={{ margin: "0 auto" }}
      >
        <img src={error} className="error" />
        <Typography variant="h4" className="firstTitle" p={2}  textAlign="center">
          {obj.title}
        </Typography>
        <Typography variant="h6" className="secontTitle" p={2} textAlign="center">
          {obj.text}
        </Typography>
      </Box>
    </>
  );
};

export default LeaseModalError;
