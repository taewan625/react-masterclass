import { motion, useMotionValue, useScroll, useTransform } from "motion/react";
import { useEffect } from "react";
import styled from "styled-components";

const Wrapper = styled(motion.div)`
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  background: linear-gradient(135deg, rgb(72, 72, 72), rgb(8, 1, 8));
  height: 200vh;
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

  const rotateZ = useTransform(x, [-800, 800], [-360, 360]);
  const gradient = useTransform(
    x,
    [-800, 0, 800],
    [
      "linear-gradient(135deg, rgb(74, 166, 64), rgb(37, 43, 40))",
      "linear-gradient(135deg, rgb(72, 72, 72), rgb(8, 1, 8))",
      "linear-gradient(135deg, rgb(82, 55, 138), rgb(82, 4, 237))",
    ]
  );

  const { scrollYProgress } = useScroll();
  const scale = useTransform(scrollYProgress, [0, 1], [1, 5]);

  useEffect(() => {
    const unsubscribe = scrollYProgress.on("change", () => {
      console.log(scrollYProgress.get());
    });

    //useEffect만 사용한다고 해제되는거 아니였음. 이렇게 return 내부에 해제 함수를 작성해야 언마운트시 해제를 함.
    return () => {
      console.log("해제");
      unsubscribe();
    };
  }, [scrollYProgress]);

  return (
    <Wrapper style={{ background: gradient }}>
      <Box style={{ x, rotateZ, scale }} drag dragSnapToOrigin />
    </Wrapper>
  );
}

export default App;
