import styled from "styled-components";
import { useContext } from "react";

import { TweetContext } from "../TweetContext";
import Heart from "./Heart";
import PoppingCircle from "./PoppingCircle";
import ScaleIn from "./ScaleIn";
import ConfettiPiece from "./ConfettiPiece";
import { range, random } from "../../utils";

const PARTICLE_COLORS = ["#e53935", "#1e88e5", "#43a047", "#fdd835", "#fb8c00"];

const LikeButton = ({ size = 40 }) => {
  const { isLikedByCurrentUser } = useContext(TweetContext);
  const heartSize = size * 0.6;

  return (
    <Wrapper style={{ width: size, height: size }}>
      {isLikedByCurrentUser && <PoppingCircle size="40px" color="#E790F7" />}
      {isLikedByCurrentUser ? (
        <ScaleIn>
          <Heart width={heartSize} isToggled={isLikedByCurrentUser} />
        </ScaleIn>
      ) : (
        <Heart width={heartSize} isToggled={isLikedByCurrentUser} />
      )}
      {isLikedByCurrentUser &&
        range(12).map((i) => <ConfettiPiece 
        key={i} 
        pos={i * 1000} 
        angle={360 * (i/12)}
        distance={random(15,30)}
        color={PARTICLE_COLORS[i % 5]}
      />)}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default LikeButton;
