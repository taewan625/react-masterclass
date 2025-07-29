import { useState } from "react";
import styled from "styled-components";

interface CircleProps {
  bgColor: string;
  borderColor?: string;
}

const Container = styled.div<CircleProps>`
  width: 200px;
  height: 200px;
  border-radius: 100px;
  background-color: ${(props) => props.bgColor};
  border: 10px solid ${(props) => props.borderColor};
`;

//default 값 세팅 방법 1
function Circle({ bgColor, borderColor }: CircleProps) {
  //state에 type 지정하는 방법
  const [counter, setCounter] = useState<number>(1); // 여러개도 가능 <number | string>

  const handleCounter = () => {
    setCounter(counter + 1);
  };

  return (
    <Container bgColor={bgColor} borderColor={borderColor ?? bgColor} onClick={handleCounter}>
      {counter}
    </Container>
  );
}

export default Circle;
