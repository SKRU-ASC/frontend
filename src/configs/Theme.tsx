import createTheme from '@mui/material/styles/createTheme'

declare module '@mui/material/styles' {
  interface BreakpointOverrides {
    xs: false; // removes the `xs` breakpoint
    sm: false;
    md: false;
    lg: false;
    xl: false;
    mobile: true; // adds the `mobile` breakpoint
    tablet: true;
    laptop: true;
    desktop: true;
  }
}


export const theme = createTheme({
  typography: {
    fontFamily: [
      'LINE Seed Sans TH',
      'sans-serif',
    ].join(','),
  },
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
      mobile: 300,
      tablet: 640,
      laptop: 1024,
      desktop: 1200,
    },
  },
})

