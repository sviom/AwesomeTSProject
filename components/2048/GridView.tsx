import React, { useState } from 'react';
import { StyleSheet, Text, useColorScheme, View, TextInput, ScrollView } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import { Grid, GridCell } from '../../models';

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

const TodoItem: React.FC = () => {
	const isDarkMode = useColorScheme() === 'dark';

	let test = new Array<Array<GridCell>>();
	for (let rowIndex = 0; rowIndex < 4; rowIndex++) {
		let sss = test[rowIndex];
		for (let columnIndex = 0; columnIndex < 4; columnIndex++) {
			sss.push(new GridCell());
		}
	}
	// const [todoItemList, setTodo] = useState<Array<TodoItemModel>>(defaultTodoList);

	return <View style={styles.card}>{test}</View>;
};

export default TodoItem;
