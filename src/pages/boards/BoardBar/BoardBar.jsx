import Box from '@mui/material/Box'
import Chip from '@mui/material/Chip'
import DashboardIcon from '@mui/icons-material/Dashboard'
import { Tooltip } from '@mui/material'
import PublicIcon from '@mui/icons-material/Public'
import PublicOffIcon from '@mui/icons-material/PublicOff'
import AddToDriveIcon from '@mui/icons-material/AddToDrive'
import BoltIcon from '@mui/icons-material/Bolt'
import Avatar from '@mui/material/Avatar'
import AvatarGroup from '@mui/material/AvatarGroup'
import FilterListIcon from '@mui/icons-material/FilterList'
import PersonAddIcon from '@mui/icons-material/PersonAdd'
import capitalizeFirstLetter from '~/utils/capitalizeFirstLetter'

const chipStyle = {
  border: 'none',
  px: '4px',
  borderRadius: '5px',
  color: 'white',
  '& .MuiSvgIcon-root': { color: '#fff' }
}

export default function Boardbar({ board }) {
  return (
    <Box sx={{
      height: (t) => t.boardBarHeight,
      width: '100%',
      display: 'flex',
      px: 2,
      alignItems: 'center',
      justifyContent: 'space-between',
      gap: 10,
      overflowX: 'auto',
      bgcolor: (t) => t.palette.mode === 'dark' ? '#34495e' : '#1976d2'
    }}>

      <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, m: 0 }}>
        <Chip
          sx={chipStyle}
          icon={<DashboardIcon />}
          label={board.title}
          onClick={() => { }}
        />

        <Chip
          sx={chipStyle}
          icon={board.type === 'public' ? <PublicIcon /> : <PublicOffIcon />}
          label={capitalizeFirstLetter(board.type)}
          onClick={() => { }}
        />

        <Chip
          sx={chipStyle}
          icon={<AddToDriveIcon />}
          label="Add to Google Drive"
          onClick={() => { }}
        />

        <Chip
          sx={chipStyle}
          icon={<BoltIcon />}
          label="Automation"
          onClick={() => { }}
        />

        <Chip
          sx={chipStyle}
          icon={<FilterListIcon />}
          label="Filters"
          onClick={() => { }}
        />

      </Box>

      <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
        <Chip
          sx={chipStyle}
          icon={<PersonAddIcon />}
          label="Invite"
          onClick={() => { }}
        />

        <AvatarGroup max={7} total={25}
          sx={{
            '& .MuiAvatar-root': {
              width: 30,
              height: 30,
              fontSize: 13,
              bgcolor: '#999',
              color: 'white',
              borderWidth: '0',
              ml: '2px'
            }
          }}
        >
          <Tooltip title="Remy Sharp">
            <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
          </Tooltip>

          <Tooltip title="Travis Howard">
            <Avatar alt="Travis Howard" src="/static/images/avatar/2.jpg" />
          </Tooltip>

          <Tooltip title="Cindy Baker">
            <Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg" />
          </Tooltip>

          <Tooltip title="Agnes Walker">
            <Avatar alt="Agnes Walker" src="/static/images/avatar/4.jpg" />
          </Tooltip>

          <Tooltip title="Trevor Henderson">
            <Avatar alt="Trevor Henderson" src="/static/images/avatar/5.jpg" />
          </Tooltip>
        </AvatarGroup>
      </Box>
    </Box>
  )
}
