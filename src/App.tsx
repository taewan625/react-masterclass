import { DragDropContext, Droppable, Draggable } from "@hello-pangea/dnd";

function App() {
  const onDragEnd = () => {};
  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <div>
        <Droppable droppableId="one">
          {() => (
            <ul>
              <Draggable draggableId="zero" index={0}>
                {() => <li>0</li>}
              </Draggable>
              <Draggable draggableId="one" index={1}>
                {() => <li>1</li>}
              </Draggable>
            </ul>
          )}
        </Droppable>
      </div>
    </DragDropContext>
  );
}

export default App;
