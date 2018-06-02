import { Component, OnInit, Input, Output, EventEmitter, OnChanges, SimpleChanges } from '@angular/core';
import { Note } from '../../note';

@Component({
  selector: 'note-form',
  templateUrl: './note-form.component.html',
  styleUrls: ['./note-form.component.css']
})
export class NoteFormComponent implements OnInit, OnChanges {
  @Input() note: Note;
  @Output() onNoteChanged: EventEmitter<Note> = new EventEmitter<Note>();

  constructor() { }

  ngOnInit() {
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['note'] && changes['note'].currentValue) {
      const noteChanged: Note = changes['note'].currentValue;
      this.note = {...noteChanged};
    }
  }

  noteChanged(value: string) {
    this.note.value = value;
    this.onNoteChanged.emit(this.note);
  }
}
