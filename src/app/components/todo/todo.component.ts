import { Component, OnInit } from '@angular/core';
import { addTask, todoList, getTask} from 'src/app/service/todos.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})

export class TodoComponent implements OnInit {
  title = "To Do List"
  visualizza= "Recupero Task..."
  newArr = todoList;
  testo = "";


  constructor(){

      setTimeout(() =>{
        if (this.newArr.length === 0){
          this.visualizza = "Oops non ci sono task..."
        }else if (this.newArr.length !== 0) {
          this.visualizza = "Le tue Task"
        }
      },2000);
  };

   add(titolo: string){
    addTask(titolo);
    setTimeout(()=> {
      this.testo = "";
      this.visualizza = "";
    });
  }

    cambia(num:number){
      this.newArr[num-1].completed = true;
      let ul = document.querySelector("#ul");
      ul?.remove();

  }

  remove(num:number){
    this.newArr.splice(num-1, 1)
  }

  ngOnInit(): void {
  }

}
