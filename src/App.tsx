import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";
import styled from "styled-components";

const Wrapper = styled(motion.div)`
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 10px;
`;

const Box = styled(motion.div)`
  position: absolute;
  top: 100px;
  width: 400px;
  height: 200px;
  background-color: rgba(255, 255, 255, 1);
  border-radius: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
`;

const boxVariants = {
  initial: (back: boolean) => ({
    x: back ? -500 : 500,
    opasity: 0,
    scale: 0,
  }),
  animate: {
    x: 0,
    opasity: 1,
    scale: 1,
    transition: {
      duration: 0.5,
    },
  },
  exit: (back: boolean) => ({
    x: back ? 500 : -500,
    opasity: 0,
    scale: 0,
    transition: {
      duration: 0.5,
    },
  }),
};

function App() {
  const [visible, setVisible] = useState(1);
  const [isback, setIsBack] = useState(false);

  const nextPlease = () => {
    setIsBack(false);
    setVisible((prev) => (prev === 10 ? 10 : prev + 1));
  };

  const prevPlease = () => {
    setIsBack(true);
    setVisible((prev) => (prev === 1 ? 1 : prev - 1));
  };

  return (
    <Wrapper>
      {/* mode="wait": exit 이후 나타남 */}
      <AnimatePresence mode="wait" custom={isback}>
        {/* refactor
        key 값 별로 독립적인 node를 가진다.
        key가 달라지면 변경이 되는 것을 이용 - key를 기준으로 이전 node는 제거 현재 node가 생성
        map을 사용하지 않고도 슬라이드를 만들기가 가능
        */}
        <Box
          custom={isback} //variants에 데이터를 보내는 props
          variants={boxVariants}
          initial="initial"
          animate="animate"
          exit="exit"
          key={visible}
        >
          {visible}
        </Box>
      </AnimatePresence>
      <button onClick={nextPlease}>next</button>
      <button onClick={prevPlease}>prev</button>
    </Wrapper>
  );
}

export default App;
