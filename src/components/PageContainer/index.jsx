import { Box, Container, Typography } from "@mui/material";
import Footer from "../Footer";
import Header from "../Header";

const PageContainer = ({ children }) => {
  return (
    <>
      <Header />
      <Container>
        <Typography
          mb={6}
          fontSize="14px"
          color="secondary.light"
        >Ana səhifə | <b style={{ textTransform: "capitalize" }}>{location.pathname.slice(1).replaceAll('/', ' | ')}</b>
        </Typography>
      </Container>
      <Box className="background_radiuses_texture" component="main" sx={{ my: 5 }}>
        {children}
      </Box>
      <Footer />
    </>
  )
}
export default PageContainer
