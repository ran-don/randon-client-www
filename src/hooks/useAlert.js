import React, { useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { FullScreen } from '../components/FullScreen'
import { Alert } from '../components/Alert'
import { ButtonsContainer } from '../components/ButtonsContainer'
import { ButtonSecondary } from '../components/Buttons'
import { ScreenContent } from '../components/ScreenContent'

export const useAlert = () => {
  const navigate = useNavigate()
  const [show, setShow] = useState(false)
  const [content, setContent] = useState('')
  const linkRef = useRef('#')

  const showAlert = (message, link = '#') => {
    linkRef.current = link
    setContent(message)
    setShow(true)
  }

  const hideAlert = () => {
    setContent('')
    setShow(false)
    if (linkRef.current !== '#') {
      navigate(linkRef.current)
    }
    linkRef.current = '#'
  }

  return (
    {
      AlertComponent: () => show
        ? <FullScreen>
          <ScreenContent>
            <Alert content={content} />
          </ScreenContent>
          <ButtonsContainer delay={3}>
            <ButtonSecondary onClick={hideAlert}>Продолжить</ButtonSecondary>
          </ButtonsContainer>
        </FullScreen>
        : null,
      alert: showAlert,
    }
  )
}
