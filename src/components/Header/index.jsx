import { Box, Container, Stack, Typography } from "@mui/material"
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';

const Header = () => {
    return (
        <>
            <Box sx={{ backgroundColor: "rgba(255, 192, 31, 1)", py: 1 }}>
                <Container>
                    <Stack flexDirection="row" justifyContent="space-between">
                        <Typography>+994(12) 123 45 67  |  Fətəli Xan Xoyski 111A, Bakı Azərbaycan</Typography>
                        <Stack flexDirection="row" gap={2}>
                            <InstagramIcon />
                            <FacebookIcon />
                            <TwitterIcon />
                        </Stack>
                    </Stack>
                </Container>
            </Box>
        </>
    )
}
export default Header
