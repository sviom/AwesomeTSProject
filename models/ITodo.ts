interface Todo {
    text: string;
    checked: boolean;
}

class TodoItemModel implements Todo {
    text: string;
    checked: boolean;

    constructor(text: string) {
        this.text = text;
        this.checked = false;
    }
}


export default TodoItemModel