import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';
import { Link, useNavigate } from 'react-router-dom';
import NewspaperIcon from '@mui/icons-material/Newspaper';
import WbAutoIcon from '@mui/icons-material/WbAuto';
import MySelect from './MYSelect';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
const pages = [
    { path: "/", page: 'Home' },
    { path: "about", page: 'About' },
    { path: "contact", page: 'Contact' },
    { path: "blog", page: 'Blog' },
];
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

function ResponsiveAppBar() {
    let [dropDownList, setDropDownList] = React.useState([
        {
          title: "Generate Product Description 😍",
          path: "productdescription",
        },
        {
          title: "Tagline Generator for Brands 🖊",
          path: "taglineGenerator",
        }, {
          title: "Generate Tweets 🕊",
          path: "tweetsGenerator",
        }, {
          title: "Generate Image 📷",
          path: "imageGenerator"
        }, {
          title: "Generate application 📑",
          path: "applicationGenerator"
        }, {
          title: "Rephrase Text 🖊",
          path: "rephraseText"
        }
      ])
    const [anchorElNav, setAnchorElNav] = React.useState(null);
    const [anchorElUser, setAnchorElUser] = React.useState(null);
    const navigate = useNavigate()

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };
    const handleOpenUserMenu = (event) => {
        setAnchorElUser(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };

    return (
        <AppBar position="fixed" sx={{backgroundColor: "#183756"}}>
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                    <WbAutoIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
                    <Typography
                        variant="h6"
                        noWrap
                        component="a"
                        href="/"
                        sx={{
                            mr: 2,
                            display: { xs: 'none', md: 'flex' },
                            fontFamily: 'monospace',
                            fontWeight: 700,
                            letterSpacing: '.3rem',
                            color: 'inherit',
                            textDecoration: 'none',
                        }}
                    >
                        AI GENERATOR
                    </Typography>

                    <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                        <IconButton
                            size="large"
                            aria-label="account of current user"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            onClick={handleOpenNavMenu}
                            color="inherit"
                        >
                            <MenuIcon />
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
                            sx={{
                                display: { xs: 'block', md: 'none' },
                            }}
                        >
                            {pages.map((e, i) => (
                                <MenuItem key={i} onClick={() => navigate(e.path, handleCloseNavMenu)}>
                                    <Typography textAlign="center">{e.page}</Typography>
                                </MenuItem>

                            ))}
                        </Menu>
                    </Box>
                    <WbAutoIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
                    <Typography
                        variant="h5"
                        noWrap
                        component="a"
                        href=""
                        sx={{
                            mr: 2,
                            display: { xs: 'flex', md: 'none' },
                            flexGrow: 1,
                            fontFamily: 'monospace',
                            fontWeight: 700,
                            letterSpacing: '.3rem',
                            color: 'inherit',
                            textDecoration: 'none',
                        }}
                    >
                        AI Generator
                    </Typography>
                    <Box sx={{ flexGrow: 1, alignItems: "center", display: { xs: 'none', md: 'flex' } }}>
                        {pages.map((e, i) => (
                            <Button
                                key={i}
                                onClick={() => navigate(e.path, handleCloseNavMenu)}
                                sx={{ my: 2, color: 'white', display: 'block' }}
                            >
                                {e.page}
                                {/* <Link to={e.path}>{e.page}</Link> */}
                            </Button>
                        ))}
                        <Box width={150}>
                            {/* <MySelect datasource={[{ path: "/", page: 'Home' },
                        { path: "about", page: 'About' },
                        { path: "contact", page: 'Contact' },]} 
                        displayField={"page"}
                        valueField={"path"}
                        onChange={(e)=>navigate(e.target.value)}
                        
                        /> */}
                                <Nav>
                                    <NavDropdown
                                        id="collasible-nav-dropdown"
                                        title="SERVICES"
                                        menuVariant="light"
                                        className='dropdown'
                                    >
                                        {dropDownList.map((e)=>{
                                            return<NavDropdown.Item href={e.path}>{e.title}</NavDropdown.Item>
                                        })}
                                        {/* <NavDropdown.Item href="#action/3.2">
                                            Another action
                                        </NavDropdown.Item>
                                        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item> */}
                                        <NavDropdown.Divider />
                                        <NavDropdown.Item href="#action/3.4" disabled>
                                            Separated link
                                        </NavDropdown.Item>
                                    </NavDropdown>
                                </Nav>
                        </Box>

                    </Box>

                    {/* <Box sx={{ flexGrow: 0 }}>
                        <Tooltip title="Open settings">
                            <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                                <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
                            </IconButton>
                        </Tooltip>
                        <Menu
                            sx={{ mt: '45px' }}
                            id="menu-appbar"
                            anchorEl={anchorElUser}
                            anchorOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            open={Boolean(anchorElUser)}
                            onClose={handleCloseUserMenu}
                        >
                            {settings.map((setting) => (
                                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                                    <Typography textAlign="center">{setting}</Typography>
                                </MenuItem>
                            ))}
                        </Menu>
                    </Box> */}
                </Toolbar>
            </Container>
        </AppBar>
    );
};
export default ResponsiveAppBar;
