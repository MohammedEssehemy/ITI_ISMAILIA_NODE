import { Component, OnInit } from '@angular/core';
import {Note} from './../../models/note';
import {NoteService} from './../../services/note.service';

@Component({
  selector: 'app-note-page',
  templateUrl: './note-page.component.html',
  styleUrls: ['./note-page.component.css']
})
export class NotePageComponent implements OnInit {

  constructor(
    public noteService: NoteService
  ) {

    this.noteService.getNotes().subscribe(res=>{
      res.forEach(note=>{
        this.noteService.noteList.push(note);
      });
    })
  }

  ngOnInit() {
  }

}
