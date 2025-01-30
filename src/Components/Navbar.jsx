import React, { useState } from 'react';
import Goat_main from "../Assets/Goat_Main.jpg";
import {BsCart2, BsFillCalendarMonthFill} from "react-icons/bs";
import {HiOutlineBars3} from "react-icons/hi2";
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
    const menuOptions =[
        {
            text:"Home",
            icon:<HomeIcon/>
            
        },
        {
            text:"About",
            icon:<InfoIcon/>,
        
        },
        {
            text:"Product Store",
            icon:<CommentRoundedIcon/>
            
        },
        {
            text:"Contact",
            icon:<PhoneRoundedIcon/>
            
        },
        {
            text:"Cart",
            icon:<ShoppingCartRoundedIcon/>
        }
    ]

  return (
    <nav className='Background'>
        <div className="nav-logo-container"> 
            <img src={Goat_main} className='navlogo' alt="Goat_image" />
            <h2 className="navlogo">GO<span>AT</span></h2>
        </div>
        <div className="navbar-links-container">
             
            <a href="">Home</a>
            <Link to="/about">About</Link>
            <Link to="/productDetails">Product Store</Link>
            <Link to="/Contact">Contact Us</Link>
            {/* <a href="">About</a>
            <a href="">Testimonials</a>
            <a href="">Contact us</a> */}
            <a href="">
                <BsCart2 className="navbar-car-icon"/>
            </a>
            <button className="primary-button"> Bookings Now </button>
        </div>

        <div className="navbar-menu-container">
            <HiOutlineBars3 onClick={ () => setOpenMenu(true)}/>
        </div>

        <Drawer open={openMenu} onClose={() => setOpenMenu(false)} anchor="right">
            <Box sx={{width:250}} 
            role="Presentation"
            onClick={ ()=>setOpenMenu(false)}
            onKeyDown={()=>setOpenMenu(false)}
            >
                <List>
                    {menuOptions.map((item) => (
                        <ListItem key={item.text} disablePadding>
                            <ListItemButton >
                                <ListItemIcon >{item.icon}</ListItemIcon>
                                <ListItemText primary={item.text}/>
                            </ListItemButton>
                        </ListItem>
                    ))}
                </List>    
            </Box>

        </Drawer>
    </nav>
  )
}

export default Navbar
