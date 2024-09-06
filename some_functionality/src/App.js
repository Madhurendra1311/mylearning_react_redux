import './App.css';
import React, { useState } from "react";
import MultiCheckbox from './component/MultiCheckbox';
import YTVideo from './component/YTVideo';
import RadioButton from './component/RadioButton';
import TodoInput from './component/TodoInput';
import TodoItem from './component/TodoItem';
import data from './accordiancomponent/data';
import Accordian from './accordiancomponent/Accordian';
import HOCComponent from './hoc/HOCComponent';
import Demo from './debouncing/index';
import DemoCallback from './usecallback/index';
import ConcentrationGame from './component/ConcentrationGame';


function App() {
  const [todoItems, setTodoItems] = useState([
    {
      todo: 'Hi',
      complete: false
    }, 
    {
      todo: 'Hello',
      complete: false
    }
  ])

  const createTodoItem = (todo) => {
    const newTodoItems = [...todoItems, {todo, complete: false}];
    setTodoItems(newTodoItems);
  }

  const deleteTodoItem = (index) => {
    const newTodoItems = [...todoItems];
    newTodoItems.splice(index, 1);
    setTodoItems(newTodoItems);
  }

  const completeTodoItem = (index) => {
    const newTodoItems = [...todoItems];
    newTodoItems[index].complete === false ? (newTodoItems[index].complete === true) : (newTodoItems[index].complete === false)
    setTodoItems(newTodoItems);
  }

  const updateTodoItem = (index) => {
    const newTodoItems = [...todoItems];
    const item = newTodoItems[index];
    let newItem = prompt(`Update ${item.todo}?`, item.todo);
    let todoObj = {todo: newItem, complete: false};
    newTodoItems.splice(index, 1, todoObj);
    if(newItem === null || newItem === '') {
      return ;
    } else {
      item.todo = newItem;
    }
    setTodoItems(newTodoItems);
  }


  return (
    <div className="App">
      {/* <h2>Hi Using Multi CheckBox </h2>
      <MultiCheckbox />
      <YTVideo embedId="mGV9r0wgCrI" />
      <RadioButton /> */}
      <TodoInput createTodoItem = {createTodoItem} />
      {
        todoItems.map((each, index) => (
          <TodoItem key={index} index = {index} each = {each} deleteTodoItem = {deleteTodoItem} completeTodoItem = {completeTodoItem} updateTodoItem = {updateTodoItem} />
        ))
      }
      {/* ----------------Accordian--------------- */}
      {/* <h1>React accordian demo</h1> */}
      <div className="accordion">
        {
          data.map((each, i) => {
            return (
              <>
                <Accordian question={each?.question} answer={each?.answer} />
              </>
            )
          })
        }
      </div>
      {/* -----------------------HOC Concept--------------------------- */}
      {/* <HOCComponent /> */}
      {/* ----------------------------Debouncing and throttling implementation--------- */}
        {/* <Demo /> */}
        {/* ------------------usecallback------------- */}
        {/* <DemoCallback /> */}
        <ConcentrationGame />
    </div>
  );
}

export default App;
