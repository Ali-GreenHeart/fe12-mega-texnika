import { Box } from "@mui/material";
import Footer from "../Footer";
import Header from "../Header";

const PageContainer = ({ children }) => {
  return (
    <>
      <Header />
      <Box className="background_radiuses_texture" component="main" sx={{ my: 5 }}>
        {children}
      </Box>
      <Footer />
    </>
  )
}
export default PageContainer
