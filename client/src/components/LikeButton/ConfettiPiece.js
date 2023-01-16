import styled from "styled-components";
import Particle from "./Particle";

const ConfettiPiece = ({ pos, angle, distance, color }) => {
  return (
    <CenteredWithinParent>
      <Particle
          angle={angle}
          distance={distance}
          zIndex={pos}
          >
        <Piece
          color={color}
        ></Piece>
      </Particle>
    </CenteredWithinParent>
  );
};

const CenteredWithinParent = styled.div`
  display: flex;
  position: absolute;
  justify-content: center;
  align-items: center;
  left: 15px;
  top: 15px;
`;
const Piece = styled.div`
  background-color: ${(props) => props.color};
  width: 10px;
  height: 10px;
  border-radius: 50%;
`;

export default ConfettiPiece;
