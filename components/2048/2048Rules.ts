import { GridRowModel, GridCellModel } from "../../models";
import { getRandomNumber } from "../../utils/NumberUtil";

const swipeDirections = {
    SWIPE_UP: 'SWIPE_UP',
    SWIPE_DOWN: 'SWIPE_DOWN',
    SWIPE_LEFT: 'SWIPE_LEFT',
    SWIPE_RIGHT: 'SWIPE_RIGHT',
};

const { SWIPE_UP, SWIPE_DOWN, SWIPE_LEFT, SWIPE_RIGHT } = swipeDirections;

function 다음셀과합치기(array: GridCellModel[], now_index: number = 0, completed_index: number = -1) {
    console.log("값들 : ", now_index, completed_index);


    if (completed_index == now_index) {
        // 다음셀과합치기(array, now_index, completed_index + 1);
        return;
    }

    if (now_index + 1 >= array.length) {
        다음셀과합치기(array, completed_index, completed_index);
        return;
    }

    if (completed_index > now_index) {
        다음셀과합치기(array, now_index + 1, completed_index);
        return;
    }

    if (completed_index + 1 == array.length)
        return;


    let nowCell: GridCellModel = array[now_index];
    let nextCell: GridCellModel = array[now_index + 1];

    if (nowCell.now_number == nextCell.now_number) {
        nowCell.setNumber(nowCell.now_number + nextCell.now_number);
        nextCell.setNumber(0);

    } else {
        if (nowCell.now_number == 0) {
            nowCell.setNumber(nextCell.now_number);
            nextCell.setNumber(0);
        } else {
            // completed_index = now_index;
        }
    }

    completed_index = now_index;

    다음셀과합치기(array, now_index + 1, completed_index);
    return;
}

function SwipeCells(gridArray: GridRowModel[], direction: string): GridRowModel[] {
    let tempArray: GridCellModel[] = [];
    switch (direction) {
        case SWIPE_UP:
            // 왼쪽으로 돌리기 -> 왼쪽으로 붙이기 -> 합치기 -> 왼쪽으로 붙이기 -> 오른쪽으로 돌리기
            // swipeFn(rotateRight(move(combine(move(rotateLeft(boxData))))));
            break;
        case SWIPE_DOWN:
            // swipeFn(rotateLeft(move(combine(move(rotateRight(boxData))))));
            break;
        case SWIPE_LEFT:
            // 모든 항목을 왼쪽으로 붙이기

            // 중간에 동일한 숫자가 잇으면 합치기, 맨 우측의 항목은 없애기

            break;
        case SWIPE_RIGHT:
            // swipeFn(reverse2d(move(combine(move(reverse2d(boxData))))));
            break;
    }

    // 모든 항목을 왼쪽으로 붙이기
    // 위로/아래로/오른쪽으로 스와이프 하는 항목들은 각각 회전 시켜 왼쪽으로 붙이고 다시 반전 
    gridArray.forEach((row, row_index) => {

        // 방향에 따라 한쪽으로 반전 시켜 시작
        tempArray = direction == "RIGHT" ? row.GridCells : row.GridCells.reverse();
        다음셀과합치기(tempArray, 0, -1);
        // 결과 값 다시 반전 
        tempArray = direction == "RIGHT" ? tempArray : tempArray.reverse();
    });

    return gridArray;
}

/**
 * 현재 배열에서 빈 항목을 찾아 숫자 부여해주는 함수
 * @returns 랜덤하게 부여된 숫자가 있는 새로운 배열
 */
function findEmptyCells(gridArray: GridRowModel[]): [GridRowModel[], boolean] {
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

    return [setRandom(gridArray, emptyArray), emptyArray.length > 0];
}

function setRandom(gridArray: GridRowModel[], emptyArray: Array<[number, number]>): GridRowModel[] {
    let new_row_index: number = getRandomNumber(emptyArray.length - 1);
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


function isGameOverState(gridArray: GridRowModel[]): boolean {
    // 상하좌우에 똑같은 값이 없으면 ?


    return true;
}


export {
    isGameOverState,
    findEmptyCells,
    SwipeCells
}