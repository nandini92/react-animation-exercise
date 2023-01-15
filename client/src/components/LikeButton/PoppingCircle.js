import styled, { keyframes } from "styled-components";

const PoppingCircle = ({ size, color }) => {
  return <Wrapper size={size} color={color}></Wrapper>;
};

const Pop = keyframes`
  from {
    transform: scale(0);
  }
  to {
    transform: scale(1);
  }
`;

const TurnPurple = keyframes`
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
`;


const Wrapper = styled.div`
  background-color: ${p => p.color};
  width: ${p => p.size};
  height: ${p => p.size};
  border-radius: 50%;

  animation: ${Pop} 300ms forwards, ${TurnPurple} 800ms forwards;
`;

export default PoppingCircle;
