import React from 'react'
import { useNavigate } from 'react-router-dom'
import { ButtonPrimary } from '../../components/Buttons'
import { Screen } from '../../components/Screen'

import logo from '../../assets/images/logo.svg'
import { ButtonsContainer } from '../../components/ButtonsContainer'

import { ScreenContent } from '../../components/ScreenContent'

export const StartScreen = () => {
  const navigate = useNavigate()

  const onStartClicked = () => {
    navigate('/sign-up')
  }

  return (
    <Screen>
      <ScreenContent>
        <img src={logo} alt='RanDon'/>
      </ScreenContent>
      <ButtonsContainer>
        <ButtonPrimary onClick={onStartClicked}>Начать</ButtonPrimary>
      </ButtonsContainer>
    </Screen>
  )
}
