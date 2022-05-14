import { IUpdateNoteRequest } from './../dto/update-note-request';
import { NoteModel } from './../repository/models/note';
import { NoteRepositoryImpl } from './../repository/note-repository-impl';
import { NoteRepository } from './../repository/note-repository';
import { ICreateNoteRequest } from './../dto/create-note-request';
import { Note } from './note';
export class NoteService {

    private noteRepository: NoteRepository;
    constructor() {
        this.noteRepository = new NoteRepositoryImpl();
    }

    private mapToDomainModel(model: NoteModel) {
        return new Note(
            model.get('id') as String,
            model.get('text') as Text,
            model.get('completed') as Boolean
        );
    }

    public async getAllNotes() {
        const notes = await this.noteRepository.getAllNotes();
        const mappedNotes = notes.map(note => this.mapToDomainModel(note));
        return mappedNotes;
    }

    public async createNote(createNoteRequest: ICreateNoteRequest) {
        const note = await this.noteRepository.createNote(createNoteRequest);
        return this.mapToDomainModel(note);
    }

    public async deleteNote(noteId: String) {
        const note = await this.noteRepository.fetchNote(noteId);
        if (note === null)
            throw new Error("Bad request");
        await this.noteRepository.deleteNote(note);
    }

    public async updateNote(noteId: String, updateNoteRequest: IUpdateNoteRequest) {
        const note = await this.noteRepository.fetchNote(noteId);
        if (note === null)
            throw new Error("Bad request");
        const updatedNote = await this.noteRepository.updateNote(note, updateNoteRequest);
        return this.mapToDomainModel(updatedNote);
    }
}