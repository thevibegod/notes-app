import Logger from '../../../logger';
import { IUpdateNoteRequest } from './../dto/update-note-request';
import { INoteRequestParams } from '../dto/note-params';
import { NoteService } from './../domain/note-service';
import { ICreateNoteRequest } from './../dto/create-note-request';
import { INoteResponse } from '../dto/note-response';
import { RequestHandler } from "express";



export const getAllNotes: RequestHandler<never, INoteResponse[], never> = async (req, res) => {
    try {
        const noteService = new NoteService();
        const notes = await noteService.getAllNotes();
        return res.status(200).json(notes);
    } catch (error) {
        Logger.error(error);
        return res.status(500).json();
    }
}

export const createNote: RequestHandler<never, INoteResponse, ICreateNoteRequest> = async (req, res) => {
    try {
        const createNoteRequest: ICreateNoteRequest = req.body;
        const noteService = new NoteService();
        const note = await noteService.createNote(createNoteRequest);
        return res.status(201).json(note);
    } catch (error) {
        Logger.error(error);
        return res.status(400).json();
    }
}

export const deleteNote: RequestHandler<INoteRequestParams, never, never> = async (req, res) => {
    try {
        const deleteNoteRequest: INoteRequestParams = req.params;
        const noteService = new NoteService();
        await noteService.deleteNote(deleteNoteRequest.noteId);
        return res.status(204).json();
    } catch (error) {
        Logger.error(error);
        return res.status(400).json();
    }
}

export const updateNote: RequestHandler<INoteRequestParams, INoteResponse, IUpdateNoteRequest> = async (req, res) => {
    try {
        const updateNoteParams: INoteRequestParams = req.params;
        const updateNoteRequest: IUpdateNoteRequest = req.body;
        const noteService = new NoteService();
        const updatedNote = await noteService.updateNote(updateNoteParams.noteId, updateNoteRequest);
        return res.status(200).json(updatedNote);
    } catch (error) {
        Logger.error(error);
        return res.status(400).json();
    }
}

export const NoteController = {
    createNote,
    getAllNotes,
    deleteNote,
    updateNote
}