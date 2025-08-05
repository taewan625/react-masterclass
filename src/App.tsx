import {
  DragDropContext,
  Droppable,
  Draggable,
  DropResult,
} from "@hello-pangea/dnd";
import { useAtom } from "jotai";
import styled from "styled-components";
import { toDoState } from "./atoms";

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
  grid-template-columns: repeat(1, 1fr);
`;

const Board = styled.div`
  padding: 20px 10px;
  padding-top: 30px;
  background-color: ${(props) => props.theme.boardColor};
  border-radius: 5px;
  min-height: 200px;
`;

const Card = styled.div`
  border-radius: 5px;
  margin-bottom: 5px;
  padding: 10px 10px;
  background-color: ${(props) => props.theme.cardColor};
`;

function App() {
  const [toDos, setToDos] = useAtom(toDoState);

  //드레그가 끝날때 동작하는 함수
  const onDragEnd = ({ destination, source }: DropResult) => {
    if (!destination) return;

    setToDos((oldToDos) => {
      //복제
      const toDosCopy = [...oldToDos];
      //메서드 실행 후 제거된 요소 배열 반환
      const [target] = toDosCopy.splice(source.index, 1);
      //메서드 실행 후 [] 반환
      toDosCopy.splice(destination.index, 0, target);
      return toDosCopy;
    });
  };

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <Wrapper>
        <Boards>
          <Droppable droppableId="one">
            {(provided) => (
              <Board ref={provided.innerRef} {...provided.droppableProps}>
                {toDos.map((todo, index) => {
                  return (
                    <Draggable
                      key={todo + index}
                      draggableId={"id" + index}
                      index={index}
                    >
                      {(provided) => (
                        <Card
                          ref={provided.innerRef}
                          {...provided.draggableProps}
                          {...provided.dragHandleProps}
                        >
                          {todo}
                        </Card>
                      )}
                    </Draggable>
                  );
                })}
                {/* UI 깨짐 방지 */}
                {provided.placeholder}
              </Board>
            )}
          </Droppable>
        </Boards>
      </Wrapper>
    </DragDropContext>
  );
}

export default App;
