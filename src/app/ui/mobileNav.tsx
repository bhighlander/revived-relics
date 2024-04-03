'use client'

import { Box, Drawer, IconButton, useMediaQuery } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import Image from "next/image";
import React, { useState } from "react";
import Link from "next/link";

//Mobile Navbar component
const MobileNavbar: React.FC = () => {
  const isMobile = useMediaQuery('(max-width:600px)'); // Defines breakpoint for mobile devices
  const [open, setOpen] = useState(false); // Sets state for navbar drawer being open

  // toggles navbar drawer
  const toggleDrawer = (newOpen: boolean) => () => {
    setOpen(newOpen);
  };

  // contents of drawer with links and logo
  const NavDrawer = (
    <Box
      sx={{ width: 200, height: '100vh' }}
      role="presentation"
      onClick={toggleDrawer(false)}
      className="mobile-navbar nav"
    >
      <div className="flex flex-col items-center space-y-4">
          <div className="nav-logo">
            <Image src="/logotransparent.png" width={80} height={80} alt="Revived Relics" />
          </div>
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
        <Link href="/projects">Projects</Link>
        <Link href="/contact">Contact</Link>
      </div>
    </Box>
  );

  // returns mobile nav drawer if screen size is mobile
  return (
    <div>
      {isMobile && (
        <>
          <IconButton onClick={toggleDrawer(true)}>
            <MenuIcon />
          </IconButton>
          <Drawer open={open} onClose={toggleDrawer(false)}>
            {NavDrawer}
          </Drawer>
        </>
      )}
    </div>
  );
};

export default MobileNavbar;
