import styled from 'styled-components/macro'

const AlertColors = {
  danger: '#BFFF07',
  warning: '#BFFF07',
}

export const AlertContainer = styled.div`
  top: -22px;
  position: relative;
  width: 352px;
  height: 153px;
  display: flex;
  justify-content: center;
  align-items: center;
  
  background: ${props => AlertColors[props.color] || '#BFFF07'};
  border-radius: 30px;
  
  @keyframes showAlert {
    0% {
      height: 0;
    }
    50% {
      height: 0;
    }
    80% {
      height: 153px;
    }
  }

  animation-duration: 2.5s;
  animation-name: showAlert;
`

export const ContentContainer = styled.div`
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 600;
  font-size: 24px;
  line-height: 29px;
  display: flex;
  align-items: center;
  text-align: center;
  padding: 50px;

  color: #090909;
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

  animation-duration: 3s;
  animation-name: showContent;
`

export const SvgContainer = styled.div`
  position: absolute;
  top: -15px;
  left: calc(50% - 20px);
`
