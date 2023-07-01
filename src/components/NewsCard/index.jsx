import { ChevronRight } from "@mui/icons-material";
import { Box, Paper, Stack, Typography } from "@mui/material";
export default function NewsCard({ src, title, text, date }) {
  return (
    <Paper sx={{
      '&': {
        mb: 7
      },
      '&:hover': {
        mb: 0,
        '& .news_card_box': {
          mb: 4
        }
      }
    }}>
      <img style={{ width: "100%", objectFit: "contain" }} src={src} />
      <Box p={1}>
        <Typography my={1} sx={{ height: 50, overflowY: 'hidden' }} component="h6" color="black" fontSize="16px">
          {title}
        </Typography>
        <Typography color="secondary" fontSize="14px">
          {text}
        </Typography>
        <Stack className="news_card_box" flexDirection="row" alignItems="center" justifyContent="space-between" mx={1} py={2}>
          <Typography color="secondary" fontSize="14px">
            {date}
          </Typography>
          <ChevronRight color="primary" />
        </Stack>
      </Box>
    </Paper >
  );
}
