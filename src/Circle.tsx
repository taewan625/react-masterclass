import styled from "styled-components";

interface CircleProps {
  bgColor: string;
  borderColor?: string; //optional
  text?: string;
}

const Container = styled.div<CircleProps>`
  width: 200px;
  height: 200px;
  border-radius: 100px;
  background-color: ${(props) => props.bgColor};
  border: 10px solid ${(props) => props.borderColor};
`;

//default 값 세팅 방법 1
function Circle({ bgColor, borderColor, text = "hello" }: CircleProps) {
  return (
    //default 값 세팅 방법 2: ??
    <Container bgColor={bgColor} borderColor={borderColor ?? bgColor}>
      {text}
    </Container>
  );
}

export default Circle;
