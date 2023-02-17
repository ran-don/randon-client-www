import React from 'react'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { StartScreen } from './screens/Start'
import { NewRoomQuickScreen } from './screens/NewRoomQuick'
import { SignUpScreen } from './screens/SignUp'
import { RoomsListScreen } from './screens/RoomsList'

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
          <Route path='/rooms' element={<RoomsListScreen />} />
          <Route path='/sign-up' element={<SignUpScreen />} />
          <Route path='/room-quick' element={<NewRoomQuickScreen />} />
          <Route path='*' exact element={<StartScreen />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
