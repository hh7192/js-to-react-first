import React, {Component} from "react";
import "./ToDoList.css";
import Navbar from "../../generalComponents/Navbar";
import Form from "./components/Form";
import Table from "./components/Table";
import MainNavbar from "../../generalComponents/MainNavbar";

class ToDoList extends Component {
  constructor() {
    document.title = "HamidreZa | To Do List";
    super();
    this.state = {
      appName: "To Do List",
      inputValue: "",
      errorMessage: "THERE IS NO ITEM IN THE LIST!",
      todoItems: [
        // {action: "walk the dog", isDone: false},
        // {action: "feed the cat", isDone: false},
        // {action: "watch the movie", isDone: false},
      ],
    };
  }

  addToDo = (e) => {
    e.preventDefault();
    // clone
    const todoItemsClone = [...this.state.todoItems];
    let errorMessageClone = [this.state.errorMessage];

    // modification
    if (this.state.inputValue !== "") {
      todoItemsClone.push({action: this.state.inputValue, isDone: false});
    }
    if (todoItemsClone.length !== 0) errorMessageClone = "";

    // set state
    this.setState({
      todoItems: todoItemsClone,
      errorMessage: errorMessageClone,
      inputValue: "",
    });
  };

  doneTodo = (i) => {
    // clone
    const todoItemsClone = [...this.state.todoItems];

    // modification
    todoItemsClone[i].isDone = !todoItemsClone[i].isDone;

    // set state
    this.setState({
      todoItems: todoItemsClone,
      inputValue: "",
    });
  };

  deleteTodo = (i) => {
    // clone
    const todoItemsClone = [...this.state.todoItems];
    let errorMessageClone = [this.state.errorMessage];

    // modification
    if (todoItemsClone[i].isDone === true) {
      todoItemsClone.splice(i, 1);
    } else {
      errorMessageClone = "ONLY DONE TASKS CAN BE DELETED!";
    }
    setTimeout(() => this.setState({errorMessage: ""}), 3000);

    // set state
    this.setState({
      todoItems: todoItemsClone,
      errorMessage: errorMessageClone,
      inputValue: "",
    });
  };

  updateParentState = (obj) => {
    this.setState(obj);
  };

  render() {
    return (
      <div className='container'>
        <div className='row'>
          <MainNavbar />
          <Navbar name={this.state.appName} />
          <Form
            update={this.updateParentState}
            input={this.state.inputValue}
            add={this.addToDo}
            errorMessage={this.state.errorMessage}
          />
          <Table
            todoItems={this.state.todoItems}
            delete={this.deleteTodo}
            done={this.doneTodo}
          />
        </div>
      </div>
    );
  }
}

export default ToDoList;
