import React from 'react'
import Button from './Button'

const Header = ({title}) => {
  const onClick = () =>{
    console.log("clicked")
  }
  return (
    <header className='header'>
        <h1>Event-Tracker</h1>
        <Button color='green' text = 'Add' onClick={onClick}/>
    </header>
  )
}

Header.defaultProps={ 
  title:'Event-Tracker', 

}

export default Header