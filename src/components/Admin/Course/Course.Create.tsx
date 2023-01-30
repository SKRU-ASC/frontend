// import { TextField } from '@mui/material'
// import axios from 'axios'
// import { useState } from 'react'

// export default function CourseCraeteUpdate() {
//   const [name, setName] = useState('')

//   const onsubmit = async () => {
//     console.log(name)
//     await axios.post('http://localhost:3000/data', name)
//   }
//   return (
//     <form onSubmit={() => onsubmit}>
//       <TextField
//         placeholder='ชื่อหลักสูตร'
//         defaultValue={name}
//         onChange={(value) => setName(value.target.value)}
//       ></TextField>
//       <button onSubmit={() => onsubmit}>บันทึก</button>
//       <button>ล้าง</button>
//     </form>
//   )
// }
