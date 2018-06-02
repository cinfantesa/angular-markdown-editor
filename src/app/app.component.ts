import { Component, OnInit } from '@angular/core';
import { not } from '@angular/compiler/src/output/output_ast';
import { Note } from './note';
import { NotesService } from './notes.service';

@Component({
  selector: 'markdown-editor',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title: string = 'Markdown editor';
  note: Note = null;
  notes: Note[] = [];

  constructor(private notesService:NotesService) {
  }

  ngOnInit() {
    this.loadNotes();
  }

  noteChanged(note: Note): void {
    this.notesService.save(note);
    this.editNote(note.id);
  }

  createNote() {
    const newNote: Note = {
      title: `Nota ${this.notes.length + 1}`,
      value: ''
    }

    this.notesService.save(newNote);
    this.loadNotes();
  }

  editNote(noteId: string) {
    this.note = this.notesService.findOne(noteId);
  }

  deleteNote(noteId: string) {
    this.notesService.remove(noteId);
    this.loadNotes();
  }

  private loadNotes():void {
    this.notes = this.notesService.findAll();
  }
}
