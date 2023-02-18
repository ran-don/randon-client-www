import React from 'react'

import { ReactComponent as CheckSvg } from '../../assets/images/check.svg'
import * as S from './styles'

export const Alert = ({ content }) => {
  return (
    <S.AlertContainer>
      <S.SvgContainer>
        <CheckSvg />
      </S.SvgContainer>
      <S.ContentContainer>
        {content}
      </S.ContentContainer>
    </S.AlertContainer>
  )
}
