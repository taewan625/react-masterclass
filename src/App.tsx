import { DragDropContext, DropResult } from "@hello-pangea/dnd";
import { useAtom } from "jotai";
import styled from "styled-components";
import { toDoState } from "./atoms";
import Board from "./Components/Board";

const Wrapper = styled.div`
  display: flex;
  max-width: 480px;
  width: 100%;
  margin: 0 auto;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const Boards = styled.div`
  display: grid;
  width: 100%;
  grid-template-columns: repeat(3, 1fr);
  gap: 10px;
`;

function App() {
  const [toDos, setToDos] = useAtom(toDoState);

  //드레그가 끝날때 동작하는 함수
  const onDragEnd = ({ destination, source }: DropResult) => {
    if (!destination) return;

    /* setToDos((oldToDos) => {
      const toDosCopy = [...oldToDos];
      const [target] = toDosCopy.splice(source.index, 1);
      toDosCopy.splice(destination.index, 0, target);
      return toDosCopy;
    }); */
  };

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <Wrapper>
        <Boards>
          {Object.keys(toDos).map((boardId, index) => (
            <Board key={index} boardId={boardId} toDos={toDos[boardId]} />
          ))}
        </Boards>
      </Wrapper>
    </DragDropContext>
  );
}

export default App;
