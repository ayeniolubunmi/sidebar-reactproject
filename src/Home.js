import React from 'react'
import {FaBars} from 'react-icons/fa'
import { useGlobalContext } from './Context'

export default function Home() {
    const {openModal, openSideBar} = useGlobalContext()
  return (
    <main>
      <button type="" className='sidebar-toggle' onClick={openSideBar} >
        <FaBars/>
      </button>
      <button type="" className='btn' onClick={openModal}>show modal</button>
    </main>
  )
}
