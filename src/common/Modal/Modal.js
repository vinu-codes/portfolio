import React, { useEffect, useState, useRef, useCallback } from 'react'
import { Icon } from '../Icon'
import {
  ModalContainer,
  ModalHeader,
  ModalButton,
  ModalOverlay,
  ModalBody,
} from './Modal.styled'

const Modal = ({ callback, title, children }) => {
  const ref = useRef(null)

  const handleClose = () => {
    callback(false)
    const body = document.querySelector('body')
    body.style.overflow = 'auto'
  }

  useEffect(() => {
    const handler = (event) => {
      if (!ref || !ref.current) return
      if (event.target.contains(ref.current)) {
        handleClose()
      }
    }
    document.addEventListener('click', handler, false)
    return () => {
      document.removeEventListener('click', handler, false)
    }
  }, [])

  useEffect(() => {
    const body = document.querySelector('body')
    body.style.overflow = 'hidden'
  }, [])

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        handleClose()
      }
    }

    document.addEventListener('keydown', handleKeyDown)
    return () => {
      document.removeEventListener('keydown', handleKeyDown)
    }
  }, [])

  return (
    <React.Fragment>
      <ModalContainer ref={ref}>
        <ModalBody className="modal-body">
          <ModalHeader className="modal-header">
            {title && <h2>{title}</h2>}
            <ModalButton onClick={handleClose} className="modal-button">
              <Icon name="CLOSE" />
            </ModalButton>
          </ModalHeader>
          <div className="modal-content">{children}</div>
        </ModalBody>
      </ModalContainer>
      <ModalOverlay />
    </React.Fragment>
  )
}

export { Modal }
