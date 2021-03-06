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
	PanResponderGestureState,
} from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import { GridCell } from '.';
import { GridCellModel, GridRowModel } from '../../models';
import { getRandomNumber } from '../../utils/NumberUtil';
import { findEmptyCells, SwipeCells } from './2048Rules';
import GestureRecognizer from 'react-native-swipe-gestures';

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
		let row_index: number = getRandomNumber();
		let rowItem = testArray[row_index];
		rowItem.setRandomCell();
	}

	const [gridArray, setGrid] = useState<Array<GridRowModel>>(testArray);

	const addTodo = () => {
		// let newArray = [...gridArray, tempItem];
		// setGrid(newArray);
		let findResult = findEmptyCells(gridArray);
		let isNotGameOver = findResult[1];

		if (isNotGameOver) {
			let newGridArray = findResult[0];

			let newArray: Array<GridRowModel> = [...newGridArray]; // []; //
			setGrid(newArray);
		}
	};

	const onSwipe = (gestureName: string, gestureState: PanResponderGestureState) => {
		console.log('Swipe : ', gestureName);
		let tempArray = SwipeCells(gridArray, gestureName);
		let newArray: Array<GridRowModel> = [...tempArray]; // []; //
		setGrid(newArray);
	};

	return (
		<GestureRecognizer
			onSwipe={(direction, state) => onSwipe(direction, state)}
			config={{
				velocityThreshold: 0.3,
				directionalOffsetThreshold: 80,
			}}>
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
		</GestureRecognizer>
	);
};

export default GridView;
