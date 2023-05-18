import React, { useState } from 'react'

import * as S from './styles'

export const CheckBox = ({ initialChecked = false, children }) => {
  const [checked, setChecked] = useState(initialChecked)

  const onCheck = () => {
    setChecked(checkState => !checkState)
  }

  return (
    <S.CheckBoxContainer>
      <S.CheckBoxStyled checked={checked} onClick={onCheck}>
        <S.CheckIcon />
      </S.CheckBoxStyled>
      <S.CheckBoxContent>
        {children}
      </S.CheckBoxContent>
    </S.CheckBoxContainer>
  )
}
