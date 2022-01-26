interface IGridCell {
    id: string;
    color: string;
    x_axis: number;
    y_axis: number;

    moveAxis(x: number, y: number): boolean;
}

class GridCell implements IGridCell {
    id: string;
    color: string = "red";
    x_axis: number = 0;
    y_axis: number = 0;

    private _now_number: number = 0;
    public get now_number(): number {
        return this._now_number;
    }
    private set now_number(v: number) {
        this._now_number = v;
    }


    constructor() {
        this.id = Math.random().toString();
    }

    /**
     * 현재 셀을 해당 숫자들 만큼 더해서 움직임
     * @param x x 축으로 움직일 수
     * @param y y 축에 더할 숫자
     * @returns 성공 여부
     */
    moveAxis(x: number, y: number): boolean {
        this.x_axis += x;
        this.y_axis += y;

        return true;
    }

    setNumber(x: number) {
        this.now_number = x;
    }
}

export default GridCell