import styled from "styled-components";
import { motion } from "motion/react";

const Wrapper = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Box = styled(motion.div)`
  width: 200px;
  height: 200px;
  background-color: white;
  border-radius: 15px;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
`;

function App() {
  return (
    <Wrapper>
      <Box
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1, rotateZ: 360 }}
        transition={{ type: "spring", bounce: 0.8 }}
      />
      {/* 애니메이션 사용법 */}
    </Wrapper>
  );
}

export default App;
