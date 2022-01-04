import React, { useState } from 'react';
import { StyleSheet, Text, useColorScheme, View, TextInput, ScrollView } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import { TodoInput, TodoList } from '.';
import { TodoItemModel } from '../models';

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
	const [todoItemList, setTodo] = useState<Array<TodoItemModel>>(new Array<TodoItemModel>());

	const addTodo = (text: string) => {
		let tempItem = new TodoItemModel(text);
		todoItemList?.push(tempItem);

		let newArray = [...todoItemList, tempItem];
		setTodo(newArray);
	};

	return (
		<View style={styles.card}>
			{/* <TextInput style={styles.input} placeholder="Add an item!" /> */}
			<TodoInput onClick={addTodo} />
			<TodoList />
		</View>
	);
};

export default TodoItem;
