import React from 'react'

import * as S from './styles'

export const ButtonPrimary = ({ onClick, children }) => {
  return (
    <S.ButtonContainer onClick={onClick}>{children}</S.ButtonContainer>
  )
}

export const ButtonSecondary = ({ onClick, children }) => {
  return (
    <S.ButtonSecondaryContainer onClick={onClick}>{children}</S.ButtonSecondaryContainer>
  )
}
