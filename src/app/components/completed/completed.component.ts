import { Component, OnInit } from '@angular/core';
import { addTask, todoList} from 'src/app/service/todos.service';

@Component({
  selector: 'app-completed',
  templateUrl: './completed.component.html',
  styleUrls: ['./completed.component.scss']
})
export class CompletedComponent implements OnInit {
  title = "To Do List"
  visualizza= "Recupero Task..."
  newArr = todoList;
  testo = "";

  constructor(){
    setTimeout(() =>{
      return this.visualizza = "Opps, non ci sono Task..."
    },2000);

  };

   add(titolo: string){
    addTask(titolo);
    setTimeout(()=> {
      this.testo = "";
    });
  }


  ngOnInit(): void {
  }

}
