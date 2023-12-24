import * as React from "react";
import { Container } from '@mui/system';
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { Route, Routes, Link, useNavigate, useLocation, useParams } from "react-router-dom";
import SignupAdmin from "../screens/adminscreens/signupAdmin";
import AccountCircle from '@mui/icons-material/AccountCircle';
import Switch from '@mui/material/Switch';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormGroup from '@mui/material/FormGroup';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import { signoutUser } from "../config/firebasemethods";
import AdminProfile from "../screens/adminprofile";
import UserProfile from "../screens/userprofile";
import { Button, Grid } from "@mui/material";
const drawerWidth = 240;

function MyDrawer(props) {
    const { window, datasourse, routespath, value, nodeName, userId, state, profileNode } = props;
    const [mobileOpen, setMobileOpen] = React.useState(false);
    const navigate = useNavigate();
    const location = useLocation();
    const [auth, setAuth] = React.useState(true);
    const [anchorEl, setAnchorEl] = React.useState(null);
    const [dashboardDisabled, setDashboardDisabled] = React.useState(true)
    const params = useParams();
    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    const handleChange = (event) => {
        setAuth(event.target.checked);
    };

    const handleMenu = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const signout = () => {
        setAnchorEl(null);
        signoutUser(`${nodeName}/${userId}`)
            .then(() => {
                // setLoader(false)
                // navigate(`/login/${nodeName}`)
                navigate(`/login/studentLogin`)
            })
            .catch((err) => {
                // setLoader(false)
                console.log(err)
            })
    };
    const profile = () => {
        setAnchorEl(null);
        navigate(`${profileNode}`, { state: state })
        setDashboardDisabled(false)

    };
    const handleClose = () => {
        setAnchorEl(null);
    };
    React.useEffect(() => {
        console.log(params.id)
        // if (location.pathname === `/adminLogin/${params.id}`) {
        //     setDashboardDisabled(true)
        // }
        // if (location.pathname === `/studentLogin/${params.id}`) {
        //     setDashboardDisabled(true)
        // } 
        if (location.pathname.includes(`/adminLogin/${params.id}`)) {
            setDashboardDisabled(true)

        }
    }, [])
    //     const [navItems, setNaveItems] = React.useState([{
    //         path: "/",
    //         name: "Home",
    //         icon: () => <InboxIcon />
    //     },
    //     {
    //         path: "/about",
    //         name: "About",
    //         icon: () => <InboxIcon />
    //     },
    //     {
    //         path: "/services",
    //         name: "Services",
    //         icon: () => <InboxIcon />
    //     },
    //     {
    //         path: "/contact",
    //         name: "Contact",
    //         icon: () => <InboxIcon />
    //     },
    //     {
    //         path: "dashboard",
    //         name: "Dashboard",
    //         icon: () => <InboxIcon />
    //     }
    // ])
    const drawer = (

        <div>
            <Button sx={{ width: "100%" }} onClick={() => {
                navigate(location.pathname.includes('/adminLogin/') ? `/adminLogin/${params.id}` : `/studentLogin/${params.id}`); setDashboardDisabled(true)
            }}>
                <Typography variant="h6" sx={{ my: 2, textAlign: "center" }}>
                    Dashboard
                </Typography>
            </Button>
            <Divider />
            {/* <List sx={{ display: { xs: 'block', sm: 'none' } }}>
                        {navItems.map((item, i) => (
                            <ListItem key={i} disablePadding>
                        <ListItemButton onClick={() => {
                            navigate(item.path)
                        }}>
                            <ListItemIcon>
                                {item.icon()}
                            </ListItemIcon>
                            <ListItemText primary={item.name} />
                        </ListItemButton>
                    </ListItem>
                        ))}
                    </List> */}
            <Divider />
            <List>
                {datasourse.map((text, index) => (
                    <ListItem key={index} disablePadding>
                        <ListItemButton onClick={() => {
                            navigate(text.route);
                            setDashboardDisabled(false)
                        }}>
                            <ListItemIcon>
                                {/* {<DvrSharpIcon />} */}
                                <img alt='bullet point' src={"https://img.icons8.com/external-others-pike-picture/50/null/external-bullet-speed-fast-motion-others-pike-picture.png"} width="30px" height="40px" />
                            </ListItemIcon>
                            <ListItemText primary={text.name} />
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
        </div>
    );

    const container =
        window !== undefined ? () => window().document.body : undefined;

    // const navigate = useNavigate();

    return (
        <Box sx={{ display: "flex" }}>
            <CssBaseline />
            <AppBar
                position="fixed"
                sx={{
                    width: { sm: `calc(100% - ${drawerWidth}px)` },
                    ml: { sm: `${drawerWidth}px` },
                }}
            >
                <Toolbar sx={{ justifyContent: { xs: "space-between", sm: "right" } }}>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        edge="start"
                        onClick={handleDrawerToggle}
                        sx={{ mr: 2, display: { sm: "none" } }}
                    >
                        <MenuIcon />
                    </IconButton>

                    {/* <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
                        {navItems.map((item, i) => (
                            <Link key={i} className="navLinks" to={item.path} sx={{ color: '#fff !important', margin: "0px 5px !important" }}>
                                {item.name}
                            </Link>
                        ))}
                    </Box> */}
                    {auth && (
                        <div>
                            <IconButton
                                size="large"
                                aria-label="account of current user"
                                aria-controls="menu-appbar"
                                aria-haspopup="true"
                                onClick={handleMenu}
                                color="inherit"
                            >
                                <AccountCircle />
                            </IconButton>
                            <Menu
                                id="menu-appbar"
                                anchorEl={anchorEl}
                                anchorOrigin={{
                                    vertical: 'top',
                                    horizontal: 'right',
                                }}
                                keepMounted
                                transformOrigin={{
                                    vertical: 'top',
                                    horizontal: 'right',
                                }}
                                open={Boolean(anchorEl)}
                                onClose={handleClose}
                            >
                                <MenuItem onClick={profile}>Profile</MenuItem>
                                <MenuItem onClick={signout}>Log Out</MenuItem>
                            </Menu>
                        </div>
                    )}
                </Toolbar>
            </AppBar>
            <Box
                component="nav"
                sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
                aria-label="mailbox folders"
            >
                {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
                <Drawer
                    container={container}
                    variant="temporary"
                    open={mobileOpen}
                    onClose={handleDrawerToggle}
                    ModalProps={{
                        keepMounted: true, // Better open performance on mobile.
                    }}
                    sx={{
                        display: { xs: "block", sm: "none" },
                        "& .MuiDrawer-paper": {
                            boxSizing: "border-box",
                            width: drawerWidth,
                        },
                    }}
                >
                    {drawer}
                </Drawer>
                <Drawer
                    variant="permanent"
                    sx={{
                        display: { xs: "none", sm: "block" },
                        "& .MuiDrawer-paper": {
                            boxSizing: "border-box",
                            width: drawerWidth,
                        },
                    }}
                    open
                >
                    {drawer}
                </Drawer>
            </Box>
            <Box
                component="main"
                sx={{
                    flexGrow: 1,
                    p: 3,
                    // px: 3,
                    // py: 0,
                    width: { sm: `calc(100% - ${drawerWidth}px)`, lg:"1000px"},
                }}
            >
                {dashboardDisabled &&
                    <Container sx={{boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;", borderRadius: "5px",backgroundColor: "white", minHeight: "80vh", padding: "0px", minWidth: "100%" }}>
                        <Grid container spacing={2} sx={{ marginLeft: "-10px" }}>
                            {datasourse.map((text, index) => (
                                <Grid item xs={12} sm={12} md={4} xl={3} className="displayCard" sx={{ padding: '10px', }}>

                                    <ListItem key={index} disablePadding sx={{
                                        backgroundColor: "#00c4ff", border: "1px solid",
                                        borderRadius: "10px;",boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;"
                                    }}>
                                        <ListItemButton 
                                        // sx={{flexDirection:"column"}}
                                        onClick={() => {
                                            navigate(text.route);
                                            setDashboardDisabled(false)
                                        }}>
                                            <ListItemIcon>
                                                <img src={text.img} width="100px" height="120px" />
                                            </ListItemIcon>
                                            <ListItemText sx={{ textAlign: "center", color: "white", fontWeight: "bold" }} primary={text.name} />
                                        </ListItemButton>
                                    </ListItem>
                                </Grid>
                            ))}
                        </Grid>
                    </Container>}
                <Box>
                    <Routes>
                        <Route path="signupAdmin" element={<SignupAdmin />} />
                        <Route path="adminprofile" element={<AdminProfile />} />
                        <Route path="userprofile" element={<UserProfile />} />
                       </Routes>
                </Box>
            </Box>
        </Box>
    );
}

MyDrawer.propTypes = {
    /**
     * Injected by the documentation to work in an iframe.
     * You won't need it on your project.
     */
    window: PropTypes.func,
};

export default MyDrawer;