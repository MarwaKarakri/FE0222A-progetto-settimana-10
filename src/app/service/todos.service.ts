import { Todo } from '../interface/todo';

export let  todoList: Todo[] = [];


export async function addTask(task: string): Promise<Todo>{
return new Promise((resolve, reject) => {
  setTimeout(() =>{
    const newTask: Todo = {
      id: todoList.length + 1,
      titolo: task,
      completed: false,
    };
    todoList.push(newTask);
    resolve(newTask);
  },2000);
})
}

export async function getTask(): Promise<Todo[]>{
  return new Promise((resolve, reject) => {
    setTimeout(() =>{
      resolve(todoList);
    },2000);
  })

}
