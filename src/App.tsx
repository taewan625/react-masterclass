import { motion, Variants } from "motion/react";
import { useRef } from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const BiggerBox = styled.div`
  width: 600px;
  height: 600px;
  background-color: rgba(255, 255, 255, 0.2);
  border-radius: 15px;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
`;

const Box = styled(motion.div)`
  width: 150px;
  height: 150px;
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
  const biggerBoxRef = useRef<HTMLDivElement>(null);

  return (
    <Wrapper>
      <BiggerBox ref={biggerBoxRef}>
        <Box
          drag //drag 가능. =x, =y로 축 기준 이동 제약 가능
          dragConstraints={biggerBoxRef} //이동 제약
          dragSnapToOrigin
          dragElastic={0} //이동 제약 기준 관성
          variants={boxVariants}
          whileDrag="whileDrag"
          whileHover="whileHover"
          whileTap="whileTap"
        />
      </BiggerBox>
    </Wrapper>
  );
}

export default App;
