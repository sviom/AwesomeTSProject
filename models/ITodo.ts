interface Todo {
    text: string;
    checked: boolean;
}

class TodoItemModel implements Todo {
    text: string;
    checked: boolean;
    id: string;

    constructor(text: string) {
        this.text = text;
        this.checked = false;
        this.id = Math.random().toString();
    }
}


export default TodoItemModel