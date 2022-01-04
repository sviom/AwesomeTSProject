import React from 'react';
import { StyleSheet, Text, useColorScheme, View, TextInput, Button, ScrollView, FlatList } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import { TodoItem } from '.';
import { TodoItemModel } from '../models';

type TodoListProps = {
	todoItemList: TodoItemModel[];
};

const TodoList: React.FC<TodoListProps> = ({ children, todoItemList }) => {
	const isDarkMode = useColorScheme() === 'dark';
	let test = todoItemList;

	return (
		// <ScrollView contentContainerStyle={styles.listContainer}>

		// </ScrollView>
		<FlatList
			data={todoItemList}
			renderItem={({ item }) => <TodoItem item={item} />}
			keyExtractor={(item) => item.id.toString()}
		/>
	);
};

const styles = StyleSheet.create({
	listContainer: {
		alignItems: 'center',
	},
});

export default TodoList;
