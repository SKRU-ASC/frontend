import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Chip,
  Stack,
  Box,
  Grid,
} from '@mui/material'
import Typography from '@mui/material/Typography'
import { ActivityCardProps } from '../../types/activityCard'

export default function ActivityCard(props: ActivityCardProps) {
  return (
    <Card sx={{ maxWidth: 345, flexDirection: 'column', height: '100%', display: 'flex' }}>
      <CardMedia component='img' alt='Activity Image' height='140' image={props.image} />
      <CardContent>
        <Box>
          <Grid container alignItems='center'>
            <Grid item xs>
              <Typography gutterBottom variant='body1' fontWeight={600} component='div'>
                {props.name}
              </Typography>
            </Grid>
            <Grid item>
              <Typography gutterBottom variant='caption' component='div'>
                ฿{props.price}/คน
              </Typography>
            </Grid>
          </Grid>
          <Typography color='text.secondary' variant='body2'>
            {props.description}
          </Typography>
          <br />
          <Stack direction='row' spacing={1}>
            <Chip label='ประถม' variant='outlined' color='info' size='small' />
            <Chip label='มัธยม' variant='outlined' color='warning' size='small' />
            <Chip label='บุคคลทั่วไป' variant='outlined' color='success' size='small' />
          </Stack>
        </Box>
      </CardContent>
      <CardActions>
        <Button size='medium' variant='outlined' fullWidth>
          จองกิจกรรม
        </Button>
      </CardActions>
    </Card>
  )
}
