import { ICreateNoteRequest } from './../dto/create-note-request';
import { NoteModel } from './models/note';
import { NoteRepository } from "./note-repository";
import { v4 as uuidv4 } from 'uuid';
import { IUpdateNoteRequest } from '../dto/update-note-request';

export class NoteRepositoryImpl implements NoteRepository {

    public getAllNotes(): Promise<NoteModel[]> {
        return NoteModel.findAll();
    }

    public fetchNote(noteId: String): Promise<NoteModel | null> {
        return NoteModel.findOne({
            where: {
                id: noteId
            }
        });
    }

    public createNote(createNoteAttributes: ICreateNoteRequest): Promise<NoteModel> {
        const id: String = uuidv4();
        const completed: Boolean = false;
        const note = NoteModel.create({ ...createNoteAttributes, id: id, completed: completed });
        return note;
    }

    public deleteNote(note: NoteModel): Promise<void> {
        return note.destroy();
    }

    public updateNote(note: NoteModel, updateNoteAttributes: IUpdateNoteRequest): Promise<NoteModel> {
        note.setAttributes(updateNoteAttributes);
        return note.save();
    }
}