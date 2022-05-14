import { NoteService } from './../domain/note-service';
import { ICreateNoteRequest } from './../dto/create-note-request';
import { ICreateNoteResponse } from '../dto/create-note-response';
import { RequestHandler } from "express";



export const getAllNotes: RequestHandler<never, ICreateNoteResponse[], never> = async (req, res) => {
    try {
        const noteService = new NoteService();
        const notes = await noteService.getAllNotes();
        console.log("Request completed.");
        return res.json(notes);
    } catch (error) {
        console.log(error);
    }
}

export const createNote: RequestHandler<never, ICreateNoteResponse, ICreateNoteRequest> = async (req, res) => {
    try {
        const createNoteRequest: ICreateNoteRequest = req.body;
        const noteService = new NoteService();
        const note = await noteService.createNote(createNoteRequest);
        console.log("Request completed.");
        return res.json(note);
    } catch (error) {
        console.log(error);
    }
}

export const NoteController = {
    createNote,
    getAllNotes
}