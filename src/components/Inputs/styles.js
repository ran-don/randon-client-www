import styled from 'styled-components/macro'

export const InputStyled = styled.input`
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 24px;
  background: linear-gradient(0deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.1)), #0E0E0E;
  border-radius: 30px;
  border-color: transparent;
  color: rgba(255, 255, 255);
  width: 280px;
  height: 60px;
  padding: 0px 37px;
  
  &::placeholder {
    color: rgba(255, 255, 255, 0.5);
  }
  
  &:focus {
    outline: unset;
  }
`
export const InputStyledDots = styled(InputStyled)`
  letter-spacing: 0.25em;
`
