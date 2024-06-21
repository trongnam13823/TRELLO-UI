import InputLabel from '@mui/material/InputLabel'
import MenuItem from '@mui/material/MenuItem'
import FormControl from '@mui/material/FormControl'
import Select from '@mui/material/Select'
import { useColorScheme } from '@mui/material'
import LightModeIcon from '@mui/icons-material/LightMode'
import DarkModeIcon from '@mui/icons-material/DarkMode'
import SettingsBrightnessIcon from '@mui/icons-material/SettingsBrightness'
import Box from '@mui/material/Box'

export default function ModeSelect() {
  const { mode, setMode } = useColorScheme()


  return (
    <FormControl
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
      }} size="small">
      <InputLabel id="mode-label">Mode</InputLabel>
      <Select
        labelId="mode-label"
        id="mode"
        label="Mode"
        value={mode}
        onChange={(e) => setMode(e.target.value)}
      >
        <MenuItem value='light'>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            <LightModeIcon fontSize='small' /> Light
          </Box>
        </MenuItem>
        <MenuItem value='dark'>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            <DarkModeIcon fontSize='small' /> Dark
          </Box>
        </MenuItem>
        <MenuItem value='system'>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            <SettingsBrightnessIcon fontSize='small' /> System
          </Box>
        </MenuItem>

      </Select>
    </FormControl>
  )
}
