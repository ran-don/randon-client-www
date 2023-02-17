import styled from 'styled-components/macro'

import { media } from '../../utils/media'

export const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`

export const ButtonsContainerStyled = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 0 10px 35px 10px;
  flex: 1;


  ${media.sm`
    flex: unset;
    width: 360px;
  `}
`
