import styled from "styled-components";
import { useSpring, animated } from "react-spring";

const ScaleIn = ({ children }) => {
  const bounce = useSpring({
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    zIndex: "999",
    transform: "scale(1)",
    from: {
      transform: "scale(0)",
    },
    config: {
      tension: 200,
      friction: 9,
    },
  });

  return <animated.div style={bounce}>{children}</animated.div>;
};

export default ScaleIn;
