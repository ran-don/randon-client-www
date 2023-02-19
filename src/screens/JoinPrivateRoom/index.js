import React from 'react'
import { Screen } from '../../components/Screen'
import { ButtonsContainer } from '../../components/ButtonsContainer'
import { ButtonPrimary } from '../../components/Buttons'
import { ScreenContent } from '../../components/ScreenContent'
import { Field } from '../../components/Field'
import { InputNumber } from '../../components/Inputs'

export const JoinPrivateRoomScreen = () => {
  return (
    <Screen>
      <ScreenContent>
        <Field label='Код комнаты'>
          <InputNumber placeholder='Введите код комнаты'/>
        </Field>
      </ScreenContent>
      <ButtonsContainer>
        <ButtonPrimary>Подключиться</ButtonPrimary>
      </ButtonsContainer>
    </Screen>
  )
}
