import { motion, useMotionValue } from "motion/react";
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

  //useEffect: 렌더링 이후 실행되야하는 작업인 경우 사용
  //useEffect 안에 설정된 동작이 리렌더링, 혹은 렌더링 해제가 될때 해당 이벤트를 제거 및 중복 방지를 해준다.
  useEffect(() => {
    //x 자체는 motion의 객체로써 변경되지 않지만 on 메서드를 통해서 x 내부 값의 변경을 읽는다.
    //useEffect안에 넣음으로서 해당 on 동작이 렌더링 혹은 리렌더링 시, 메서드가 중복 호출되지 않게 막는다 == 메모리 누수 방지
    x.on("change", () => console.log(x.get()));
  }, [x]);

  return (
    <Wrapper>
      <button
        onClick={() => {
          x.set(200);
        }}
      >
        click me
      </button>
      <Box style={{ x }} drag="x" dragSnapToOrigin />
    </Wrapper>
  );
}

export default App;
