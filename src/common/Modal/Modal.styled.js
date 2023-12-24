import styled from 'styled-components'
import { colors } from '@common/Theme'

const ModalContainer = styled.div`
  position: fixed;
  z-index: 9999;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
  max-width: 800px;
  height: 100%;
  max-height: 600px;

  .modal-button {
    padding: 0;
    border: none;
    width: 32px;
    height: 32px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-left: auto;
    outline: none;
    cursor: pointer;
  }
  .modal-content {
    margin-top: 32px;
    font-size: 18px;
  }
`

const ModalHeader = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  h2 {
    line-height: 32px;
    font-size: 24px;
    margin: 0;
    padding-bottom: 8px;
    color: ${colors.navyBlue};
  }
`

const ModalButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`

const ModalOverlay = styled.div`
  position: fixed;
  z-index: 999;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
`

const ModalBody = styled.div`
  &.modal-body {
    position: absolute;
    max-width: 600px;
    width: 100%;
    background: white;
    padding: 24px;
    border-radius: 8px;
    left: 50%;
    transform: translate(-50%, -50%);
    top: 50%;
  }

  p {
    font-size: 16px;
    font-weight: 300;
    strong {
      color: ${colors.lightPurple};
    }
  }
`
export { ModalContainer, ModalHeader, ModalButton, ModalOverlay, ModalBody }
