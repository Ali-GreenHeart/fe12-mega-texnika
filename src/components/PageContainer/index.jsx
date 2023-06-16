import { Box } from "@mui/material"
import Footer from "../Footer"
import Header from "../Header"

const PageContainer = ({ children }) => {
    return (
        <>
            <Header />
            <Box component="main">
                {children}
            </Box>
            <Footer />
        </>
    )
}
export default PageContainer
