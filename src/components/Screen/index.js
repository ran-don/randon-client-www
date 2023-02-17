import React from 'react'

import * as S from './styles'
import { Menu } from '../Menu'

export const Screen = ({ children }) => {
  return (
    <S.ScreenContainer>
      <Menu />
      {children}
    </S.ScreenContainer>
  )
}
