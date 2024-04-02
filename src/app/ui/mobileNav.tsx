'use client'

import { Box, Button, Drawer, IconButton, List, ListItem, ListItemButton, ListItemText } from "@mui/material"
import MenuIcon from "@mui/icons-material/Menu"
import Image from "next/image"
import { useState } from "react"

export default function MobileNavbar() {
  const [open, setOpen] = useState(false)
  
  const toggleDrawer = (newOpen: boolean) => () => {
    setOpen(newOpen)
  }

  const DrawerList = (
    <Box sx={{ width: 250 }} role="presentation" onClick={toggleDrawer(false)}>
      <List>
      <Image 
                    src="/public/logotransparent.png"
                    width={50}
                    height={50}
                    alt="Revived Relics" 
                />
        {['Home', 'About', 'Projects', 'Contact'].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>

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
