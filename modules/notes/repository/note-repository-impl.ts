import { ICreateNoteRequest } from './../dto/create-note-request';
import { NoteModel } from './models/note';
import { NoteRepository } from "./note-repository";
import { Note } from '../domain/note';
import { identity } from '../../../cast-to';
import { v4 as uuidv4 } from 'uuid';

export class NoteRepositoryImpl implements NoteRepository {
    public getAllNotes(): Promise<NoteModel[]> {
        return NoteModel.findAll();
    }

    // private mapToDomainModel = async (model: NoteModel) => {
    //     return identity<NoteModel>({
    //       id: model.id,
    //       text: model.text,
    //       completed: model.completed
    //     });
    //   };

    public createNote(createNoteAttributes: ICreateNoteRequest): Promise<NoteModel> {
        const id: String = uuidv4();
        const completed: Boolean = false;
        const note = NoteModel.create({ ...createNoteAttributes, id: id, completed: completed });
        return note;
    }
}