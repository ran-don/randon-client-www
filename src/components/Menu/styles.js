import styled, { css } from 'styled-components/macro'
import { Link } from 'react-router-dom'

export const Container = styled.div`
  position: absolute;
  display: flex;
  left: 32px;
  top: 50px;

  width: 100%;
  width: -webkit-calc(100% - 60px);
  width: -moz-calc(100% - 60px);
  width: calc(100% - 60px);
  max-width: 360px;
`

export const MenuContainer = styled.div`
  left: -17px;
  top: -17px;
  position: absolute;
  width: 0;
  max-height: 0;
  overflow: hidden;
  opacity: 0;
  padding: 28px 16px;

  background: linear-gradient(0deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.1)), #0E0E0E;
  
  border-radius: 30px;
  transition: max-height 0.1s linear, width 0.1s linear, padding 0.1s linear, top 0.1s linear, opacity 0.1s linear;
  
  z-index: 3;
  
  ${({ open }) => open && css`
    width: 100%;
    max-height: 100vh;
    top: -17px;
    opacity: 1;
  `}
`

export const RouterLink = styled(Link)`
  all: unset !important;
`

export const MenuItemsContainer = styled.div`
`

export const MenuItem = styled.div`
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 600;
  font-size: 20px;
  line-height: 24px;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px 0px;
  cursor: pointer;
  
  &:after {
    position: absolute;
    content: '';
    width: 321px;
    height: 0;
    margin-top: 85px;
    border: 1px solid rgba(255, 255, 255, 0.1);
    cursor: none;
  }
  
  
  &:nth-child(n) {
    margin-top: 30px;
  }
  
  &:first-child {
    margin-top: 0;
  }
  
  &:last-child:after {
    all: unset !important;
  }
`

export const StyledBurger = styled.button`
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 2rem;
  height: 2rem;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  z-index: 5;
  
  &:focus {
    outline: none;
  }
  
  div {
    width: 2rem;
    height: 0.25rem;
    background: white;
    border-radius: 10px;
    transition: all 0.1s linear;
    position: relative;
    transform-origin: 1px;

    :first-child {
      transform: ${({ open }) => open ? 'rotate(45deg)' : 'rotate(0)'};
    }

    :nth-child(2) {
      opacity: ${({ open }) => open ? '0' : '1'};
      transform: ${({ open }) => open ? 'translateX(20px)' : 'translateX(0)'};
    }

    :nth-child(3) {
      transform: ${({ open }) => open ? 'rotate(-45deg)' : 'rotate(0)'};
    }
  }
`
