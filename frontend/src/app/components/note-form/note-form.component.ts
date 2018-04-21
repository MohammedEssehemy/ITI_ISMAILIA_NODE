import { Component, OnInit } from '@angular/core';
import {NoteService} from './../../services/note.service';
import { FlashMessagesService } from 'angular2-flash-messages';
@Component({
  selector: 'app-note-form',
  templateUrl: './note-form.component.html',
  styleUrls: ['./note-form.component.css']
})
export class NoteFormComponent implements OnInit {
  title: String;
  body: String;
  constructor(
    private noteService: NoteService,
    private _flashMessagesService: FlashMessagesService
  ) { }

  ngOnInit() {
  }

  handleCreateNote(){
    let {title, body} = this;
    this.noteService.createNote({title,body}).subscribe(res=>{
      this._flashMessagesService.show('note created successfully', { cssClass: 'alert-success', timeout: 5000 });
      debugger;
      this.noteService.noteList.push(res);
    },
  err=>{
    debugger;
  })
  }

}
