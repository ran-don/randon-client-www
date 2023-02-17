import React from 'react'

import * as S from './styles'

export const Label = ({ children }) => {
  return (
    <S.LabelStyled>{children}</S.LabelStyled>
  )
}

export const Title = ({ children }) => {
  return (
    <S.TitleStyled>{children}</S.TitleStyled>
  )
}
