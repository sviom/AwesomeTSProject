import { tsConstructorType } from '@babel/types';
import React, { useState } from 'react';
import {
	StyleSheet,
	Text,
	useColorScheme,
	View,
	TextInput,
	ScrollView,
	StyleProp,
	ViewStyle,
	Button,
} from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import { GridCell } from '.';
import { GridCellModel, GridRowModel } from '../../models';

const styles = StyleSheet.create({
	card: {
		backgroundColor: 'white',
		flex: 1,
		borderTopLeftRadius: 10, // to provide rounded corners
		borderTopRightRadius: 10, // to provide rounded corners
		marginLeft: 10,
		marginRight: 10,
		marginBottom: 10,
	},
	row: {
		flex: 1,
		flexDirection: 'row',
	},
});

interface IProps {
	style?: StyleProp<ViewStyle>;
}

const GridView: React.FC<IProps> = () => {
	const isDarkMode = useColorScheme() === 'dark';
	let testArray: Array<GridRowModel> = new Array<GridRowModel>();

	for (let index = 0; index < 4; index++) {
		let test: GridRowModel = new GridRowModel();
		testArray.push(test);
	}

	for (let index = 0; index < 2; index++) {
		const randomNum = Math.random() * 16;
		const randomNumFloor = Math.floor(randomNum); // 0 ~ 16 사이 숫자 추출
		let row_index: number = 0;

		if (randomNumFloor < 4) {
			row_index = 0;
		} else if (randomNumFloor >= 4 && randomNumFloor < 8) {
			row_index = 1;
		} else if (randomNumFloor >= 8 && randomNumFloor < 12) {
			row_index = 2;
		} else {
			row_index = 3;
		}

		let rowItem = testArray[row_index];
		rowItem.setRandomCell();
	}

	const [gridArray, setGrid] = useState<Array<GridRowModel>>(testArray);

	const addTodo = () => {
		// let newArray = [...gridArray, tempItem];
		// setGrid(newArray);
		let tempArray = findEmptyCells();

		let newArray: Array<GridRowModel> = [...tempArray]; // []; //
		setGrid(newArray);
	};

	let emptyArray: Array<[number, number]> = [];

	/**
	 * 현재 배열에서 빈 항목을 찾아 숫자 부여해주는 함수
	 * @returns 랜덤하게 부여된 숫자가 있는 새로운 배열
	 */
	function findEmptyCells() {
		emptyArray = new Array<[number, number]>();
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

		return setRandom();
	}

	/**
	 * 랜덤한 숫자 받기
	 * @param max_value 원하는 최대값
	 * @returns 0과 max_value사이에 존재하는 랜덤한 값
	 */
	function getRandomNumber(max_value: number = 4) {
		const randomNum = Math.random() * Math.abs(max_value);
		const randomNumFloor = Math.floor(randomNum); // 0 ~ 3 사이 숫자 추출
		return randomNumFloor;
	}

	function setRandom() {
		let endWhile = true;
		do {
			let new_row_index: number = getRandomNumber();
			let empty_list = emptyArray.filter((x) => x[0] == new_row_index);
			let item = empty_list[getRandomNumber(empty_list.length)]; // 빈항목들 중에서 랜덤하게 가로 한줄 추출
			if (item) {
				// 가로에 있으면 세로에서 빈 항목을 찾음
				let existItem: GridRowModel = gridArray[item[0]];
				let result = true;
				do {
					result = existItem.findEmptyColumn();
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

	return (
		<View style={styles.card}>
			<Text>{Math.random()}</Text>
			{gridArray.map((row, row_index) => {
				return (
					<View style={styles.row} key={`row_${Math.random()}`}>
						{row.GridCells.map((cell, column_index) => {
							return <GridCell item={cell} key={`test_${Math.random()}`}></GridCell>;
						})}
					</View>
				);
			})}

			<Button title="ddfdfd" onPress={addTodo} />
		</View>
	);
};

export default GridView;
