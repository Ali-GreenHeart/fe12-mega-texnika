import { Paper, Typography } from "@mui/material";

const CategoryCard = ({ title, src }) => {
  return (
    <Paper
      elevation={16}
      sx={{
        maxWidth: "300px",
        height: 300,
        margin: "0 auto",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        p: 2,
      }}
    >
      <Typography pt={4} component="h4" fontWeight="bold" textAlign="center">
        {title}
      </Typography>
      <img style={{ width: "100%", objectFit: "contain" }} src={src} />
    </Paper>
  );
};
export default CategoryCard;
