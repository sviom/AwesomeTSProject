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
        console.log("여기를 타는가?");
        const randomNum = Math.random() * 3;
        const randomNumFloor = Math.floor(randomNum); // 0 ~ 4 사이 숫자 추출
        let cell = this.GridCells[randomNumFloor];
        cell.setNumber(2);
    }

    findEmptyColumn() {
        const randomNum = Math.random() * 3;
        const randomNumFloor = Math.floor(randomNum); // 0 ~ 4 사이 숫자 추출
        let item = this.GridCells.find(x => x.y_axis == randomNumFloor);
        return item == undefined;
    }
}

export default GridRow