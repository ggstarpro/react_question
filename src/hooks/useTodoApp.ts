import { useState, ChangeEvent } from 'react';

type Todo = {
  label: string;
  isCompleted: boolean;
};

type UseTodoApp = () => {
  todoLabel: string;
  todoList: Todo[];
  handleAddTodo: () => void;
  handleChangeTodoLabel: (e: ChangeEvent<HTMLInputElement>) => void;
  handleCompleteTodo: (todoListCompleteIndex: number) => void;
  handleDeleteTodo: (todoListDeleteIndex: number) => void;
};

export const useTodoApp: UseTodoApp = () => {
  const [todoList, setTodoList] = useState<Todo[]>([]);
  const [todoLabel, setTodoLabel] = useState('');
  const handleChangeTodoLabel = (e: ChangeEvent<HTMLInputElement>) => {
    setTodoLabel(e.target.value);
  };
  const handleAddTodo = () => {
    if (!todoLabel) {
      return;
    }
    const addTodo: Todo = {
      label: todoLabel,
      isCompleted: false,
    };
    setTodoList((prevTodoList) => [...prevTodoList, addTodo]);
    setTodoLabel('');
  };
  const handleCompleteTodo = (todoListCompleteIndex: number) => {
    setTodoList((prevTodoList) =>
      prevTodoList.map((prevTodo, prevTodoIndex) =>
        prevTodoIndex === todoListCompleteIndex
          ? { ...prevTodo, isCompleted: !prevTodo.isCompleted }
          : prevTodo,
      ),
    );
  };
  const handleDeleteTodo = (todoListDeleteIndex: number) => {
    setTodoList((prevTodoList) =>
      prevTodoList.filter((prevTodo, prevTodoIndex) => todoListDeleteIndex !== prevTodoIndex),
    );
  };

  return {
    todoLabel,
    todoList,
    handleAddTodo,
    handleChangeTodoLabel,
    handleCompleteTodo,
    handleDeleteTodo,
  };
};
