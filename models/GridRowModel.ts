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
        this.GridCells = new Array<GridCellModel>(4);

        for (let index = 0; index < 4; index++) {
            let element = new GridCellModel();
            
            const randomNum = Math.random() * 5;
            const randomNumFloor = Math.floor(randomNum); // 0 ~ 4 사이 숫자 추출

            element.setNumber(randomNumFloor);
            this.GridCells.push(element);
        }

    }
}

export default GridRow