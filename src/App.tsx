import { DragDropContext, Droppable, Draggable } from "@hello-pangea/dnd";

function App() {
  const onDragEnd = () => {};
  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <div>
        <Droppable droppableId="one">
          {(provided) => (
            //ref: dom 참조 droppableProps: 드래그 가능한 아이템들
            <ul ref={provided.innerRef} {...provided.droppableProps}>
              <Draggable draggableId="zero" index={0}>
                {(provided) => (
                  <li ref={provided.innerRef} {...provided.draggableProps}>
                    <span {...provided.dragHandleProps}>👉</span>0
                  </li>
                )}
              </Draggable>
              <Draggable draggableId="one" index={1}>
                {(provided) => (
                  <li
                    //DOM 직접 참조
                    ref={provided.innerRef}
                    //draggable 이벤트 속성 전달
                    {...provided.draggableProps}
                  >
                    {/* 실제 drag 적용 대상 */}
                    <span {...provided.dragHandleProps}>👉</span>1
                  </li>
                )}
              </Draggable>
              {/* UI 깨짐 방지 */}
              {provided.placeholder}
            </ul>
          )}
        </Droppable>
      </div>
    </DragDropContext>
  );
}

export default App;
