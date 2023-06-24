import { Paper, Typography } from "@mui/material"

const BlogCard = ({ title, src, date }) => {
    return (
        <Paper elevation={16}
            sx={{
                borderRadius: 0,
                maxWidth: '300px',
                margin: '0 auto',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                pb: 2
            }}>
            <img style={{ objectFit: 'contain' }} src={src} />
            <Typography pt={2} component="h4" fontWeight="bold" textAlign="center">{title}</Typography>
            <Typography textAlign="center">{date}</Typography>

        </Paper>
    )
}
export default BlogCard
