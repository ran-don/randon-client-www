import React from 'react'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { StartScreen } from './screens/Start'
import { NewRoomQuickScreen } from './screens/NewRoomQuick'
import { SignUpScreen } from './screens/SignUp'
import { RoomsListScreen } from './screens/RoomsList'
import { JoinPrivateRoomScreen } from './screens/JoinPrivateRoom'
import { NewRoomScreen } from './screens/NewRoom'
import { MyRoomsScreen } from './screens/MyRooms'

// const testSlider = [
//   '100 ₽',
//   '200 ₽',
//   '200 ₽',
//   '300 ₽',
//   '400 ₽',
//   '500 ₽',
// ]
//
// const peoples = [
//   '3 человека',
//   '5 человек',
//   '7 человек',
//   '10 человек',
// ]

function App () {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/new-room' element={<NewRoomScreen />} />
          <Route path='/join-private-room' element={<JoinPrivateRoomScreen />} />
          <Route path='/rooms' element={<RoomsListScreen />} />
          <Route path='/my-rooms' element={<MyRoomsScreen />} />
          <Route path='/sign-up' element={<SignUpScreen />} />
          <Route path='/room-quick' element={<NewRoomQuickScreen />} />
          <Route path='*' exact element={<StartScreen />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
