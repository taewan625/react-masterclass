import styled from "styled-components";

const Father = styled.div`
  display: flex;
`;

const Box = styled.div`
  background-color: ${(props) => props.color || "black"};
  width: 100px;
  height: 100px;
`;

const Text = styled.span`
  color: white;
`;

function App() {
  return (
    <Father>
      <Box color="teal">
        <Text>Box 1</Text>
      </Box>
      <Box color="tomato"></Box>
    </Father>
  );
}

export default App;
