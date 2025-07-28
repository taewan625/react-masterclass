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
    transform:rotate(180deg);
    border-radius: 50%;
  }
  100% {
    transform:rotate(360deg);
    border-radius: 0;
  }
`;

const Box = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100px;
  width: 100px;
  background-color: tomato;
  animation: ${rotationAni} 1s linear infinite;
  .asdf,
  span {
    font-size: 50px;
    &:hover {
      color: white;
    }
  }
`;

function App() {
  return (
    <Wrapper>
      <Box>
        <span>123</span>
        <span className="asdf">123</span>
      </Box>
    </Wrapper>
  );
}

export default App;
