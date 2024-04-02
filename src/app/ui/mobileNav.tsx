'use client'

import { Box, Drawer, IconButton } from "@mui/material"
import MenuIcon from "@mui/icons-material/Menu"
import Image from "next/image"
import { useState } from "react"
import Link from "next/link"

export default function MobileNavbar() {
  const [open, setOpen] = useState(false)
  
  const toggleDrawer = (newOpen: boolean) => () => {
    setOpen(newOpen)
  }

  const DrawerList = (
    <Box sx={{ width: 200 }} role="presentation" onClick={toggleDrawer(false)}>

      <div className="flex flex-col items-center space-y-4">
      <Image 
        src="/logotransparent.png"
        width={50}
        height={50}
        alt="Revived Relics" 
      />
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
        <Link href="/projects">Projects</Link>
        <Link href="/contact">Contact</Link>
      </div>
    </Box>
  )

  return (
    <div>
      <IconButton onClick={toggleDrawer(true)}>
        <MenuIcon />
      </IconButton>
      <Drawer open={open} onClose={toggleDrawer(false)}>
        {DrawerList}
      </Drawer>
    </div>
  )
}
