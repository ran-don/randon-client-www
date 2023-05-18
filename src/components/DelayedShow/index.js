import React from 'react'

import * as S from './styles'

export const DelayedShow = ({ delay, children }) => {
  return (
    <S.DelayedContainer delay={delay}>
      {children}
    </S.DelayedContainer>
  )
}
