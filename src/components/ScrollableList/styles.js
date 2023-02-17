import styled from 'styled-components/macro'

export const ScrollableContainer = styled.div`
  display: flex;
  flex-direction: row;
  max-width: 500px;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  overflow: scroll;
  min-height: min-content;
  position: relative;

  -ms-overflow-style: none;  /* IE and Edge */
  scrollbar-width: none;  /* Firefox */
  
  &::-webkit-scrollbar {
    display: none;
  }

  &:before, &:after {
    content: '';
    position: sticky;
    margin: 0 auto;
    width: 100%;
    z-index: 2;
    height: 40px;
  }

  &:after {
    bottom: 0;
    background: linear-gradient(to top,#000 20%, transparent 80%);
  }

  &:before {
    top: 0;
    background: linear-gradient(to bottom,#000 20%, transparent 80%);
  }
`
