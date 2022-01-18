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
	let testArray: Array<GridRowModel> = new Array<GridRowModel>(4);
	let test2Array: Array<Number> = new Array<Number>(4);

	const randomNum = Math.random() * 5;
	const randomNumFloor = Math.floor(randomNum); // 0 ~ 4 사이 숫자 추출

	for (let index = 0; index < 4; index++) {
		let test = new GridRowModel();
		testArray.push(test);
	}

	// // testArray[randomNumFloor] = new GridRowModel();
	console.log('array 122: ', test2Array);
	// for (let iterator of testArray) {
	// 	iterator = new GridRowModel();
	// 	console.log("두번쨰 : ", iterator.id)
	// }

	return (
		<View style={styles.card}>
			<Text>{Math.random()}</Text>
			{testArray.map((row, row_index) => {
				console.log('row : ', row);
				return (
					<View style={styles.row}>
						{row.GridCells.map((cell, column_index) => {
							return <GridCell item={cell}></GridCell>;
						})}
					</View>
				);
			})}
		</View>
	);
};

export default GridView;
