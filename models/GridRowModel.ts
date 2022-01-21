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
        for (let index = 0; index < 4; index++) {
            let element = new GridCellModel();
            this.GridCells.push(element);
        }
    }

    setRandomCell() {
        let setCompleted = true;
        do {
            const randomNum = Math.random() * 4;
            const randomNumFloor = Math.floor(randomNum); // 0 ~ 4 사이 숫자 추출
            let cell = this.GridCells[randomNumFloor];
            if (cell.now_number == 0) {
                cell.setNumber(2);
                setCompleted = false;
            }
        } while (setCompleted)
    }

    findEmptyColumn() {
        let item = this.GridCells.filter(x => x.now_number == 0);
        return item.length > 0;
    }
}

export default GridRow