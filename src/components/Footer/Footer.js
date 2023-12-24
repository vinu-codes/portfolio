import React, { useState } from 'react'
import { Link } from '@components/Route'
import resume from './resume.pdf'
import { DownloadLink, FooterContainer } from './Footer.styled'
import { Modal } from '@common/Modal'
import { Button } from '@common/Button'
import { Icon, IconContainer } from '@common/Icon'
import { Spacer } from '@common/Spacer'

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
        <Modal title="Select an option" callback={handleModal}>
          <p>
            To download my resume, click{' '}
            <a href={resume} download="resume">
              here
            </a>{' '}
            <Spacer />
            The resume available will not include private information, please
            reach out to me on LinkedIn to get the full copy.
          </p>
          <div className="button-wrapper">
            <Button>
              <a className="link" href={resume} download="resume">
                <span className="info">Download</span>
                <IconContainer ml={5}>
                  <Icon name="DOWNLOAD" size={20} stroke="white" />
                </IconContainer>
              </a>
            </Button>
            <Button>
              <a className="link" href="https://www.linkedin.com/in/vinujk/">
                <span className="info">LinkedIn</span>
                <IconContainer ml={5}>
                  <Icon
                    name="LINKED_IN"
                    size={20}
                    viewBox="0 0 24 24"
                    stroke="white"
                  />
                </IconContainer>
              </a>
            </Button>
          </div>
        </Modal>
      )}
    </FooterContainer>
  )
}

export { Footer }
