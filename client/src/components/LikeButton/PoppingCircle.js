import styled, { keyframes } from "styled-components";

const PoppingCircle = ({ size, color }) => {
  return (
    <Cirle1 size={size} color={color}>
      <Cirle2 size={size}></Cirle2>
    </Cirle1>
  );
};

const Pop = keyframes`
  from {
    transform: scale(0);
  }
  to {
    transform: scale(1);
  }
`;

const Pop2 = keyframes`
from {
  transform: scale(0);
}
to {
  transform: scale(1);
}
`;

const Cirle1 = styled.div`
  background-color: ${(p) => p.color};
  width: ${(p) => p.size};
  height: ${(p) => p.size};
  border-radius: 50%;

  animation: ${Pop} 300ms;
`;

const Cirle2 = styled.div`
  background-color: rgb(250, 222, 231);
  width: ${(p) => p.size};
  height: ${(p) => p.size};
  border-radius: 50%;

  animation: ${Pop2} 600ms;
`;
export default PoppingCircle;
