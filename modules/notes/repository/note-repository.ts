import { NoteModel } from './models/note';
import { Note } from '../domain/note';
import { ICreateNoteRequest } from './../dto/create-note-request';

export interface NoteRepository {
    createNote(createNoteAttributes: ICreateNoteRequest): Promise<NoteModel>;
    getAllNotes(): Promise<NoteModel[]>;
   // editNote():Promise<NoteModel>;
}