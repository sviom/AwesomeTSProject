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
	const defaultTodoList = new Array<TodoItemModel>();

	const isDarkMode = useColorScheme() === 'dark';
	defaultTodoList.push(new TodoItemModel('test'));
	defaultTodoList.push(new TodoItemModel('test'));
	defaultTodoList.push(new TodoItemModel('test'));

	// new Array<TodoItemModel>()
	const [todoItemList, setTodo] = useState<Array<TodoItemModel>>(defaultTodoList);

	const addTodo = (text: string) => {
		let tempItem = new TodoItemModel(text);
		// todoItemList?.push(tempItem);

		let newArray = [...todoItemList, tempItem];
		setTodo(newArray);
	};

	return (
		<View style={styles.card}>
			{/* <TextInput style={styles.input} placeholder="Add an item!" /> */}
			<TodoInput onClick={addTodo} />
			<TodoList todoItemList={todoItemList} />
		</View>
	);
};

export default TodoItem;
