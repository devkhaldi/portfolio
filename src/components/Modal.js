import React from 'react'
import ReactDom from 'react-dom'
import './Modal.css'

const Modal = ({ title, children }) => {
  return ReactDom.createPortal(
    <div className='modal fade' id='modal-default'>
      <div className='modal-dialog modal-lg'>
        <div className='modal-content'>
          <div className='modal-header'>
            <h4 className='modal-title'>{title}</h4>
            <button type='button' className='close' data-dismiss='modal' aria-label='Close'>
              <span aria-hidden='true'>&times;</span>
            </button>
          </div>
          <div className='modal-body'>{children}</div>
        </div>
      </div>
    </div>,
    document.getElementById('modal')
  )
}

export default Modal
