import styled, { keyframes } from "styled-components";

const Wrapper = styled.div`
  display: flex;
`;

const rotationAni = keyframes`
  0% {
    transform:rotate(0deg);
    border-radius: 0;
  }
  50% {
    border-radius: 100px;
  }
  100% {
    transform:rotate(360deg);
    border-radius: 0;
  }
`;

const Emoji = styled.span`
  font-size: 50px;
`;

const Box = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100px;
  width: 100px;
  background-color: tomato;
  animation: ${rotationAni} 1s linear infinite;
  ${Emoji}:hover {
    color: white;
  }
`;

function App() {
  return (
    <Wrapper>
      <Box>
        <Emoji as="p">123</Emoji>
      </Box>
      <Emoji as="p">asdf</Emoji>
    </Wrapper>
  );
}

export default App;
