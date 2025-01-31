import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';  // Import useNavigate
import Goat_main from "../Assets/Goat_Main.jpg";
import { BsCart2 } from "react-icons/bs";
import { HiOutlineBars3 } from "react-icons/hi2";
import {
    Box,
    Drawer,
    List,
    ListItem,
    ListItemButton,
    ListItemIcon,
    ListItemText
} from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import InfoIcon from "@mui/icons-material/Info";
import CommentRoundedIcon from "@mui/icons-material/CommentRounded";
import PhoneRoundedIcon from "@mui/icons-material/PhoneRounded";
import ShoppingCartRoundedIcon from "@mui/icons-material/ShoppingCartRounded";
import { Link } from 'react-router-dom';

const Navbar = () => {
    const [openMenu, setOpenMenu] = useState(false);
    const navigate = useNavigate();  // Initialize useNavigate

    // Define menu options with paths
    const menuOptions = [
        { text: "Home", icon: <HomeIcon />, path: "/" },
        { text: "About", icon: <InfoIcon />, path: "/about" },
        { text: "Product Store", icon: <CommentRoundedIcon />, path: "/productDetails" },
        { text: "Contact", icon: <PhoneRoundedIcon />, path: "/contact" },
        { text: "Cart", icon: <ShoppingCartRoundedIcon />, path: "/cart" } // Add a path if needed
    ];

    // Function to handle navigation
    const navigateAction = (path) => {
        navigate(path); // Navigate to the correct route
        setOpenMenu(false); // Close menu after clicking
    };

    return (
        <nav className='Background'>
            <div className="nav-logo-container">
                <img src={Goat_main} className='navlogo' alt="Goat_image" />
                <h2 className="navlogo">GO<span>AT</span></h2>
            </div>
            <div className="navbar-links-container">
                <Link to="/">Home</Link>
                <Link to="/about">About</Link>
                <Link to="/productDetails">Product Store</Link>
                <Link to="/contact">Contact Us</Link>
                <a href="">
                    <BsCart2 className="navbar-car-icon" />
                </a>
                <button className="primary-button"> Order Now ! </button>
            </div>

            <div className="navbar-menu-container">
                <HiOutlineBars3 onClick={() => setOpenMenu(true)} />
            </div>

            <Drawer open={openMenu} onClose={() => setOpenMenu(false)} anchor="right">
                <Box sx={{ width: 250 }}
                    role="Presentation"
                    onClick={() => setOpenMenu(false)}
                    onKeyDown={() => setOpenMenu(false)}
                >
                    <List>
                        {menuOptions.map((item) => (
                            <ListItem key={item.text} disablePadding>
                                <ListItemButton onClick={() => navigateAction(item.path)}>
                                    <ListItemIcon>{item.icon}</ListItemIcon>
                                    <ListItemText primary={item.text} />
                                </ListItemButton>
                            </ListItem>
                        ))}
                    </List>
                </Box>
            </Drawer>
        </nav>
    );
};

export default Navbar;
