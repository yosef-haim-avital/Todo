import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { iToDo } from 'src/app/models/todo.interface';
import { TodoService } from 'src/app/services/todo.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit, OnDestroy {



  public todos:Array<iToDo>=[];
  private subscription:Subscription=new Subscription();

  constructor(private TodoService:TodoService) { }
   
 
   
  ngOnInit(): void {
   this.subscription.add(
     this.TodoService.getTodos().subscribe(data=>{
       this.todos=data;
     })
   )
    
      
  }

  ngOnDestroy(): void {
      this.subscription.unsubscribe()
  }

  public onTodoClick(todo:iToDo,index:number):void{
     this.TodoService.setSingleTodo(todo);
     
     for(let item of this.todos)
     {
      item.selcted=false;
     }
     this.todos[index].selcted=true;
  }

  

  


 
}
