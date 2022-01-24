import { GridRowModel } from "../../models";
import { getRandomNumber } from "../../utils/NumberUtil";

function isGameOverState(gridArray: GridRowModel[]): boolean {
    // 상하좌우에 똑같은 값이 없으면 ?


    return true;
}


/**
 * 현재 배열에서 빈 항목을 찾아 숫자 부여해주는 함수
 * @returns 랜덤하게 부여된 숫자가 있는 새로운 배열
 */
function findEmptyCells(gridArray: GridRowModel[]) {
    let emptyArray = new Array<[number, number]>();
    gridArray.forEach((row, row_index) => {
        row.GridCells.forEach((cell, column_index) => {
            if (cell.now_number == 0) {
                //setRandom();
                let sss: [number, number] = [0, 0];
                sss[0] = row_index;
                sss[1] = column_index;
                emptyArray.push(sss);
            }
        });
    });

    return setRandom(gridArray, emptyArray);
}

function setRandom(gridArray: GridRowModel[], emptyArray: Array<[number, number]>): GridRowModel[] {
    let new_row_index: number = getRandomNumber(emptyArray.length);
    const emptyCellInfo = emptyArray[new_row_index];
    const row = gridArray[emptyCellInfo[0]];
    const cell = row.GridCells[emptyCellInfo[1]];
    cell.setNumber(2);

    return gridArray;

    let endWhile = true;
    do {
        let new_row_index: number = getRandomNumber(emptyArray.length);


        const ii = emptyArray[new_row_index];
        const row = gridArray[ii[0]];
        const column = row.GridCells[ii[1]];

        column.setNumber(2);


        let empty_list = emptyArray.filter((x) => x[0] == new_row_index);
        let item = empty_list[getRandomNumber(empty_list.length)]; // 빈항목들 중에서 랜덤하게 가로 한줄 추출
        if (item) {
            // 가로에 있으면 세로에서 빈 항목을 찾음
            let existItem: GridRowModel = gridArray[item[0]];
            let result = true;
            do {
                result = existItem.findHasEmptyColumn();
                if (result) {
                    existItem.setRandomCell(); // 가로/세로에 빈 항목 있음 -> 랜덤하게 셀 부여해주어야 하는 부분
                    endWhile = false;
                    result = false;
                }
            } while (result);
        } else {
            // GAME OVER --> 빈 칸이 없음
            endWhile = false;
        }
    } while (endWhile);
    return gridArray;
}

export {
    isGameOverState,
    findEmptyCells
}