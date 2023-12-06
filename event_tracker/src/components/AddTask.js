import React, { useState } from 'react'

const AddTask = ( { onAdd  } ) => {

const [text, setText] = useState('')
const [day, setDay] = useState('')
const [reminder, setReminder] = useState(false)

const onSubmit =(e) => {
    e.preventDefault()

    if (!text) {
          
        alert ('Please Add task')
        return
    }

    onAdd({text, day, reminder})
     
    setDay('')
    setReminder(false)
    setText('')

}

  return (
    <form className='add-form' onSubmit={onSubmit}>
       <div className='form-control'>
        <label>List of Task</label>
        <input type='text' placeholder='Add task here' value={text} onChange={(e) =>setText(e.target.value)}/ >
        {/* <AddTask/> */}
       </div>


       <div className='form-control'>
        <label>Date and Time</label>
        <input type='text' placeholder='Add Date and Time' value={day} onChange={(e) =>setDay(e.target.value)}/>
        {/* <AddTask/> */}
       </div>


       <div className='form-control form-control-check' style={{textAlign:"center"}}>
        <label>Add Reminder</label>
        <input type='checkbox' checked={reminder} style={{color: 'red'}} value={reminder} onChange={(e) =>setReminder(e.currentTarget.checked)}/>

        {/* <AddTask/> */}
       </div>

       <input type='submit' value='Save Task' className='btn btn-block'/>
    </form >
  )
}

export default AddTask