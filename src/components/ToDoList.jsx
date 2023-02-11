import ToDoCards from './ToDoCards';

import styled from 'styled-components';

const ToDoTitle = styled.h4`
  margin-left: 17px;
  font-size: 24px;
`;

const ToDoCardContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const List = ({ toDo, setToDo, children, isDone }) => {
  return (
    <>
      <ToDoTitle>{children}</ToDoTitle>
      <ToDoCardContainer>
        {toDo
          .filter((item) => item.isDone === isDone)
          .sort((a, b) => b.id - a.id)
          .map((mapItem) => {
            return (
              <ToDoCards mapItem={mapItem} toDo={toDo} setToDo={setToDo} key={mapItem.id}>
                {isDone === true ? '취소' : '완료'}
              </ToDoCards>
            );
          })}
      </ToDoCardContainer>
    </>
  );
};

export default List;
