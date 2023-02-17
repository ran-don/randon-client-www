import styled from 'styled-components/macro'

export const ButtonContainer = styled.div`
  padding: 18px 54px;
  cursor: pointer;
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 600;
  font-size: 20px;
  line-height: 24px;
  display: flex;
  align-items: center;
  -webkit-user-select: none;
  -ms-user-select: none;
  user-select: none;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #000000;
  width: 100%;
  margin: 0 5px;

  background: #BFFF07;
  border-radius: 30px;
`

export const ButtonSecondaryContainer = styled(ButtonContainer)`
  color: white;

  border: 1px solid #FFFFFF;
  border-radius: 30px;
  background: black;
`
