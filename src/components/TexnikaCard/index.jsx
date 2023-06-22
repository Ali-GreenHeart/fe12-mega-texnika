import { Paper, Typography, Stack, Button, Box } from "@mui/material"

const TexnikaCard = ({ title, src, year, priceMonth, priceDay }) => {
    return (
        <Paper elevation={4}>
            <Box
                px={3} py={2}>
                <img
                    style={{ width: '100%', objectFit: 'contain' }}
                    src={src} alt={title} />
            </Box>
            <Box
                px={3} py={2}>
                <Typography
                    sx={{ color: "rgba(89, 108, 114, 1)" }}
                    component="h3"
                    fontWeight="600"
                    fontSize="18px"
                > Məhsulun adı
                </Typography>
                <Typography
                    sx={{ color: "rgba(104, 104, 104, 1)" }}
                    fontSize="14px"
                    component="h5"
                >{title}
                </Typography>
                <Typography
                    sx={{ color: "rgba(176, 173, 173, 1)" }}
                    fontSize="14px"
                    component="h5"
                >{year}
                </Typography>
            </Box>
            <Stack px={3} alignItems="flex-end">
                <Typography
                    sx={{ color: "#FFC01F" }}
                    fontWeight="600"
                    component="h2">
                    {priceMonth} azn/ay <br />
                    {priceDay} azn/gün
                </Typography>
            </Stack>
            <Box px={3} py={2} textAlign="center">
                <Button
                    sx={{ width: "80%" }}
                >İcarə et
                </Button>
            </Box>
        </Paper>
    )
}
export default TexnikaCard

