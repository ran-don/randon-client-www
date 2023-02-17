import React from 'react'

import * as S from './styles'

export const ScrollableList = ({ children }) => {
  return (
    <S.ScrollableContainer>
      {children}
    </S.ScrollableContainer>
  )
}
