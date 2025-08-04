import { motion, Variants } from "framer-motion";
import { JSX } from "react";

const service: [JSX.Element, string, number, number][] = [
  [
    <svg width="64" height="64">
      <circle cx="32" cy="32" r="32" fill="black" />
    </svg>,
    "Web application development",
    200,
    260,
  ],
  [
    <svg width="64" height="64">
      <rect width="64" height="64" fill="black" />
    </svg>,
    "Desktop application development",
    100,
    160,
  ],
  [
    <svg width="64" height="64">
      <rect width="64" height="64" fill="black" />
    </svg>,
    "Mobile application development",
    150,
    260,
  ],
  [
    <svg width="64" height="64">
      <rect width="64" height="64" fill="black" />
    </svg>,
    "Debug and testing",
    240,
    300,
  ],
];

export default function ScrollTriggered() {
  return (
    <div style={container}>
      {service.map(([image, name, hueA, hueB], i) => (
        <Card key={i} image={image} name={name} hueA={hueA} hueB={hueB} i={i} />
      ))}
    </div>
  );
}

interface CardProps {
  image: JSX.Element;
  name: string;
  hueA: number;
  hueB: number;
  i: number;
}

function Card({ image, name, hueA, hueB, i }: CardProps) {
  const background = `linear-gradient(306deg, ${hue(hueA)}, ${hue(hueB)})`;

  return (
    <motion.div
      className={`card-container-${i}`}
      style={cardContainer}
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ amount: 0.8 }}
    >
      <div style={{ ...splash, background }} />
      <motion.div style={card} variants={cardVariants} className="card">
        {/* {image} */}
        <div style={{ fontSize: 24, textAlign: "center" }}>{name}</div>
      </motion.div>
    </motion.div>
  );
}

const cardVariants: Variants = {
  offscreen: {
    y: 300,
  },
  onscreen: {
    y: 50,
    rotate: -10,
    transition: {
      type: "spring",
      bounce: 0.4,
      duration: 0.8,
    },
  },
};

const hue = (h: number) => `hsl(${h}, 100%, 50%)`;

const container: React.CSSProperties = {
  margin: "100px auto",
  maxWidth: 500,
  paddingBottom: 100,
  width: "100%",
};

const cardContainer: React.CSSProperties = {
  overflow: "hidden",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  position: "relative",
  paddingTop: 20,
  marginBottom: 0,
};

const splash: React.CSSProperties = {
  position: "absolute",
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  clipPath: `path("M 0 303.5 C 0 292.454 8.995 285.101 20 283.5 L 460 219.5 C 470.085 218.033 480 228.454 480 239.5 L 500 430 C 500 441.046 491.046 450 480 450 L 20 450 C 8.954 450 0 441.046 0 430 Z")`,
};

const card: React.CSSProperties = {
  fontSize: 164,
  width: 300,
  height: 430,
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  borderRadius: 20,
  background: "#f5f5f5",
  boxShadow:
    "0 0 1px hsl(0deg 0% 0% / 0.075), 0 0 2px hsl(0deg 0% 0% / 0.075), 0 0 4px hsl(0deg 0% 0% / 0.075), 0 0 8px hsl(0deg 0% 0% / 0.075), 0 0 16px hsl(0deg 0% 0% / 0.075)",
  transformOrigin: "10% 60%",
};
