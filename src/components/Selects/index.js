import React, { useState } from 'react'

import * as S from './styles'

export const SelectSlider = ({ values }) => {
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextOption = () => {
    if ((currentIndex + 1) < values.length) {
      setCurrentIndex(currentIndex + 1)
    }
  }

  const prevOption = () => {
    if ((currentIndex - 1) >= 0) {
      setCurrentIndex(currentIndex - 1)
    }
  }

  return (
    <S.SelectContainer>
      <S.ArrowContainer onClick={prevOption}>
        <S.ArrowLeft />
      </S.ArrowContainer>
      <S.SelectOption>{values[currentIndex].label}</S.SelectOption>
      <S.ArrowContainer onClick={nextOption}>
        <S.ArrowRight />
      </S.ArrowContainer>
    </S.SelectContainer>
  )
}
