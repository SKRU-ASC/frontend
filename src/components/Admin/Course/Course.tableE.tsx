import { Box, Button, Grid, Modal, TextField, Typography } from '@mui/material'
import { DataGrid, GridColumns } from '@mui/x-data-grid'
import axios from 'axios'
import { useEffect, useState } from 'react'
import CourseCraeteUpdate from './Course.CreateUpdate'
interface Course {
  id: string
  name: string
  createdAt: string
  updatedAt: string
}

export default function BasicEditingGrid() {
  const [openModal, setOpenModal] = useState(false)
  const [openForm, setOpenForm] = useState(false)
  const [openCreate, setOpenCreate] = useState(false)
  const [dataRow, setDataRow] = useState('')
  const handleClose = () => setOpenModal(false)
  const [dataFetch, setDataFetch] = useState<Course[]>([])
  const [dataCU, setDataCu] = useState<Course>()

  useEffect(() => {
    fetchData()
  }, [])

  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  }
  const clickEdit = (rows: Course) => {
    setOpenForm(true)
    setDataCu(rows)
    setOpenCreate(false)
  }
  const clickCreate = () => {
    setOpenForm(true)
    setOpenCreate(true)
  }

  const fetchData = async () => {
    const jsondata = await axios.get('http://localhost:3000/data')
    setDataFetch(jsondata.data)
  }

  const columns: GridColumns = [
    { field: 'name', headerName: 'ชื่อหลักสูตร', width: 650, type: 'string' },
    {
      field: 'edit',
      headerName: 'แก้ไข',
      width: 150,
      renderCell: (rows) => {
        return (
          <div>
            <Button onClick={() => clickEdit(rows.row)}>แก้ไข</Button>
          </div>
        )
      },
    },
    {
      field: 'delete',
      headerName: 'ลบ',
      width: 150,
      renderCell: (rows) => {
        return (
          <div>
            <Button
              onClick={() => {
                setDataRow(rows.row.name)
                setOpenModal(true)
              }}
            >
              ลบ
            </Button>
          </div>
        )
      },
    },
  ]
  return (
    <div>
      {/* ป๊อปอัพตอนกดปุ่มลบ */}
      <Modal
        open={openModal}
        onClose={handleClose}
        aria-labelledby='modal-modal-title'
        aria-describedby='modal-modal-description'
      >
        <Box sx={style}>
          <Typography id='modal-modal-title' variant='h6' component='h2'>
            คุณต้องการลบข้อมูลนี้ใช่หรือไม่
          </Typography>
          <h5>{dataRow}</h5>
          <button>ตกลง</button>
          <button onClick={handleClose}>ยกเลิก</button>
        </Box>
      </Modal>

      {/* กล่องค้นหาบนหัวตาราง */}
      <section>
        <TextField placeholder='ค้นหาหลักสูตร'></TextField>
        <button>filter</button>
        <button>ค้นหา</button>
        <button onClick={clickCreate}>เพิ่มหลักสูตร</button>
      </section>
      <div>
        {/* <Grid container spacing={2}> */}
        <Grid item xs={10}>
          <div style={{ height: 300, width: '100%' }}>
            <DataGrid rows={dataFetch} columns={columns} />
          </div>
        </Grid>
        {openForm ? (
          openCreate ? (
            <div>
              <button onClick={() => setOpenForm(false)}>X</button>

              <CourseCraeteUpdate courseData={null} modeCreateUpdate={false} />
            </div>
          ) : (
            <div>
              <button onClick={() => setOpenForm(false)}>X</button>

              <CourseCraeteUpdate courseData={dataCU} modeCreateUpdate={true} />
            </div>
          )
        ) : (
          <></>
        )}
      </div>
    </div>
  )
}
