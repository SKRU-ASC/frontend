import { Box, Button, Modal, TextField, Typography } from '@mui/material'
import { DataGrid, GridColumns } from '@mui/x-data-grid'
import axios from 'axios'
import { useEffect, useState } from 'react'
import CourseCraeteUpdate from './Course.CreateUpdate'
import './Course.css'
// import { Course } from '../../../pages/Admin'
interface Course {
  id: string
  name: string
  createdAt: string
  updatedAt: string
}

export default function BasicEditingGrid() {
  //  แจ้งเตือน
  const [openModal, setOpenModal] = useState(false)
  const handleClose = () => setOpenModal(false)
  //  Form เพิ่มและแก้ไข
  const [openForm, setOpenForm] = useState(false)
  const [openCreate, setOpenCreate] = useState(false)

  //  Data And CallApi
  const [dataFetch, setDataFetch] = useState<Course[]>([])
  const [dataCU, setDataCu] = useState<Course>()
  const [valueSearch, setValueSearch] = useState('')
  const [dataRow, setDataRow] = useState('')

  useEffect(() => {
    fetchData()
    //  ให้มีการใช้ UseEffect ทุกครั้งที่กดปุ่มค้นหา
  }, [valueSearch])

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
    const body = {
      search: valueSearch,
    }
    console.log(body)

    const jsondata = await axios.get('http://localhost:3000/data')
    setDataFetch(jsondata.data)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValueSearch(e.target.value)
  }

  const columns: GridColumns = [
    { field: 'name', headerName: 'ชื่อหลักสูตร', width: 1320, type: 'string' },
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
        <Box className='modalSureDelete'>
          <Typography id='modal-modal-title' variant='h6' component='h2'>
            คุณต้องการลบข้อมูลนี้ใช่หรือไม่
          </Typography>
          <h5>{dataRow}</h5>
          <button className='buttonAction'>ตกลง</button>
          <button className='buttonAction' onClick={handleClose}>
            ยกเลิก
          </button>
        </Box>
      </Modal>

      {/* กล่องค้นหาบนหัวตาราง */}
      <div className='w-full'>
        <section className='boxHeaderTable'>
          <TextField placeholder='ค้นหาหลักสูตร' onChange={handleChange}></TextField>
          <button className='buttonAction'>
            <span className='fontAction'>filter</span>
          </button>
          {/* <button onClick={() => setClickSearch(!clickSearch)}>ค้นหา</button> */}
          <button className='buttonAction' onClick={clickCreate}>
            <span className='fontAction'>เพิ่มหลักสูตร</span>
          </button>
        </section>
      </div>
      {/* Table */}
      <div>
        <div className='boxTable'>
          <DataGrid rows={dataFetch} columns={columns} />
        </div>

        {/* form Add AND Edit */}
        <div>
          {openForm ? (
            openCreate ? (
              <div className='boxCreateUpdate'>
                <button className='buttonExit' onClick={() => setOpenForm(false)}>
                  X
                </button>
                <CourseCraeteUpdate courseData={null} modeCreateUpdate={false} />
              </div>
            ) : (
              <div className='boxCreateUpdate'>
                <button className='buttonExit' onClick={() => setOpenForm(false)}>
                  X
                </button>
                <CourseCraeteUpdate courseData={dataCU} modeCreateUpdate={true} />
              </div>
            )
          ) : (
            <></>
          )}
        </div>
      </div>
    </div>
  )
}
