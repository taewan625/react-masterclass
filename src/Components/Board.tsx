import { Droppable } from "@hello-pangea/dnd";
import DraggableCard from "./DraggableCard";
import styled from "styled-components";

const Wrapper = styled.div`
  padding: 20px 10px;
  padding-top: 30px;
  background-color: ${(props) => props.theme.boardColor};
  border-radius: 5px;
  min-height: 200px;
  display: flex;
  flex-direction: column;
`;

const Title = styled.h2`
  text-align: center;
  font-weight: 600;
  margin-bottom: 10px;
  font-size: 18px;
`;

interface IAreaProps {
  isDraggingOver: boolean;
  isDraggingFromThisWith: boolean;
}

const getBackgroundColor = (props: IAreaProps) => {
  if (props.isDraggingOver) return "red";
  if (props.isDraggingFromThisWith) return "blue";
  return "pink";
};

const Area = styled.div<IAreaProps>`
  background-color: ${(props) => getBackgroundColor(props)};
  flex-grow: 1;
  transition: background-color 0.3s ease-in-out;
`;

interface IBoardProps {
  toDos: string[];
  boardId: string;
}

function Board({ toDos, boardId }: IBoardProps) {
  return (
    <Wrapper>
      <Title>{boardId}</Title>

      <Droppable droppableId={boardId}>
        {/* proviede: @hello-pangea/dnd 라이브러리가 내부에서 넘겨주는 매개변수 객체 */}
        {(provided, snapshot) => (
          <Area
            isDraggingOver={snapshot.isDraggingOver}
            isDraggingFromThisWith={Boolean(snapshot.draggingFromThisWith)}
            ref={provided.innerRef}
            {...provided.droppableProps}
          >
            {toDos.map((todo, index) => (
              <DraggableCard
                key={index}
                todo={todo}
                index={index}
                boardId={boardId}
              />
            ))}
            {/* UI 깨짐 방지 */}
            {provided.placeholder}
          </Area>
        )}
      </Droppable>
    </Wrapper>
  );
}

export default Board;
