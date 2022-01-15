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
	const testArray = new Array<GridRowModel>(4);

	const randomNum = Math.random() * 5;
	const randomNumFloor = Math.floor(randomNum); // 0 ~ 4 사이 숫자 추출

	console.log('start');

	for (let iterator of testArray) {
		console.log("생성??");
		iterator = new GridRowModel();
	}

	console.log('Random number : ', randomNumFloor);

	// testArray[randomNumFloor] = new GridRowModel();

	return (
		<View style={styles.card}>
			{testArray.map((row, row_index) => {
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
