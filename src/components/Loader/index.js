import React from 'react'

import * as S from './styles'
import { Spinner } from '../Spinner'

export const LoaderScreen = () => {
  return (
    <S.LoaderScreenContainer>
      <Spinner />
    </S.LoaderScreenContainer>
  )
}
