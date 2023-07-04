import { Box, Breadcrumbs, Container, Typography } from "@mui/material";
import Footer from "../Footer";
import Header from "../Header";
import { Link } from "react-router-dom";

const PageContainer = ({ children }) => {
  const [, ...arr] = location.pathname.split('/')
  console.log(arr)
  return (
    <>
      <Header />
      <Container>
        <Breadcrumbs separator="|" >
          <Link underline="hover" color="inherit" to="/">
            Ana səhifə
          </Link>
          {
            arr.map((elem, index) => {
              if (index != arr.length - 1) {
                return (
                  <Link
                    key={elem}
                    underline="hover"
                    color="inherit"
                    style={{ textTransform: 'capitalize' }}
                    to={'/' + elem.toLowerCase()}
                  >
                    {elem}
                  </Link>
                )
              } else {
                return (
                  <Typography style={{ textTransform: 'capitalize' }} key={elem} color="text.primary">{elem}</Typography>
                )
              }
            })
          }
        </Breadcrumbs>
      </Container>
      <Box className="background_radiuses_texture" component="main" sx={{ my: 5 }}>
        {children}
      </Box>
      <Footer />
    </>
  )
}
export default PageContainer
