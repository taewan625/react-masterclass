import { Draggable } from "@hello-pangea/dnd";
import React from "react";
import styled from "styled-components";

const Card = styled.div`
  border-radius: 5px;
  margin-bottom: 5px;
  padding: 10px 10px;
  background-color: ${(props) => props.theme.cardColor};
`;

interface IDraggableCardProps {
  index: number;
  todo: string;
  boardId: string;
}

function DraggableCard({ todo, index, boardId }: IDraggableCardProps) {
  return (
    <Draggable key={todo + index} draggableId={boardId + index} index={index}>
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
}

//props가 변경되는 경우에만 rerender 되지 않도록 최적화  (불필요한 렌더링이 많은 경우에만 적용)
export default React.memo(DraggableCard);
