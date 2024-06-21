import { useState } from 'react'
import Button from '@mui/material/Button'
import Menu from '@mui/material/Menu'
import MenuItem from '@mui/material/MenuItem'
import ExpandLessIcon from '@mui/icons-material/ExpandLess'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'

export default function Workspaces() {
  const [anchorEl, setAnchorEl] = useState(null)
  const isOpen = Boolean(anchorEl)

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget)
  }
  const handleClose = () => {
    setAnchorEl(null)
  }

  return (
    <>
      <Button
        sx={{ color: 'white', textTransform: 'none' }}
        onClick={handleClick}
        endIcon={isOpen ? <ExpandLessIcon /> : <ExpandMoreIcon />}
      >
        Workspaces
      </Button>

      <Menu
        anchorEl={anchorEl}
        open={isOpen}
        onClose={handleClose}
      >
        <MenuItem onClick={handleClose}>Workspace 01</MenuItem>
        <MenuItem onClick={handleClose}>Workspace 02</MenuItem>
        <MenuItem onClick={handleClose}>Workspace 03</MenuItem>
      </Menu>
    </>
  )
}