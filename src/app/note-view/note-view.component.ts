import { Component, OnInit, Input, Output, EventEmitter, OnChanges, SimpleChanges } from '@angular/core';
import { Note } from '../note';

@Component({
  selector: 'note-view',
  templateUrl: './note-view.component.html',
  styleUrls: ['./note-view.component.css']
})
export class NoteViewComponent implements OnInit, OnChanges {
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

  noteChanged(value: Note){
    this.onNoteChanged.emit(value);
  }
}
