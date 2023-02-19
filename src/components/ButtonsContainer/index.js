import React from 'react'

import * as S from './styles'

export const ButtonsContainer = ({ delay, children }) => {
  return (
      <S.Container delay={delay}>
        <S.ButtonsContainerStyled>{children}</S.ButtonsContainerStyled>
      </S.Container>
  )
}
