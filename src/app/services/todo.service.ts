import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { iToDo } from '../models/todo.interface';

@Injectable({
  providedIn: 'root'
})

export class TodoService {


  private mock:iToDo[]=[{"title":"Tree porcupine","description":"Coendou prehensilis","iscompleted":false,"isarcaiv":false,"endDate":"6/16/2021",selcted:true,index:0},
  {"title":"Blue-tongued skink","description":"Tiliqua scincoides","iscompleted":false,"isarcaiv":false,"endDate":"12/30/2021",selcted:false,index:1},
  {"title":"Black-eyed bulbul","description":"Pycnonotus barbatus","iscompleted":false,"isarcaiv":false,"endDate":"3/19/2021",selcted:false,index:2},
  {"title":"Stilt, black-winged","description":"Himantopus himantopus","iscompleted":false,"isarcaiv":false,"endDate":"10/27/2021",selcted:false,index:3},
  {"title":"Monitor, water","description":"Varanus salvator","iscompleted":false,"isarcaiv":false,"endDate":"6/19/2021",selcted:false,index:4},
  {"title":"Dabchick","description":"Tachybaptus ruficollis","iscompleted":false,"isarcaiv":false,"endDate":"9/25/2021",selcted:false,index:5},
  {"title":"Southern brown bandicoot","description":"Isoodon obesulus","iscompleted":false,"isarcaiv":false,"endDate":"9/29/2021",selcted:false,index:6},
  {"title":"Iguana, land","description":"Conolophus subcristatus","iscompleted":false,"isarcaiv":false,"endDate":"4/16/2021",selcted:false,index:7},]

  private _todoSobject:BehaviorSubject<Array<iToDo>>=new BehaviorSubject(this.mock);

  private _singleTodoSubject:BehaviorSubject<iToDo>=new BehaviorSubject(this.mock[0]);
  constructor() { }

  public getTodos():Observable<Array<iToDo>>
  {
      return this._todoSobject.asObservable()
  }

  public getSingleTodo():Observable<iToDo>{
    return this._singleTodoSubject.asObservable();
  }
  
  public setSingleTodo(todo:iToDo){
    this._singleTodoSubject.next(todo);
  } 

  public ChingeSingleTodo(index:number){
    this._singleTodoSubject.next(this.mock[index]);
  } 
}
