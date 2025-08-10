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
  width: 200px;
  height: 200px;
  background-color: rgba(255, 255, 255, 1);
  border-radius: 15px;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
`;

const boxVariants: Variants = {
  whileHover: { scale: 1.2, rotateZ: 90 },
  whileTap: { scale: 1, borderRadius: "100px" },
  //rgba써야지 동적으로 색상 적용
  whileDrag: {
    backgroundColor: "rgb(46, 204, 113)",
  },
};

function App() {
  return (
    <Wrapper>
      {/* 자식에게도 애니메이션이 동일 적용 됨. 기본 값 */}
      <Box
        drag
        variants={boxVariants}
        whileDrag="whileDrag"
        whileHover="whileHover"
        whileTap="whileTap"
      ></Box>
    </Wrapper>
  );
}

export default App;
