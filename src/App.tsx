import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  width: 100vw;
  height: 100vh;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => props.theme.backgroundColor};
`;

const Title = styled.h1`
  color: ${(props) => props.theme.textColor};
  font-size: 48px;
`;

function App() {
  return (
    <Wrapper>
      <Title>Hello World</Title>
    </Wrapper>
  );
}

export default App;
