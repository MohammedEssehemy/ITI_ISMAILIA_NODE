import { Component, OnInit } from '@angular/core';
import { Input } from "@angular/core";
import {Note} from './../../models/note';

@Component({
  selector: 'app-note-item',
  templateUrl: './note-item.component.html',
  styleUrls: ['./note-item.component.css']
})
export class NoteItemComponent implements OnInit {
  @Input() note:Note;

  constructor() {
  }

  ngOnInit() {
  }

}
