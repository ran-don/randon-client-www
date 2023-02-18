import React, { useEffect, useRef } from 'react'
import Inputmask from 'inputmask'

import * as S from './styles'

export const Input = ({ ...attr }) => {
  return <S.InputStyled
    type='text'
    { ...attr }
  />
}

export const InputNumber = ({ ...attr }) => {
  return <S.InputStyled
    type='number'
    pattern='\d*'
    { ...attr }
    />
}

export const InputPhone = () => {
  const inputRef = useRef()

  useEffect(() => {
    Inputmask({ mask: '+7 (999) 999 99 99' }).mask(inputRef.current)
  }, [])

  return (
    <S.InputStyledBigger
      ref={inputRef}
      type='tel'
      placeholder='+7 (000) 000 00 00'
      pattern='+7 ([0-9]{3}) [0-9]{3} [0-9]{2} [0-9]{2}'
      inputMode='text'/>
  )
}

export const InputCode = () => {
  const inputRef = useRef()

  useEffect(() => {
    Inputmask({ mask: '9 9 9 9', placeholder: '•' }).mask(inputRef.current)
  }, [])

  return (
    <S.InputStyledDots
      ref={inputRef}
      placeholder={'• • • •'}
    />
  )
}
