import { createNote, deleteNote, getAllNotes, updateNote } from "./controllers/note";
import express from 'express';

const noteRouter = express.Router();


noteRouter.get('/',getAllNotes);
noteRouter.post('/',createNote);
noteRouter.delete('/:noteId',deleteNote);
noteRouter.patch('/:noteId',updateNote);

export default noteRouter;