import { TextField } from '@mui/material'
import axios from 'axios'
import { useState } from 'react'

interface CourseUpdate {
  courseData: courseData | undefined
  modeCreateUpdate: boolean
}
interface courseData {
  id: string
  name: string
}
export default function CourseCraeteUpdate({ courseData, modeCreateUpdate }: CourseUpdate) {
  const [nameEdit, setNameEdit] = useState('')

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
    <form>
      <TextField
        style={{ width: 600 }}
        placeholder='ชื่อหลักสูตร'
        value={nameEdit || courseData?.name || ''}
        onChange={(value) => {
          setNameEdit(value.target.value)
        }}
      ></TextField>
      <button onSubmit={() => onSubmit()}>บันทึก</button>
      <button>ล้าง</button>
    </form>
  )
}
