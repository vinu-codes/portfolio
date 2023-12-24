import React, { useState } from 'react'
import { Link } from '@components/Route'
import resume from './resume.pdf'
import { DownloadLink, FooterContainer } from './Footer.styled'
import { Modal } from '@common/Modal'
import { Button } from '@common/Button'

const Footer = () => {
  const [showModal, setShowModal] = useState(false)
  const handleModal = (arg) => {
    setShowModal(arg)
  }

  return (
    <FooterContainer className="footer">
      <div className="row">
        <ul>
          <li>
            <Link external={true} to="https://github.com/vinu-codes">
              Github
            </Link>
          </li>
          <li>
            <Link external={true} to="https://www.linkedin.com/in/vinujk/">
              LinkedIn
            </Link>
          </li>
          <li className="resume-link" onClick={() => handleModal(true)}>
            <span className="info">Resume</span>
          </li>
        </ul>
      </div>
      <div className="copy">
        <span>Copyright &#169;2024</span>
      </div>
      {showModal && (
        <Modal title="Download My Resume" callback={handleModal}>
          <p>
            To view my resume, please click the below
            <strong> download </strong> button.
          </p>
          <Button>
            <a className="link" href={resume} download="resume">
              <span className="info">Resume</span>
            </a>
          </Button>
        </Modal>
      )}
    </FooterContainer>
  )
}

export { Footer }
