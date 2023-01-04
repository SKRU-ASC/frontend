import createTheme from '@mui/material/styles/createTheme'

const theme = createTheme({
  palette: {
    primary: {
      main: '#ffc107',
      contrastText: '#ffffff',
    },
    secondary: {
      main: '#fafafa',
    },
  },
  breakpoints: {
    values: {
      xs: 300, // phone
      sm: 600, // tablets
      md: 900, // small laptop
      lg: 1200, // desktop
      xl: 1536, // large screens
    },
  },
})

export default theme
