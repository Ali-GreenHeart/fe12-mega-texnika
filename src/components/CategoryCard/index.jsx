import { Paper, Typography } from "@mui/material"

const CategoryCard = ({ title, src }) => {
    return (
        <Paper elevation={16} sx={{ maxWidth: '300px' }}>
            <Typography pt={4} component="h4" fontWeight="bold" textAlign="center">{title}</Typography>
            <img style={{ width: '100%', objectFit: 'contain' }} src={src} />
        </Paper>
    )
}
export default CategoryCard
