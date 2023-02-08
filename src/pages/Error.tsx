import { useNavigate } from 'react-router-dom';
import { Box, Button, Container, Typography } from '@mui/material'
import Grid from '@mui/material/Grid'

export default function Error() {
  const navigate = useNavigate();
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100%',
      }}
    >
      <Container maxWidth='tablet'>
        <Grid container spacing={2}>
          <Grid>
            <Typography variant='h1'>404</Typography>
            <Typography variant='h6'>The page you’re looking for doesn’t exist.</Typography>
            <Button style={{ width: 150 }} onClick={() => navigate(-1)} variant='contained'>
              Back
            </Button>
          </Grid>
        </Grid>
      </Container>
    </Box>
  )
}
