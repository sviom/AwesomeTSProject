import GridCell from "./GridCell";

class SizeSet {
    x: number = 0;
    y: number = 0;

    constructor(x: number = 0, y: number = 0) {
        this.x = x;
        this.y = y;
    }
}

interface IGrid {
    size: SizeSet;
    cells: GridCell[];

    moveCell(id: string, x: number, y: number): void;
}

class Grid implements IGrid {
    size: SizeSet = new SizeSet();
    cells: GridCell[] = new Array<GridCell>();

    moveCell(id: string, x: number, y: number): void {
        const cell = this.cells.find(x => x.id === id);
        cell?.moveAxis(x, y);
    }
}

export default Grid;