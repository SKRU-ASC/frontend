import { Box, Button, Container, ThemeProvider, Typography } from '@mui/material'
import Grid from '@mui/material/Grid'
import theme from '../configs/app_theme'

export default function Error() {
  return (
    <ThemeProvider theme={theme}>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          minHeight: '100vh',
        }}
      >
        <Container maxWidth='md'>
          <Grid container spacing={2}>
            <Grid xs={6}>
              <Typography variant='h1'>404</Typography>
              <Typography variant='h6'>The page you’re looking for doesn’t exist.</Typography>
              <Button href='/' variant='contained'>
                Back Home
              </Button>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </ThemeProvider>
  )
}
