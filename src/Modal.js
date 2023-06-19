import React from 'react'
import {FaTimes} from 'react-icons/fa'

export default function Modal() {
  return (
    <div className={`modal-overlay show-modal`}>
        <div className='modal-container'>
            <h3>Modal content</h3>
        </div>
      <button type="" className='close-modal-btn'>
        <FaTimes/>
      </button>
    </div>
  )
}
