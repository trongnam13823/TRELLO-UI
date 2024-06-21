import { experimental_extendTheme as extendTheme } from '@mui/material/styles'

const customScrollbar = {
  '& *::-webkit-scrollbar': {
    width: '5px',
    height: '5px'
  },
  '& *::-webkit-scrollbar-track': {
    backgroundColor: 'rgba(0, 0, 0, 0)'
  },
  '& *::-webkit-scrollbar-thumb': {
    borderRadius: '4px',
    backgroundColor: '#aaa'
  },
  '& *::-webkit-scrollbar-thumb:hover': {
    backgroundColor: '#999'
  }
}

export default extendTheme({
  appBarHeight: '58px',
  boardBarHeight: '58px',
  columnHeaderHeight: '50px',
  columnFooterHeight: '50px',

  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          ...customScrollbar
        }
      }
    }
  },

  colorSchemes: {
    light: {
      palette: {}
    },
    dark: {
      palette: {}
    }
  }
})
