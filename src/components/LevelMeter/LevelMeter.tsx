import "./LevelMeter.css";
import { useEffect, useState } from "react";

export const LevelMeter = () => {
  const [roll, setRoll] = useState(0);

  useEffect(() => {
    const handleOrientation = (event: DeviceOrientationEvent) => {
      const { gamma } = event;

      // Calculate the roll angle
      const rollAngle = Math.round(gamma ?? 0);

      // Update the roll state
      setRoll(rollAngle);
    };

    window.addEventListener("deviceorientation", handleOrientation, true);

    return () => {
      window.removeEventListener("deviceorientation", handleOrientation, true);
    };
  }, []);

  return (
    <div
      style={{
        zIndex: "-99",
        position: "absolute",
        left: "50%",
        top: "50%",
        width: "500vw",
        borderTop: "2px solid white",
        transform: `translate(-50%, -50%) rotate(${roll}deg) `,
        transformOrigin: "center center",
      }}
      className="aa"
    ></div>
  );
};
