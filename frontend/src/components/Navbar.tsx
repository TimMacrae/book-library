import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import AutoStoriesIcon from '@mui/icons-material/AutoStories';
import {Link} from "react-router-dom";
import {routerConfig} from "../pages/routerConfig.ts";
import type {User} from "../types/userType.ts";

const pages = [{name: "My Books", url: routerConfig.URL.HOME}, {
    name: 'Library',
    url: routerConfig.URL.LIBRARY
}, {name: 'Favorites', url: routerConfig.URL.FAVORITES}];


type NavbarProps = {
    user:User
}

export function Navbar({user}:NavbarProps) {
    const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);


    const handleLogout = () => {
        const host = window.location.host === routerConfig.API.HOST5173 ? routerConfig.API.HOST8080: window.location.origin

        window.open(host + "/logout", '_self')
    }

    const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorElNav(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };


    return (
        <AppBar position="static" sx={{height: 60}} >
            <Container maxWidth="xl" sx={{ height: 60 }}>
                <Toolbar disableGutters sx={{ height: 60}}  >
                    <Link to={routerConfig.URL.HOME}>
                        <AutoStoriesIcon sx={{display: {xs: 'none', md: 'flex'}, mr: 1}}/></Link>

                    {(user && <Box sx={{flexGrow: 1, display: {xs: 'flex', md: 'none'}}}>

                        <IconButton
                            size="large"
                            aria-label="account of current user"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            onClick={handleOpenNavMenu}
                            color="inherit"
                        >
                            <MenuIcon/>
                        </IconButton>
                        <Menu
                            id="menu-appbar"
                            anchorEl={anchorElNav}
                            anchorOrigin={{
                                vertical: 'bottom',
                                horizontal: 'left',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'left',
                            }}
                            open={Boolean(anchorElNav)}
                            onClose={handleCloseNavMenu}
                            sx={{display: {xs: 'block', md: 'none'}}}
                        >
                            {pages.map((page) => (
                                <MenuItem key={page.name} onClick={handleCloseNavMenu}>
                                    <Link to={page.url} key={page.name}>
                                        <Typography sx={{textAlign: 'center'}}>{page.name}</Typography>
                                    </Link>
                                </MenuItem>
                            ))}
                        </Menu>
                    </Box>)}
                    {user &&(<AutoStoriesIcon sx={{display: {xs: 'flex', md: 'none'}, mr: 1}}/>)}

                    {user &&(<Box sx={{flexGrow: 1, display: {xs: 'none', md: 'flex'}}}>
                        {pages.map((page) => (
                            <Link to={page.url} key={page.name}>
                                <Button
                                    key={page.name}
                                    onClick={handleCloseNavMenu}
                                    sx={{my: 2, color: 'white', display: 'block'}}
                                >
                                    {page.name}
                                </Button>
                            </Link>
                        ))}
                    </Box>)}
                    {user&&(<Box sx={{flexGrow: 0}}>
                        <Button onClick={handleLogout} variant="outlined"
                                style={{color: "#fff", borderColor: "#fff"}}>Logout</Button>
                    </Box>)}
                </Toolbar>
            </Container>
        </AppBar>
    );
}
