import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Note } from '../note';

@Component({
  selector: 'notes-list',
  templateUrl: './notes-list.component.html',
  styleUrls: ['./notes-list.component.css']
})
export class NotesListComponent implements OnInit {
  @Input() notes: Note[] = [];
  @Output() onNewNote: EventEmitter<void> = new EventEmitter<void>();
  @Output() onEditNote: EventEmitter<string> = new EventEmitter<string>();
  @Output() onDeleteNote: EventEmitter<string> = new EventEmitter<string>();

  constructor() {
  }

  ngOnInit() {
  }

  newNote() {
    this.onNewNote.emit();
  }

  editNote(note: Note) {
    this.onEditNote.emit(note.id);
  }

  deleteNote(note: Note) {
    this.onDeleteNote.emit(note.id);
  }
}
