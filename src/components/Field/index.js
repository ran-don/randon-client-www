import React from 'react'

import * as S from './styles'
import { Label } from '../Label'

export const Field = ({ label, children }) => {
  return (
    <S.FieldContainer>
      <S.LabelContainer>
        <Label>{label}</Label>
      </S.LabelContainer>
      {children}
    </S.FieldContainer>
  )
}
