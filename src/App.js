import styled from "styled-components";

//styled-components 사용법.
const Father = styled.div`
  display: flex;
`;

const Btn = styled.button`
  color: white;
  background-color: tomato;
  border: 0;
  border-radius: 15px;
`;

//이건 잘 안씀
const Input = styled.input.attrs({
  required: true,
})`
  background-color: tomato;
`;

function App() {
  return (
    <Father as="header">
      {/* as를 통해서 tag를 변경 가능함. */}
      <Btn as="a" href="/">
        Log In
      </Btn>
      <Input />
      <Input />
      <Input />
      <Input />
    </Father>
  );
}

export default App;
