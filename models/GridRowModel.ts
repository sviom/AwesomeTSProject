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
        console.log("생성자");
        this.id = Math.random().toString();
        this.GridCells = new Array<GridCellModel>();

        const randomNum = Math.random() * 5;
        const randomNumFloor = Math.floor(randomNum); // 0 ~ 4 사이 숫자 추출

        console.log("row random number : ", randomNumFloor);

        for (let index = 0; index < this.GridCells.length; index++) {
            let element = this.GridCells[index];
            element = new GridCellModel();
            element.setNumber(2);
        }

        // this.GridCells[randomNumFloor] = new GridCellModel();
        // this.GridCells[randomNumFloor].setNumber(2);
    }
}

export default GridRow