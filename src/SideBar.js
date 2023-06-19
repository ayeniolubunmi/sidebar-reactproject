import React from 'react'
import {FaTimes} from 'react-icons/fa'
import {logo} from './logo.svg'
import {links,social} from './data'
import { useGlobalContext } from './Context'

export default function SideBar() {
    const {isSideBarOpen, closeSideBar}= useGlobalContext()
  return (
    <aside className={`${isSideBarOpen ?"sidebar show-sidebar":"sidebar"}`}>
        <div className='sidebar-header'>
            <img src={logo} alt="coding addict" className='logo'/>
            <button type="" className='close-btn'onClick={closeSideBar} >
                <FaTimes/>
            </button>
        </div>
        <ul className='links'>
            {links.map((link)=>{
                const{id,url,text,icon} = link;
                return<li key={id}>
                    <a href={url}>{icon}{text}</a>
                </li>
            })}      
        </ul>
        <ul className='sociial-icon'>
            {social.map((socialIcon)=>{
                const{id,url,icon} = socialIcon;
                return<li key={id}>
                    <a href={url}>{icon}</a>
                </li>
            })}
            
        </ul>     
    </aside>
  )
}
