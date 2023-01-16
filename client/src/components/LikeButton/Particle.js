import {useSpring, animated} from "react-spring";

const Particle = ({ angle, distance, zIndex, children }) => {
  const convertDegreesToRadians = (angle) => (angle * Math.PI) / 180;

  const angleInRads = convertDegreesToRadians(angle);

  const x = Math.cos(angleInRads) * distance;
  const y = Math.sin(angleInRads) * distance;

  const flyingParticles = useSpring({
      left: `${x}px`,
      top: `${y}px`,
      zIndex: `${zIndex}`,
      position: "absolute",
      transform: "scale(0)",
      from: {
        left: "0px",
        top: "0px",
        transform: "scale(1)"
      }
  })

  const delayedParticles = useSpring({
    left: `${x}px`,
    top: `${y}px`,
    zIndex: `${zIndex}`,
    position: "absolute",
    transform: "scale(0)",
    from: {
      left: "0px",
      top: "0px",
      transform: "scale(1)"
    },
    delay: 200
})

  return (
  zIndex % 2 === 0
  ?<animated.div style={flyingParticles}>{children}</animated.div>
  :<animated.div style={delayedParticles}>{children}</animated.div>
  );
};

export default Particle;
