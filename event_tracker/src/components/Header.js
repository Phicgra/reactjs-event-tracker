import React from 'react'
import Button from './Button'

const Header = ({title, onAdd, showAdd}) => {
  // const onClick = () =>{
  //   console.log("clicked")
  // }
  return (
    <header className='header'>
        <h1>Event-Tracker</h1>
        <Button color={showAdd ? 'Black' : 'Blue'} text = {showAdd ? 'Close' : 'Add'} onClick={onAdd} />
    </header>
  )
}

Header.defaultProps={ 
  title:'Event-Tracker', 

}

export default Header