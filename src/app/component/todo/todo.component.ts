import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { iToDo } from 'src/app/models/todo.interface';
import { TodoService } from 'src/app/services/todo.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent implements OnInit,OnDestroy {

  public todo:iToDo;
  

  private subscription:Subscription=new Subscription();
  constructor(private todoService:TodoService) { }

  ngOnInit(): void {
    this.subscription.add(
      this.todoService.getSingleTodo().subscribe(data=>{
        this.todo=data
      })
    )
   
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
      
  }

  public completed(todo:iToDo):void
  {
     todo.iscompleted=true;
  }

  public Arcaive(todo:iToDo):void{
    todo.isarcaiv=true;
   // this.todoService.ChingeSingleTodo(todo.index+1);
    
  }

}
