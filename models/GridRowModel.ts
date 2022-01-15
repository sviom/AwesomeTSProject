import { GridCellModel } from ".";

interface IGridRow {
    id: string;
    GridCells: Array<GridCellModel>;
    x_axis: number;
}

class GridRow implements IGridRow {
    id: string;
    x_axis: number = 0;
    GridCells: GridCellModel[];

    constructor() {
        this.id = Math.random().toString();
        this.GridCells = new Array<GridCellModel>();
    }
}

export default GridRow