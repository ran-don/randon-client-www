import React, { useCallback } from 'react'
import { useNavigate } from 'react-router-dom'

import * as S from './styles'

import PeopleImage from '../../assets/images/people.svg'

import MoneyImage from '../../assets/images/money.svg'

export const RoomCard = ({ roomInfo }) => {
  const navigate = useNavigate()

  const peopleInfo = `${roomInfo.peoplesCount}/${roomInfo.capacity}`

  const depositInfo = `${roomInfo.deposit} Р`

  const onJoinButtonClick = () => {
    // navigate(`/rooms/${roomInfo.id}`)
    navigate('#')
  }

  const getButton = useCallback(() => {
    if (roomInfo.isMember) {
      return (<S.JoinButton>Участник</S.JoinButton>)
    }

    return (<S.JoinButton onClick={onJoinButtonClick}>Участвовать</S.JoinButton>)
  }, [roomInfo])

  return (
    <S.RoomCardContainer>
      <S.InfoContainer>
        <S.ImageContainer>
          <img src={PeopleImage} alt='people'/>
        </S.ImageContainer>
        {peopleInfo}
      </S.InfoContainer>
      <S.InfoContainer>
        <S.ImageContainer>
          <img src={MoneyImage} alt='money'/>
        </S.ImageContainer>
        {depositInfo}
      </S.InfoContainer>
      {getButton()}
    </S.RoomCardContainer>
  )
}
