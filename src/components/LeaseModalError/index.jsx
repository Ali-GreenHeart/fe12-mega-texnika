import { Box, Container, Dialog, Typography } from "@mui/material";
import PaperImg from "../PaperImg";
import error from "../../assets/LeaseModalError/error.png";

let obj = {
  title: "Sifarişiniz tamamlanmadı",
  text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer",
};

const LeaseModalError = () => {
  return (
      <Box sx={{ p: 2, }} >
        <PaperImg src={error} sx={{with: 200}} />
        <Typography variant="h4" className="firstTitle">{obj.title}</Typography>
        <Typography variant="h6" className="secontTitle">{obj.text}</Typography>
      </Box>
  );
};
export default LeaseModalError;
