import { motion, useMotionValue, useTransform } from "motion/react";
import { useEffect } from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Box = styled(motion.div)`
  width: 150px;
  height: 150px;
  background-color: rgba(255, 255, 255, 1);
  border-radius: 15px;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
`;

function App() {
  const x = useMotionValue(0);

  //측정 값을 가지고 원하는 출력값 출력 방법
  const scale = useTransform(x, [-800, 0, 800], [2, 1, 0]);

  return (
    <Wrapper>
      <Box style={{ x, scale: scale }} drag="x" dragSnapToOrigin />
    </Wrapper>
  );
}

export default App;
