import { motion, stagger, Variants } from "motion/react";
import styled from "styled-components";

const Wrapper = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Box = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  width: 200px;
  height: 200px;
  background-color: rgba(255, 255, 255, 0.2);
  border-radius: 15px;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
`;

const Circle = styled(motion.div)`
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
  background-color: white;
  height: 70px;
  width: 70px;
  border-radius: 35px;
  place-self: center; //display-grid에서 사용. align-self, justify-self 축약형
`;

const boxVariants: Variants = {
  initial: { opacity: 0, scale: 0 },
  animate: {
    opacity: 1,
    scale: 1,
    transition: {
      //type: "spring", //update 된 이후부터 type:spring 쓰면 제대로 동작 안함.
      duration: 1,
      delayChildren: stagger(0.3, { startDelay: 0.5, from: "first" }),
    },
  },
};

const circleVariants: Variants = {
  initial: {
    opacity: 0,
    y: 10,
  },
  animate: {
    opacity: 1,
    y: 0,
  },
};

function App() {
  return (
    <Wrapper>
      {/* 자식에게도 애니메이션이 동일 적용 됨. 기본 값 */}
      <Box variants={boxVariants} initial="initial" animate="animate">
        <Circle variants={circleVariants}></Circle>
        <Circle variants={circleVariants}></Circle>
        <Circle variants={circleVariants}></Circle>
        <Circle variants={circleVariants}></Circle>
      </Box>
    </Wrapper>
  );
}

export default App;
