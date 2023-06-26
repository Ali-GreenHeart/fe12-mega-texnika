import { Box, Container, Grid, Paper, Stack, Typography } from "@mui/material";
export default function NewsCard({ src, title, text, date }) {
  return (
    <Container>
      <Grid item display="flex" flexDirection="row">
        <Paper>
          <Box>
            <Stack>
              <img style={{ width: "100%", objectFit: "contain" }} src={src} />
            </Stack>
            <Box mx={1} py={2}>
              <Typography component="h6" color="black" fontSize="16px">
                {title}
              </Typography>
            </Box>
            <Box mx={1} py={2}>
              <Typography color="secondary" fontSize="14px">
                {text}
              </Typography>
            </Box>
            <Box mx={1} py={2}>
              <Typography color="secondary" fontSize="12px">
                {date}
              </Typography>
            </Box>
          </Box>
        </Paper>
      </Grid>
    </Container>
  );
}
