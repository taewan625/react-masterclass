import { useForm } from "react-hook-form";
import { Droppable } from "@hello-pangea/dnd";
import DraggableCard from "./DraggableCard";
import styled from "styled-components";
import { ITodo } from "../atoms";

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

const Form = styled.form`
  width: 100%;
`;

interface IBoardProps {
  toDos: ITodo[];
  boardId: string;
}

interface IForm {
  toDo: string;
}

function Board({ toDos, boardId }: IBoardProps) {
  const { register, setValue, handleSubmit } = useForm<IForm>();
  const onValid = ({ toDo }: IForm) => {
    setValue("toDo", "");
  };

  return (
    <Wrapper>
      <Title>{boardId}</Title>
      <Form onSubmit={handleSubmit(onValid)}>
        <input
          {...register("toDo", { required: true })}
          type="text"
          placeholder={`Add Task on ${boardId}`}
        />
      </Form>

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
                key={todo.id}
                index={index} //index의 경우는 해당 library가 요구하는 props
                todoId={todo.id}
                todoText={todo.text}
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
