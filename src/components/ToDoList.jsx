import ToDoCards from './ToDoCards';

import styled from 'styled-components';
import { useSelector } from 'react-redux';

const ToDoTitle = styled.h4`
  margin-left: 17px;
  font-size: 24px;
`;

const ToDoCardContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const List = ({ children, isDone }) => {
  const toDoList = useSelector((state) => {
    return state.toDos;
  });
  return (
    <>
      <ToDoTitle>{children}</ToDoTitle>
      <ToDoCardContainer>
        {toDoList
          .filter((item) => item.isDone === isDone)
          .map((mapItem) => {
            return (
              <ToDoCards mapItem={mapItem} key={mapItem.id}>
                {isDone === true ? '취소' : '완료'}
              </ToDoCards>
            );
          })}
      </ToDoCardContainer>
    </>
  );
};

export default List;
