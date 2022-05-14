import { createNote, getAllNotes } from "./controllers/note";
import express from 'express';

const noteRouter = express.Router();


noteRouter.get('/',getAllNotes);
noteRouter.post('/',createNote);


export default noteRouter;