import styled from 'styled-components/macro'

export const Spinner = styled.div`
  font-size: 20px;
  position: relative;
  display: inline-block;
  width: 1em;
  height: 1em;
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  margin: auto;
`

export const SpinnerBlade = styled.div`
  position: absolute;
  left: 10px;
  bottom: -2px;
  width: 3px;
  height: 9px;
  border-radius: 12px;
  background-color: transparent;
  -webkit-transform-origin: center -5px;
  -ms-transform-origin: center -5px;
  transform-origin: center -5px;
  -webkit-animation: spinner-fade 1s infinite linear;
  animation: spinner-fade 1s infinite linear;

  &:nth-child(1) {
    -webkit-animation-delay: 0s;
    animation-delay: 0s;
    -webkit-transform: rotate(0deg);
    -ms-transform: rotate(0deg);
    transform: rotate(0deg);
  }
  &:nth-child(2) {
    -webkit-animation-delay: 0.083s;
    animation-delay: 0.083s;
    -webkit-transform: rotate(45deg);
    -ms-transform: rotate(45deg);
    transform: rotate(45deg);
  }
  &:nth-child(3) {
    -webkit-animation-delay: 0.166s;
    animation-delay: 0.166s;
    -webkit-transform: rotate(90deg);
    -ms-transform: rotate(90deg);
    transform: rotate(90deg);
  }
  &:nth-child(4) {
    -webkit-animation-delay: 0.249s;
    animation-delay: 0.249s;
    -webkit-transform: rotate(135deg);
    -ms-transform: rotate(135deg);
    transform: rotate(135deg);
  }
  &:nth-child(5) {
    -webkit-animation-delay: 0.332s;
    animation-delay: 0.332s;
    -webkit-transform: rotate(180deg);
    -ms-transform: rotate(180deg);
    transform: rotate(180deg);
  }
  &:nth-child(6) {
    -webkit-animation-delay: 0.415s;
    animation-delay: 0.415s;
    -webkit-transform: rotate(225deg);
    -ms-transform: rotate(225deg);
    transform: rotate(225deg);
  }
  &:nth-child(7) {
    -webkit-animation-delay: 0.498s;
    animation-delay: 0.498s;
    -webkit-transform: rotate(270deg);
    -ms-transform: rotate(270deg);
    transform: rotate(270deg);
  }
  &:nth-child(8) {
    -webkit-animation-delay: 0.581s;
    animation-delay: 0.581s;
    -webkit-transform: rotate(315deg);
    -ms-transform: rotate(315deg);
    transform: rotate(315deg);
  }

  @-webkit-keyframes spinner-fade {
    0% {
      background-color: #69717d;
    }
    100% {
      background-color: transparent;
    }
  }

  @keyframes spinner-fade {
    0% {
      background-color: #BFFF07;
    }
    100% {
      background-color: transparent;
    }
  }
`
