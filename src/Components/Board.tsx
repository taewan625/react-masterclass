import { Droppable } from "@hello-pangea/dnd";
import DraggableCard from "./DraggableCard";
import styled from "styled-components";
import { useRef } from "react";

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
  //react에서 ref에 접근하기 위해서 useRef 라는 ref 객체를 만들어야 한다.
  //useRef로 관리해야되는 ref를 react가 인지
  const inputRef = useRef<HTMLInputElement>(null); //null은 초기값으로 ref DOM이 만들어지지 않아서 최초에는 null일수 밖에 없음

  const onClick = () => {
    // inputRef.current: 참조 주소를 가진 dom 그자체로 document.getElementById() 같이 dom을 가져오는 것
    // 그래서 focus라는 dom 에 이벤트를 바로 줄 수 있다.
    inputRef.current?.focus();
  };

  return (
    <Wrapper>
      <Title>{boardId}</Title>
      {/* ref: 해당 dom node의 직접적인 참조 주소 */}
      <input ref={inputRef} type="text" placeholder="grab me" />
      <button type="button" onClick={onClick}>
        click me
      </button>

      <Droppable droppableId={boardId}>
        {/* proviede: @hello-pangea/dnd 라이브러리가 내부에서 넘겨주는 매개변수 객체 */}
        {(provided, snapshot) => (
          <Area
            ref={provided.innerRef}
            {...provided.droppableProps}
            isDraggingOver={snapshot.isDraggingOver}
            isDraggingFromThisWith={Boolean(snapshot.draggingFromThisWith)}
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
