import styled from 'styled-components/macro'

export const RoomCardContainer = styled.div`
  margin: 6px;

  user-select: none;
  
  width: 135px;
  height: 140px;

  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 24px;
  display: flex;
  flex-direction: column;
  letter-spacing: 0.05em;
  padding: 20px 17px;

  background: linear-gradient(0deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.1)), #0E0E0E;
  border-radius: 30px;  
`

export const InfoContainer = styled.div`
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 24px;
  display: flex;
  align-items: center;
  letter-spacing: 0.05em;

  margin-top: 12px;
`

export const ImageContainer = styled.div`
  margin-right: 12px;
`

export const JoinButton = styled.div`
  position: relative;
  cursor: pointer;
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 20px;

  /* identical to box height */
  display: flex;
  align-items: center;
  justify-content: center;
  letter-spacing: 0.01em;
  
  margin-top: 40px;

  &:before {
    content: '';
    position: absolute;
    width: 140px;
    height: 0px;
    margin-top: -55px;

    border: 1px solid rgba(255, 255, 255, 0.1);
  }
`
