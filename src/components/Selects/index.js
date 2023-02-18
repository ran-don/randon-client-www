import React, { useState } from 'react'

import * as S from './styles'

export const SelectSlider = ({ values }) => {
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextAvailable = (currentIndex + 1) < values.length
  const prevAvailable = (currentIndex - 1) >= 0

  const nextOption = () => {
    if (nextAvailable) {
      setCurrentIndex(currentIndex + 1)
    }
  }

  const prevOption = () => {
    if (prevAvailable) {
      setCurrentIndex(currentIndex - 1)
    }
  }

  return (
    <S.SelectContainer>
      <S.ArrowContainer onClick={prevOption}>
        <S.ArrowLeft hidden={!prevAvailable}/>
      </S.ArrowContainer>
      <div style={{ overflow: 'hidden' }}>
        {values.map((v, index) => (
          <S.SelectOption key={v.value} index={index} selectIndex={index - currentIndex}>{v.label}</S.SelectOption>
        ))}
      </div>
      <S.ArrowContainer onClick={nextOption}>
        <S.ArrowRight hidden={!nextAvailable}/>
      </S.ArrowContainer>
    </S.SelectContainer>
  )
}
