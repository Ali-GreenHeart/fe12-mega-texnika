import MenuIcon from '@mui/icons-material/Menu';
import { Box, Button, IconButton, Menu, Stack, Typography } from '@mui/material';
import { useState } from 'react';

const TexnikalarMenu = () => {
  const [open, setOpen] = useState(false)
  const [anchorElm, setAnchorElm] = useState(null);
  return (
    <Box
      sx={{ display: { xs: 'block', md: 'block', lg: "none" } }}>
      <IconButton onClick={(e) => {
        setOpen(!open)
        setAnchorElm(e.target)
      }}>
        <MenuIcon />
        <Typography
          component="h2"
          fontWeight="700"
          textAlign="center"
          fontSize="24px"
          color="secondary"
        >Texnikalar
        </Typography>
      </IconButton>
      <Menu
        anchorEl={anchorElm}
        open={open}
        onClose={() => setOpen(false)}
      >
        <IconButton
          onClick={() => setOpen(false)}
        >
        </IconButton>
        <Stack sx={{ width: "250px" ,gap:"6px" }} >
          <Button variant='text'>Hamısı</Button>
          <Button variant='text'>Ekskavator</Button>
          <Button variant='text'>Ekskavator yükləyici</Button>
          <Button variant='text'>Forkliftlər</Button>
          <Button variant='text'>Avtokran</Button>
          <Button variant='text'>Eskavator</Button>
          <Button variant='text'>Eskavator yükləyici</Button>
          <Button variant='text'>Forkliftlər</Button>
          <Button variant='text'>Avtokran</Button>
        </Stack>
      </Menu>
    </Box>

  )
}
export default TexnikalarMenu;
