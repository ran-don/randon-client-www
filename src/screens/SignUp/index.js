import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Screen } from '../../components/Screen'
import { ButtonsContainer } from '../../components/ButtonsContainer'
import { ButtonPrimary } from '../../components/Buttons'
import { ScreenContent } from '../../components/ScreenContent'

import * as S from './styles'
import { Field } from '../../components/Field'
import { InputCode, InputPhone } from '../../components/Inputs'
import { useLoader } from '../../hooks/useLoader'

export const SignUpScreen = () => {
  const navigate = useNavigate()
  const [loading, setLoading] = useState(false)
  const { Loader } = useLoader(loading)

  const onSignUpClick = () => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
      navigate('/room-quick')
    }, 2000)
  }

  return (
    <Screen>
      <ScreenContent>
        <S.InputsContainer>
          <Field label='Номер телефона'>
            <InputPhone />
          </Field>
          <Field label='Код из СМС'>
            <InputCode />
          </Field>
          <div>
            <input type='checkbox' />
            Я согласен с условиями <br /><a href={'google.com'}>публичной оферты</a>
          </div>
        </S.InputsContainer>
      </ScreenContent>
      <ButtonsContainer>
        <ButtonPrimary onClick={onSignUpClick}>Зарегистрироваться</ButtonPrimary>
      </ButtonsContainer>
      <Loader />
    </Screen>
  )
}
