import React from 'react'
import search from './search.gif'
import menu from './menu.png'
import './Nav1.css'

function Nav1() {
  return (
        <div className='gen-div'>
            <h3>Friends</h3>

            <div className='main'>
                <div className="search">
                    <button className='but'><img src={search} alt="" width={20}/>
                    </button>
                    <input className='input' type={search} placeholder = "Search..."/>    
                </div>

            </div>
                <ul className='first-nav'>
                    <li>Friend requests</li> 
                    <li>Find friends</li>
                    <img src={menu} alt="menu" width={20} className="menu" />
                </ul>
        
            </div>


  )
}

export default Nav1