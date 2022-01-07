interface IGridCell {
    id: string;
    color: string;
    x_axis: number;
    y_axis: number;

    moveAxios(x: number, y: number): boolean;
}

class GridCell implements IGridCell {
    id: string;
    color: string = "red";
    x_axis: number = 0;
    y_axis: number = 0;

    constructor() {
        this.id = Math.random().toString();
    }

    moveAxios(x: number, y: number): boolean {
        this.x_axis = x;
        this.y_axis = y;

        return true;
    }
}

export default GridCell