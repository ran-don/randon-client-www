import styled from 'styled-components/macro'

export const FullScreenContainer = styled.div`
  width: 100vw;
  height: 100%;
  background: rgba(0,0,0,0.8);
  z-index: 10;
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`
