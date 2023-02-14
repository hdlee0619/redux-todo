import React from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const AboutContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background-color: #f9f5e7;
`;
const ItemsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 25rem;
  padding: 1.5625rem;
  margin: auto;
  border-radius: 20px;
  background-color: #e3caa5;
`;

const InfoDiv = styled.div`
  margin-top: 0.625rem;
`;

const NavDiv = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const CardBtn = styled.button`
  height: 2.5rem;
  padding: 10px 20px;
  border: none;
  border-radius: 10px;
  background-color: #b4cfb0;
  color: #5f7161;
`;

function About() {
  const params = useParams();
  const toDoList = useSelector((state) => {
    return state.toDos;
  });
  console.log('toDoList : ', toDoList);
  console.log('params id : ', params.id);
  const findToDo = toDoList.find((item) => {
    return Number(params.id) === item.id;
  });
  console.log('findToDo array', findToDo);
  return (
    <AboutContainer>
      <ItemsWrapper>
        <NavDiv>
          <h4> id : {findToDo.id}</h4>
          <Link to={'/'}>
            <CardBtn>이전으로</CardBtn>
          </Link>
        </NavDiv>
        <InfoDiv>
          <h2>{findToDo.title}</h2>
          <h4>{findToDo.comment}</h4>
        </InfoDiv>
      </ItemsWrapper>
    </AboutContainer>
  );
}

export default About;
