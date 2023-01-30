import { Card, Grid } from '@mui/material'
import BasicEditingGrid from '../../components/Admin/Course/Course.tableE'

export default function Course() {
  return (
    <div>
      <section style={{ margin: '5%' }}>
        <h1>รายละเอียดหลักสูตร</h1>
      </section>

      <Grid container spacing={2}>
        <Grid item xs={4}>
          <></>
        </Grid>
        <Grid item xs={8} style={{ margin: '5%' }}>
          <BasicEditingGrid />
        </Grid>
      </Grid>
      <Card></Card>
    </div>
  )
}
