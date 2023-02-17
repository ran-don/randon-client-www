import React from 'react'

import * as S from './styles'

export const ButtonsContainer = ({ children }) => {
  return (
      <S.Container>
        <S.ButtonsContainerStyled>{children}</S.ButtonsContainerStyled>
      </S.Container>
  )
}
