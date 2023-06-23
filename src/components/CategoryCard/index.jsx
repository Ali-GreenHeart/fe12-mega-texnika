import { Paper, Typography } from "@mui/material"

const CategoryCard = ({ title, src }) => {
    return (
        <Paper elevation={16}
            sx={{
                maxWidth: '300px',
                height: 300,
                margin: '0 auto',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                p: 2
            }}>
                  <img style={{ width: '99%', objectFit: 'contain' }} src={src} />
            <Typography pt={2} component="h4" fontWeight="bold" textAlign="center">{title}</Typography>
            <Typography textAlign="center">20.12.2023</Typography>
          
        </Paper>
    )
}
export default CategoryCard
