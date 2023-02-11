import styled from 'styled-components';

const ToDoCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 300px;
  height: 200px;
  padding: 10px 30px;
  margin: 10px 20px;
  background-color: #e3caa5;
  border-radius: 20px;
  box-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1);
`;

const CardText = styled.h4`
  color: #594545;
  font-size: ${(props) => (props.toDoComment ? '16px' : '23px')};
`;

const CardBtn = styled.button`
  padding: 10px 20px;
  border: none;
  border-radius: 10px;
  background-color: ${(props) => (props.doneBg ? '#b4cfb0' : '#ee6983')};
  color: ${(props) => (props.doneColor ? '#5f7161' : '#850e35')};
`;

const BtnContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
`;

const ToDoCards = ({ mapItem, toDo, setToDo, children }) => {
  const deleteToDoCard = () => {
    let copy = [...toDo];
    setToDo(copy.filter((item) => mapItem.id !== item.id));
  };
  const changeStateIsDone = () => {
    let copy = [...toDo];
    mapItem.isDone = mapItem.isDone ? false : true;
    setToDo(copy.map((item) => (item.id === mapItem.id ? mapItem : item)));
  };
  return (
    <ToDoCard>
      <div>
        <CardText>{mapItem.title}</CardText>
        <CardText toDoComment>{mapItem.comment}</CardText>
      </div>
      <BtnContainer>
        <CardBtn onClick={deleteToDoCard}>삭제</CardBtn>
        <CardBtn doneBg doneColor onClick={changeStateIsDone}>
          {children}
        </CardBtn>
      </BtnContainer>
    </ToDoCard>
  );
};

export default ToDoCards;
