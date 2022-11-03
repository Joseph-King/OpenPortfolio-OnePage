import React from 'react'

function Header({title, sections}) {
    let final_sections = [];
    for(let section of sections){
        final_sections.push(<h3 className='link'>{section}</h3>);
    }

  return (
    <div className='App-header'>
        <h1 className='title'>{title}</h1>
        <div className='navbar'>
            <h3 className='link'>About</h3>
            {final_sections}
            <h3 className='link'>Contact</h3>
        </div>
    </div>
  )
}

export default Header