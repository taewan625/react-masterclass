import { motion, AnimatePresence } from "motion/react";
import { useState } from "react";
import styled from "styled-components";

const Wrapper = styled(motion.div)`
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 5rem;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  width: 50vw;
  gap: 10px;
`;

const Box = styled(motion.div)`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: transparent;
  border-radius: 10px;
  height: 200px;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.5);
`;

const Modal = styled(motion.div)`
  border-radius: 10px;
  width: 400px;
  height: 200px;
  background-color: #ffffff;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.5);
`;

const Overlay = styled(motion.div)`
  width: 100%;
  height: 100%;
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Circle = styled(motion.div)`
  width: 50px;
  height: 50px;
  border-radius: 25px;
  background-color: #ffffff;
`;

const Button = styled(motion.button)`
  color: white;
  border: none;
  border-radius: 12px;
  padding: 10px 20px;
  outline: none;
  color: blue;
  font-size: 18px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

function App() {
  const [id, setId] = useState<null | string>(null);
  const [isSwitch, setIsSwitch] = useState(true);

  const boxList = [
    { id: "1", origin: "100% 100%", hasCircle: false },
    { id: "2", origin: "0% 100%", hasCircle: isSwitch },
    { id: "3", origin: "100% 0%", hasCircle: !isSwitch },
    { id: "4", origin: "0% 0%", hasCircle: false },
  ];

  return (
    <Wrapper>
      <Grid>
        {boxList.map((box) => (
          <Box
            onClick={() => setId(box.id)}
            key={box.id}
            layoutId={box.id}
            whileHover={{ scale: 1.1, transformOrigin: box.origin }}
            style={{ transformOrigin: box.origin }}
          >
            {box.hasCircle && <Circle layoutId="circle" />}
          </Box>
        ))}
      </Grid>

      <Button
        whileHover={{ scale: 1.1, transition: { duration: 0.5 } }}
        whileTap={{ color: "orange" }}
        style={{ transition: "color 0.5s" }}
        onClick={() => setIsSwitch((prev) => !prev)}
      >
        Switch
      </Button>

      <AnimatePresence>
        {id ? (
          <Overlay
            onClick={() => setId(null)}
            initial={{ backgroundColor: "rgba(0,0,0,0)" }}
            animate={{ backgroundColor: "rgba(0,0,0,0.4)" }}
            exit={{ backgroundColor: "rgba(0,0,0,0)" }}
          >
            <Modal layoutId={id} />
          </Overlay>
        ) : null}
      </AnimatePresence>
    </Wrapper>
  );
}

export default App;
