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

    constructor(random?: number) {
        this.id = Math.random().toString();
        this.GridCells = new Array<GridCellModel>();

        const randomNum = Math.random() * 5;
        const randomNumFloor = Math.floor(randomNum); // 0 ~ 4 사이 숫자 추출

        this.GridCells[randomNumFloor] = new GridCellModel();
        this.GridCells[randomNumFloor].setNumber(2);
    }
}

export default GridRow