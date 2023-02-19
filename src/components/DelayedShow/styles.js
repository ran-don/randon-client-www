import styled from 'styled-components/macro'

export const DelayedContainer = styled.div`
  width: max-content;
  opacity: 1;

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

  animation-duration: ${props => props.delay}s;
  animation-name: showContent;
`
