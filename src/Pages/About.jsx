// Animation
import { motion } from "framer-motion";
import {
  RevealAnim,
  fadeRightAnim,
  LineAnim,
  fadeLeftAnim,
} from "../Animation";
// Styles
import styled from "styled-components";
import { Div, Line } from "./commonStyle";
//  Component
import { useScroll } from "../components/useScroll";
// Image
import Pic1 from "../assets/profile.jpg";

const About = () => {
  const [element, controls] = useScroll();
  return (
    <StyledAbout
      ref={element}
      variants={fadeLeftAnim}
      animate={controls}
      initial="hidden"
      id="about"
    >
      <div>
        <h3>About Me</h3>
        <Line variants={LineAnim} />
      </div>
      <AboutContainer>
        <Img variants={RevealAnim} src={Pic1} alt="profile" />
        <motion.p variants={fadeRightAnim}>
        <h3>I am Anshika Sethiya</h3>
        <br/>
        I am Full Stack Developer and student , pursing my degree of B.Tech in Computer Science from SVVV,Indore.
        I am beginner developer and passionate to work as Software developer in IT industry with my technical skills to contribute in 
        orgranisation's growth.
        </motion.p>
      </AboutContainer>
    </StyledAbout>
  );
};

const StyledAbout = styled(Div)`
  padding: 4.5rem 1rem 1rem 1rem;
  @media (max-width: 1030px) {
    height: auto;
  }
`;

const AboutContainer = styled(motion.div)`
  width: 80%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 10rem;
  p {
    flex: 7;
    flex-wrap: wrap;
    padding: 0 2rem;
    font-size: 1.5rem;
    text-align: left;
  }
  @media (max-width: 1030px) {
    flex-direction: column;
    margin-top: 2rem;
    p {
      padding: 2rem 0;
      font-size: 1.5rem;
    }
  }
`;

const Img = styled(motion.img)`
  flex: 5;
  width: 20rem;
  object-fit: cover;
  overflow: hidden;
  border-radius: 1rem;
`;

export default About;
