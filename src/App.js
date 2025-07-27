import styled from "styled-components";

// styled-components 사용법.
const Father = styled.div`
  display: flex;
`;

const Box = styled.div`
  //props로 스타일을 동적으로 변경
  background-color: ${(props) => props.bgColor};
  width: 100px;
  height: 100px;
`;

//Circle 컴포넌트는 Box 컴포넌트를 상속받아 스타일을 변경
const Circle = styled(Box)`
  border-radius: 50%;
`;

function App() {
  return (
    <Father>
      <Box bgColor="teal"></Box>
      <Circle bgColor="tomato"></Circle>
    </Father>
  );
}

export default App;
