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

const [todoItem, setTodo] = useState<TodoItemModel>();

const TodoItem: React.FC = () => {
	const isDarkMode = useColorScheme() === 'dark';
	return (
		<View style={styles.card}>
			{/* <TextInput style={styles.input} placeholder="Add an item!" /> */}
			<TodoInput onClick={addTodo} />
			<TodoList />
		</View>
	);
};

const addTodo = (text: string) => {
	console.log('add todo click : ', text);
	let tempItem = new TodoItemModel(text);
	console.log('created model : ', tempItem);

	setTodo(tempItem);
};

export default TodoItem;
