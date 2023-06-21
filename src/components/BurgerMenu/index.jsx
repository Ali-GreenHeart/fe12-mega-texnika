import { Close } from '@mui/icons-material';
import MenuIcon from '@mui/icons-material/Menu';
import { Box, Dialog, IconButton, Menu, MenuItem, Stack, Typography } from '@mui/material';
import { useState } from 'react';
import NavLink from '../NavLink';

const texnikalarLinks = [
    {
        id: 0,
        to: '/texnikalar/eskavator',
        title: 'Eskavator'
    },
    {
        id: 1,
        to: '/texnikalar/forklift',
        title: 'Forklift'
    },
    {
        id: 2,
        to: '/texnikalar/mehsulun_adı',
        title: 'Məhsulun Adı'
    }
]


const BurgerMenu = () => {
    const [open, setOpen] = useState(false)
    return (
        <Box sx={{ display: { xs: 'block', md: 'none' } }}>
            <IconButton onClick={() => {
                setOpen(!open)
            }}>
                {
                    open
                        ?
                        <Close />
                        :
                        <MenuIcon />
                }
            </IconButton>
            <Dialog
                fullScreen
                open={open}
                onClose={() => setOpen(false)}
            >
                <Box p={4} height="calc(100% - 50px)">
                    <Stack
                        flexDirection="row"
                        justifyContent="flex-end"
                    >
                        <IconButton
                            edge="end"
                            color="inherit"
                            onClick={() => setOpen(false)}
                        >
                            <Close />
                        </IconButton>
                    </Stack>
                    <Stack height="100%" justifyContent="space-between">
                        <Stack gap={5}>
                            <NavLink to="/" title="Əsas səhifə" />
                            <NavLink to="/about" title="Haqqımızda" />
                            <NavLink to="/texnikalar" title="Texnikalar" links={texnikalarLinks} />
                            <NavLink to="/icare" title="İcarə şərtləri" />
                            <NavLink to="/blog" title="Blog" />
                            <NavLink to="/elaqe" title="Əlaqə" />
                        </Stack>
                        <Stack flexDirection="row" justifyContent="center" gap={1}>
                            <Typography>Az</Typography>
                            <Typography>En</Typography>
                            <Typography>Ru</Typography>
                        </Stack>
                    </Stack>
                </Box>
            </Dialog>
        </Box>
    )
}
export default BurgerMenu
