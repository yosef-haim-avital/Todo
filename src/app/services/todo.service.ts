import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { iToDo } from '../models/todo.interface';

@Injectable({
  providedIn: 'root'
})

export class TodoService {


  private mock:iToDo[]=[{"title":"Tree porcupine","description":"Coendou prehensilis","iscompleted":false,"isarcaiv":true,"endDate":"6/16/2021"},
  {"title":"Blue-tongued skink","description":"Tiliqua scincoides","iscompleted":true,"isarcaiv":false,"endDate":"12/30/2021"},
  {"title":"Black-eyed bulbul","description":"Pycnonotus barbatus","iscompleted":true,"isarcaiv":false,"endDate":"3/19/2021"},
  {"title":"Stilt, black-winged","description":"Himantopus himantopus","iscompleted":false,"isarcaiv":true,"endDate":"10/27/2021"},
  {"title":"Monitor, water","description":"Varanus salvator","iscompleted":false,"isarcaiv":false,"endDate":"6/19/2021"},
  {"title":"Dabchick","description":"Tachybaptus ruficollis","iscompleted":false,"isarcaiv":true,"endDate":"9/25/2021"},
  {"title":"Southern brown bandicoot","description":"Isoodon obesulus","iscompleted":true,"isarcaiv":false,"endDate":"9/29/2021"},
  {"title":"Iguana, land","description":"Conolophus subcristatus","iscompleted":false,"isarcaiv":true,"endDate":"4/16/2021"},
  {"title":"Python (unidentified)","description":"unavailable","iscompleted":false,"isarcaiv":false,"endDate":"2/18/2022"},
  {"title":"Civet (unidentified)","description":"unavailable","iscompleted":false,"isarcaiv":false,"endDate":"4/8/2021"},
  {"title":"Tawny frogmouth","description":"Podargus strigoides","iscompleted":true,"isarcaiv":false,"endDate":"10/25/2021"},]

  private _todoSobject:BehaviorSubject<Array<iToDo>>=new BehaviorSubject(this.mock);
  constructor() { }

  public getTodos():Observable<Array<iToDo>>
  {
      return this._todoSobject.asObservable()
  }
}
