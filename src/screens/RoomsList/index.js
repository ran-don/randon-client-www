import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Screen } from '../../components/Screen'
import { ButtonsContainer } from '../../components/ButtonsContainer'
import { ButtonPrimary, ButtonSecondary } from '../../components/Buttons'
import { ScreenContent } from '../../components/ScreenContent'
import { Title } from '../../components/Label'
import { RoomCard } from '../../components/RoomCard'
import { RoomsList } from '../../consts/rooms'
import { ScrollableList } from '../../components/ScrollableList'

export const RoomsListScreen = () => {
  const navigate = useNavigate()

  const onBackClicked = () => {
    navigate('/')
  }

  return (
    <Screen>
      <ScreenContent>
        <Title>Доступные компании</Title>
        <ScrollableList>
          {RoomsList.map(room => (<RoomCard key={room.id} roomInfo={room} />))}
        </ScrollableList>
      </ScreenContent>
      <ButtonsContainer>
        <ButtonSecondary onClick={onBackClicked}>Назад</ButtonSecondary>
        <ButtonPrimary>Далее</ButtonPrimary>
      </ButtonsContainer>
    </Screen>
  )
}
