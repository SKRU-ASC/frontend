import { TextField } from '@mui/material'
import axios from 'axios'
import { useEffect, useState } from 'react'

interface CourseUpdate {
  courseData: courseData | undefined | null
  modeCreateUpdate: boolean
}
interface courseData {
  id: string
  name: string
}
export default function CourseCraeteUpdate({ courseData, modeCreateUpdate }: CourseUpdate) {
  const [nameEdit, setNameEdit] = useState('')

  useEffect(() => {
    courseData != null ? setNameEdit(courseData?.name) : setNameEdit('')
  }, [courseData])

  const fetchUpdate = async () => {
    await axios.put('API' + courseData?.id, nameEdit).then(() => {
      console.log('update OK')
    })
  }

  const fetchCreate = async () => {
    await axios.post('API', nameEdit).then(() => {
      console.log('Create OK')
    })
  }

  const onSubmit = () => {
    if (modeCreateUpdate) {
      fetchUpdate()
    } else {
      fetchCreate()
    }
  }

  return (
    <div>
      {' '}
      <TextField
        style={{ width: '25rem' }}
        placeholder='ชื่อหลักสูตร'
        value={nameEdit || ''}
        onChange={(value) => {
          setNameEdit(value.target.value)
        }}
      ></TextField>
      <button className='buttonAction' onSubmit={onSubmit}>
        บันทึก
      </button>
      <button
        className='buttonAction'
        onClick={() => {
          setNameEdit('')
        }}
      >
        ล้าง
      </button>
    </div>
  )
}
