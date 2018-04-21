import { Component, OnInit } from '@angular/core';
import { Input } from "@angular/core";
import {Note} from './../../models/note';
import {NoteService} from './../../services/note.service';

@Component({
  selector: 'app-note-list',
  templateUrl: './note-list.component.html',
  styleUrls: ['./note-list.component.css']
})
export class NoteListComponent implements OnInit {
  noteList:Array<Note>;

  constructor(
    private noteService: NoteService
  ) {
      this.noteList  = this.noteService.noteList;
  }

  ngOnInit() {
  }

}
