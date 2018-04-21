import { Injectable } from '@angular/core';
import { Http, Headers } from "@angular/http";
import 'rxjs/add/operator/map'
import { Note } from "./../models/note";
import { UserService } from './user.service';
import {environment} from './../../environments/environment';

@Injectable()
export class NoteService {
  noteList: Array<Note> = [];
  constructor(
    private http: Http,
    private userService: UserService
  ) { }


  createNote(note: Note){
    let token = this.userService.getToken();
    let headers = new Headers();
    headers.append('content-type','application/json');
    headers.append('authorization',token);
    return this.http.post(`${environment.baseUrl}/api/note`,note,{headers})
    .map(res=>res.json());
  }


  getNotes(){
    let token = this.userService.getToken();
    let headers = new Headers();
    headers.append('authorization',token);
    return this.http.get(`${environment.baseUrl}/api/note`,{headers})
    .map(res=>res.json());
  }


}
