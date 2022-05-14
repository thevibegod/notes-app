import { NoteModel } from './../repository/models/note';
import { NoteRepositoryImpl } from './../repository/note-repository-impl';
import { NoteRepository } from './../repository/note-repository';
import { ICreateNoteRequest } from './../dto/create-note-request';
import { Note } from './note';
export class NoteService{

    private noteRepository:NoteRepository;
    constructor(){
        this.noteRepository = new NoteRepositoryImpl();
    }

    private mapToDomainModel(model:NoteModel){
        return new Note(
            model.get('id') as String,
            model.get('text') as Text,
            model.get('completed') as Boolean
        );
    }

    public async getAllNotes(){
        try{
            const notes = await this.noteRepository.getAllNotes();
            const mappedNotes = notes.map(note=>this.mapToDomainModel(note));
            return mappedNotes;
        }
        catch(error){
            console.log(error);
        }
    }

    public async createNote(createNoteRequest:ICreateNoteRequest){
        try{
            const note = await this.noteRepository.createNote(createNoteRequest);
            return this.mapToDomainModel(note);
        }
        catch(error){
            console.log(error);
        }
    }
}