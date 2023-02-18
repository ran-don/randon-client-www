import React from 'react'
import { Screen } from '../../components/Screen'
import { ButtonsContainer } from '../../components/ButtonsContainer'
import { ButtonPrimary, ButtonSecondary } from '../../components/Buttons'
import { ScreenContent } from '../../components/ScreenContent'
import { Title } from '../../components/Label'
import { Field } from '../../components/Field'
import { InputNumber } from '../../components/Inputs'
import { SelectSlider } from '../../components/Selects'
import { RoomType } from '../../consts/quick-screen'
import { InputGroup } from '../../components/InputGroup'
import { useAlert } from '../../hooks/useAlert'

export const NewRoomScreen = () => {
  const { AlertComponent, alert } = useAlert()

  const test = () => {
    alert('Оплата прошла успешно!', '/')
  }

  return (
    <Screen>
      <ScreenContent>
        <Title>Ваша кампания</Title>
        <InputGroup>
          <Field label='Количество участников'>
            <InputNumber placeholder='Введите количество участников' />
          </Field>
          <Field label='Сумма'>
            <InputNumber placeholder='Введите сумму'/>
          </Field>
          <SelectSlider values={RoomType} />
        </InputGroup>
      </ScreenContent>
      <ButtonsContainer>
        <ButtonSecondary>Назад</ButtonSecondary>
        <ButtonPrimary onClick={test}>Далее</ButtonPrimary>
      </ButtonsContainer>
      <AlertComponent />
    </Screen>
  )
}
