import { IUpdateNoteRequest } from './../dto/update-note-request';
import { NoteModel } from './models/note';
import { ICreateNoteRequest } from './../dto/create-note-request';

export interface NoteRepository {
    createNote(createNoteAttributes: ICreateNoteRequest): Promise<NoteModel>;
    fetchNote(noteId: String): Promise<NoteModel | null>;
    getAllNotes(): Promise<NoteModel[]>;
    updateNote(note: NoteModel, updateNoteAttributes: IUpdateNoteRequest): Promise<NoteModel>;
    deleteNote(note: NoteModel): void;
}