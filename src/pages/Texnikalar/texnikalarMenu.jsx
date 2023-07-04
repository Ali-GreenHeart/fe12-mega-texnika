import MenuIcon from '@mui/icons-material/Menu';
import { Box, Button, IconButton, Menu, Stack, Typography } from '@mui/material';
import { useState } from 'react';

const TexnikalarMenu = ({ setCategory }) => {
  const [open, setOpen] = useState(false)
  const [anchorElm, setAnchorElm] = useState(null);

  const handleClick = (categoryId) => {
    setCategory(categoryId)
    setOpen(false)
  }

  return (
    <Box
      sx={{ display: { xs: 'block', lg: "none" } }}>
      <IconButton onClick={(e) => {
        setOpen(true)
        setAnchorElm(e.target)
      }}>
        <MenuIcon />
      </IconButton>
      <Typography
        component="h2"
        fontWeight="700"
        textAlign="center"
        fontSize="24px"
        color="secondary"
      >Texnikalar
      </Typography>
      <Menu
        anchorEl={anchorElm}
        open={open}
        onClose={() => setOpen(false)}
      >
        <Stack sx={{ width: 250, gap: "6px" }} >
          <Button onClick={() => handleClick(-1)} variant='text'>Hamısı</Button>
          <Button onClick={() => handleClick(0)} variant='text'>Ekskavator</Button>
          <Button onClick={() => handleClick(1)} variant='text'>Ekskavator yükləyici</Button>
          <Button onClick={() => handleClick(2)} variant='text'>Forkliftlər</Button>
          <Button onClick={() => handleClick(3)} variant='text'>Avtokran</Button>
        </Stack>
      </Menu>
    </Box>

  )
}
export default TexnikalarMenu;
