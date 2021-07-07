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

const Skills = () => {
    const [element, controls] = useScroll();
    return(
    <>
    <StyledAbout
      ref={element}
      variants={fadeLeftAnim}
      animate={controls}
      initial="hidden"
      id="about"
    >

    <SkillsContainer>
    <Div class="skills" id="Skills" variants={RevealAnim} >
    <div>
        <h3>Skills</h3>
        <Line variants={LineAnim} />
    </div>
    <motion.p variants={fadeRightAnim}>
      <div className="skill_box">
        <div className="box">
          <i className="fab fa-html5 fa-4x"></i>
          <p>HTML</p>
        </div>
        <div className="box">
          <i className="fab fa-css3-alt fa-4x"></i>
          <p>CSS</p>
        </div>
        <div className="box">
          <i className="fab fa-js-square fa-4x"></i>
          <p>Javascript</p>
        </div>
        <div className="box">
          <i className="fab fa-react fa-4x"></i>
          <p>React</p>
        </div>
        <div className="box">
          <i className="fab fa-node-js fa-4x"></i>
          <p>Node Js</p>
        </div>
        <div className="box">
          <i className="fas fa-database fa-4x"></i>
          <p>Mongo db</p>
        </div>
      </div>
      </motion.p>
    </Div>
    </SkillsContainer>
    </StyledAbout>
      </>
    );
};

const StyledAbout = styled(Div)`
  padding: 4.5rem 1rem 1rem 1rem;
  width: 100vw;
  @media (max-width: 1030px) {
    height: auto;
  }
`;

const SkillsContainer = styled(motion.div)`
.skill_box {
  /* margin-top:1rem; */
  flex-wrap: wrap;
  display: flex;
  flex-direction:row;
  justify-content: center;
}
.skill_box .box {
  margin: 2rem 2rem;
  width: 18rem;
  height: 12rem;
  background: var(--bg-dark);
  background: rgba(255, 255, 255, 0.089);
  backdrop-filter: blur(20px);
  border: 1px solid rgba(255, 255, 255, 0.068);
  border-bottom: none;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  cursor: pointer;
  position: relative;
  z-index: 1;
}
.skill_box .box::before {
  content: "";
  position: absolute;
  background:#03b3b0;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
  transform-origin: bottom;
  transform: scaleY(0.03);
  transition: all 0.3s;
}
.skill_box .box:hover::before {
  transform: scaleY(1);
}
.skill_box .box i {
  margin-bottom: 0.1em;
}
.skill_head {
  font-size: 6em;
  font-family: var(--font);
}

`

export default Skills;