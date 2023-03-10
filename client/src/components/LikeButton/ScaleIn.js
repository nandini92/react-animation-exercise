import { useSpring, animated } from "react-spring";

const ScaleIn = ({ children }) => {
  const bounce = useSpring({
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    transform: "scale(1)",
    from: {
      transform: "scale(0)",
    },
    config: {
      tension: 120,
      friction: 9,
    },
    delay: 200
  });

  return <animated.div style={bounce}>{children}</animated.div>;
};

export default ScaleIn;
