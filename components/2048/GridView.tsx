import React, { useState } from 'react';
import { StyleSheet, Text, useColorScheme, View, TextInput, ScrollView } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import { GridCell } from '.';
import { GridCellModel } from '../../models';

const styles = StyleSheet.create({
	card: {
		backgroundColor: '#fff',
		flex: 1,
		borderTopLeftRadius: 10, // to provide rounded corners
		borderTopRightRadius: 10, // to provide rounded corners
		marginLeft: 10,
		marginRight: 10,
	},
});

const GridView: React.FC = () => {
	const isDarkMode = useColorScheme() === 'dark';
	const defaultArray = [
		[0, 1, 2, 3],
		[5, 6, 7, 8],
		[9, 10, 11, 12],
		[13, 14, 15, 16],
	];

	// let test = new Array<Array<GridCell>>();
	// for (let rowIndex = 0; rowIndex < 4; rowIndex++) {
	// 	let sss = test[rowIndex];
	// 	sss = new Array<GridCell>();
	// 	for (let columnIndex = 0; columnIndex < 4; columnIndex++) {
	// 		sss.push(new GridCell());
	// 	}
	// }
	// const [todoItemList, setTodo] = useState<Array<TodoItemModel>>(defaultTodoList);

	return (
		<View style={styles.card}>
			{defaultArray.map((item) => {
				item.map((x) => {
					<GridCell item={new GridCellModel()}></GridCell>;
				});
			})}
		</View>
	);
};

export default GridView;
