import { Injectable } from '@angular/core';
import { Note } from './note';

@Injectable({
  providedIn: 'root'
})
export class NotesService {
  constructor() {
  }

  findAll():Note[] {
    return this.getAllIds()
      .map(id => this.findOne(id));
  }

  findOne(id:string): Note {
    return JSON.parse(localStorage.getItem(id));
  }

  save(note: Note) {
    if (!note.id) {
      note.id = `${Math.random() * 1000000}`;
      
      const allIds:string[] = this.getAllIds();
      const newIdList:string[] = [...allIds, note.id];
      localStorage.setItem('allIds', JSON.stringify(newIdList));
    }

    localStorage.setItem(note.id, JSON.stringify(note));
  }

  remove(id: string) {
    localStorage.removeItem(id);

    const allIds = this.getAllIds()
      .filter(noteId => noteId !== id);
    localStorage.setItem('allIds', JSON.stringify(allIds));
  }

  private getAllIds() : string[] {
    let result = localStorage.getItem('allIds');

    if (!result) {
      return [];
    }

    return JSON.parse(result);
  }
}
