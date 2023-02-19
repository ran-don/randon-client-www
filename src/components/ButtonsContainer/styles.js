import styled, { css } from 'styled-components/macro'

import { media } from '../../utils/media'

export const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  opacity: 1;
  
  ${props => props.delay && css`
    @keyframes showContent {
      0% {
        opacity: 0;
      }
      50% {
        opacity: 0;
      }
      80% {
        opacity: 1;
      }
    }

    animation-duration: ${props.delay}s;
    animation-name: showContent;
  `}
`

export const ButtonsContainerStyled = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 0 10px 35px 10px;
  flex: 1;


  ${media.sm`
    flex: unset;
    width: 380px;
  `}
`
