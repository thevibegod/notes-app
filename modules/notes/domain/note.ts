export class Note {

    constructor(id: String,text: Text,completed: Boolean){
        this.id = id;
        this.text = text;
        this.completed = completed;
    }

    id: String;
    text: Text;
    completed: Boolean;
}