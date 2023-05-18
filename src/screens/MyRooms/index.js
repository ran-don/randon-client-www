import React from 'react'
import { ScreenContent } from '../../components/ScreenContent'
import { Title } from '../../components/Label'
import { ScrollableList } from '../../components/ScrollableList'
import { MyRooms } from '../../consts/rooms'
import { RoomCard } from '../../components/RoomCard'
import { Screen } from '../../components/Screen'

export const MyRoomsScreen = () => {
  return (
    <Screen>
      <ScreenContent>
        <Title>Мои кампании</Title>
        <ScrollableList>
          {MyRooms.map(room => (<RoomCard key={room.id} roomInfo={room} />))}
        </ScrollableList>
      </ScreenContent>
    </Screen>
  )
}
