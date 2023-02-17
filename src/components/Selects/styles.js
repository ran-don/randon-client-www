import styled from 'styled-components/macro'

export const SelectContainer = styled.div`
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 600;
  font-size: 20px;
  line-height: 24px;
  background: linear-gradient(0deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.1)), #0E0E0E;
  border-radius: 30px;
  border-color: transparent;
  color: rgba(255, 255, 255);
  width: 350px;
  height: 60px;
  display: flex;
  justify-content: space-between;
`

export const ArrowContainer = styled.div`
  cursor: pointer;
  padding: 17px 30px;
`

export const ArrowRight = styled.div`
  border: solid white;
  border-width: 0 3px 3px 0;
  display: inline-block;
  transform: rotate(-45deg);
  width: 10px;
  height: 10px;
`

export const ArrowLeft = styled(ArrowRight)`
  transform: rotate(135deg);
`

export const SelectOption = styled.div`
  padding: 18px;
  -webkit-user-select: none;
  -ms-user-select: none;
  user-select: none;
`
