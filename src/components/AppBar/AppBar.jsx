import ModeSelect from '~/components/ModeSelect/ModeSelect'
import Box from '@mui/material/Box'
import TrelloIcon from '~/assets/trello.svg?react'
import SvgIcon from '@mui/material/SvgIcon'
import Typography from '@mui/material/Typography'
import Link from '@mui/material/Link'
import Workspaces from './Menus/Workspaces'
import Recent from './Menus/Recent'
import Starred from './Menus/Starred'
import Templates from './Menus/Templates'
import TextField from '@mui/material/TextField'
import Badge from '@mui/material/Badge'
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone'
import HelpOutlineIcon from '@mui/icons-material/HelpOutline'
import Tooltip from '@mui/material/Tooltip'
import Profile from './Menus/Profiles'
import Button from '@mui/material/Button'
import LibraryAddIcon from '@mui/icons-material/LibraryAdd'

export default function AppBar() {
  return (
    <Box sx={{
      height: (t) => t.appBarHeight,
      width: '100%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      gap: 10,
      px: 2,
      overflowX: 'auto',
      bgcolor: (t) => t.palette.mode === 'dark' ? '#2c3e50' : '#1565c0'
    }}>
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>

        <Link underline="none" href="/" sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
          <SvgIcon component={TrelloIcon} sx={{ color: 'white' }} />
          <Typography variant="span" color={'white'} fontSize='1.2rem' fontWeight='bold'>Trello</Typography>
        </Link>

        <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 1 }}>
          <Workspaces />
          <Recent />
          <Starred />
          <Templates />
          <Button startIcon={<LibraryAddIcon />} sx={{ color: 'white', textTransform: 'none' }}>Create</Button>
        </Box>

      </Box>

      <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
        <TextField
          sx={{
            minWidth: 120,
            '& .MuiInputLabel-root': {
              color: 'white !important'
            },
            '& .MuiOutlinedInput-root': {
              color: 'white',
              '& .MuiOutlinedInput-notchedOutline': {
                borderColor: 'white !important',
                borderWidth: '1px',
                '&:hover': {
                  borderColor: 'white !important'
                }
              },
              '& .MuiSvgIcon-root': {
                color: 'white'
              }
            }
          }}
          id="outlined-search"
          label="Search"
          type="search"
          size='small'
        />

        <ModeSelect />

        <Tooltip title="Notifications">
          <Link underline="none" href="#" sx={{ display: 'flex' }}>
            <Badge badgeContent={4} color="warning" variant="dot">
              <NotificationsNoneIcon sx={{ color: 'white' }} />
            </Badge>
          </Link>
        </Tooltip>

        <Tooltip title="Help">
          <Link underline="none" href="#" sx={{ display: 'flex' }}>
            <HelpOutlineIcon sx={{ color: 'white' }} />
          </Link>
        </Tooltip>

        <Profile />

      </Box>
    </Box>
  )
}
