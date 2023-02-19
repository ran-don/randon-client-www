import styled from 'styled-components/macro'

import { ReactComponent as CheckSvg } from '../../assets/images/check_single.svg'

export const CheckIcon = styled(CheckSvg)`
  transform: scale(1.5);
`

export const CheckBoxContainer = styled.div`
  margin-top: 56px;
  margin-left: 17px;
  display: flex;
  max-width: 353px;
`

export const HiddenCheckBox = styled.input.attrs({ type: 'checkbox' })`
  border: 0;
  clip: rect(0 0 0 0);
  clippath: inset(50%);
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  white-space: nowrap;
  width: 1px;
`

export const CheckBoxStyled = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 21px;
  height: 21px;
  border: 3px solid white;
  border-radius: 3px;
  transition: all 150ms;  
  cursor: pointer;
  
  ${CheckIcon} {
    visibility: ${props => props.checked ? 'visible' : 'hidden'};
  }
`

export const CheckBoxContent = styled.div`
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 20px;
  letter-spacing: 0.01em;

  color: #FFFFFF;
  margin-left: 15px;
  margin-top: 3px;
`
