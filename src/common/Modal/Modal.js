import React, { useEffect, useState, useRef } from 'react'
import { Icon } from '../Icon'
import {
  ModalContainer,
  ModalHeader,
  ModalButton,
  ModalOverlay,
  ModalBody,
} from './Modal.styled'

const Modal = ({ active = true, title, children }) => {
  const [isActive, setIsActive] = useState(false)
  const ref = useRef(null)

  const handleClose = () => {
    setIsActive(false)
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
    if (!!active) {
      setIsActive(active)
    }
  }, [active])

  if (!isActive) return null
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
