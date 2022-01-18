import React, { useState } from 'react';
import { StyleSheet, Text, useColorScheme, View, TextInput, ScrollView, StyleProp, ViewStyle } from 'react-native';
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

	return (
		<View style={styles.card}>
			<Text>{Math.random()}</Text>
			{testArray.map((row, row_index) => {
				console.log('row : ', row);
				return (
					<View style={styles.row} key={`row_${Math.random()}`}>
						{row.GridCells.map((cell, column_index) => {
							return <GridCell item={cell} key={`test_${Math.random()}`}></GridCell>;
						})}
					</View>
				);
			})}
		</View>
	);
};

export default GridView;
