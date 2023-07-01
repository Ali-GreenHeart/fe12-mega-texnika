import { Paper } from "@mui/material";

const PaperImg = ({ src }) => {
  return (
    <Paper sx={{ p: 2 }}>
      <img style={{ width: "100%" }} src={src} alt="eskavator" />
    </Paper>
  );
};
export default PaperImg;
