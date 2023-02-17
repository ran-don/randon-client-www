import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Screen } from '../../components/Screen'
import { ButtonsContainer } from '../../components/ButtonsContainer'
import { ButtonPrimary } from '../../components/Buttons'
import { ScreenContent } from '../../components/ScreenContent'

import * as S from './styles'
import { SelectSlider } from '../../components/Selects'
import { DefaultDonation, DefaultPeopleRoomSize } from '../../consts/quick-screen'
import { Title } from '../../components/Label'
import { useLoader } from '../../hooks/useLoader'

export const NewRoomQuickScreen = () => {
  const navigate = useNavigate()

  const [loading, setLoading] = useState(false)
  const { Loader } = useLoader(loading)

  const onCompleteClick = () => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
      navigate('/rooms')
    }, 2000)
  }

  return (
    <Screen>
      <ScreenContent>
        <Title>Новая кампания</Title>
        <S.SelectsGroup>
          <SelectSlider values={DefaultPeopleRoomSize}/>
          <SelectSlider values={DefaultDonation}/>
        </S.SelectsGroup>
      </ScreenContent>
      <ButtonsContainer>
        <ButtonPrimary onClick={onCompleteClick}>Готово</ButtonPrimary>
      </ButtonsContainer>
      <Loader />
    </Screen>
  )
}
