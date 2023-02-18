import React from 'react'

import * as S from './styles'

export const FullScreen = ({ children }) => {
  return (
    <S.FullScreenContainer>
      {children}
    </S.FullScreenContainer>
  )
}
