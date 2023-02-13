import React from 'react';
import AddInput from '../components/AddInput';
import ToDoList from '../components/ToDoList';

import styled from 'styled-components';

const AppContainer = styled.div`
  max-width: 1200px;
  min-width: 800px;
  padding: 30px;
  margin: 50px auto 50px auto;
  border-radius: 25px;
  background-color: #f9f5e7;
  align-items: center;
`;

const Header = styled.div`
  display: flex;
  justify-content: space-around;
  margin: 5px 0 40px 0;
  border-radius: 15px;
  box-shadow: 0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1);
  background-color: #f8ead8;
  color: #a7727d;
  font-size: 40px;
`;

const ToDoListContainer = styled.div`
  padding-top: 8px;
  padding-bottom: 8px;
  margin-top: 50px;
  border-radius: 20px;
  box-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1);
  background-color: #f6dfbf;
`;
function Home() {
  return (
    <>
      <AppContainer>
        <Header>
          <h3>My To do List</h3>
          <h3>React</h3>
        </Header>
        <main>
          <AddInput></AddInput>
          <ToDoListContainer>
            <ToDoList isDone={false}>Work.. 🔥</ToDoList>
            <ToDoList isDone={true}>Done.. 🎉</ToDoList>
          </ToDoListContainer>
        </main>
      </AppContainer>
    </>
  );
}

export default Home;
