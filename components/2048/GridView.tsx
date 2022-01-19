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
		console.log('Number : ', randomNumFloor);
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

	let emptyArray: Array<[number, number]> = [];

	function findEmptyCells() {
		emptyArray = new Array<[number, number]>();

		testArray.forEach((row, row_index) => {
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
		console.log('empty array : ', emptyArray);

		setRandom();
	}

	function setRandom() {
		const randomNum = Math.random() * 16;
		const randomNumFloor = Math.floor(randomNum); // 0 ~ 16 사이 숫자 추출
		let new_row_index: number = 0;

		if (randomNumFloor < 4) {
			new_row_index = 0;
		} else if (randomNumFloor >= 4 && randomNumFloor < 8) {
			new_row_index = 1;
		} else if (randomNumFloor >= 8 && randomNumFloor < 12) {
			new_row_index = 2;
		} else {
			new_row_index = 3;
		}

		console.log('new index : ', new_row_index);

		let item = emptyArray.find((x) => x[0] == new_row_index);
		console.log('empty item : ', item);
		if (!item) {
			// 가로에 있으면 세로에서 빈 항목을 찾음
			let existItem = testArray[new_row_index];
			let result = false;
			do {
				let result = existItem.findEmptyColumn();
				console.log("result : ", result);
				if (result) {
					existItem.setRandomCell();
				}
			} while (result);
		} else {
			let rowItem = testArray[new_row_index];
			rowItem.setRandomCell();
		}

		console.log("test array : ", testArray);
	}

	return (
		<View style={styles.card}>
			<Text>{Math.random()}</Text>
			{testArray.map((row, row_index) => {
				return (
					<View style={styles.row} key={`row_${Math.random()}`}>
						{row.GridCells.map((cell, column_index) => {
							return <GridCell item={cell} key={`test_${Math.random()}`}></GridCell>;
						})}
					</View>
				);
			})}

			<Button title="ddfdfd" onPress={findEmptyCells} />
		</View>
	);
};

export default GridView;
