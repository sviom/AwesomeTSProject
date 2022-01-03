import React, { useState } from 'react';
import { StyleSheet, Text, useColorScheme, View, TextInput, Button } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import { TodoItemModel } from "../models"

const styles = StyleSheet.create({
	inputContainer: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
	},
	input: {
		flex: 1,
		padding: 20,
		borderBottomColor: '#bbb',
		borderBottomWidth: 1,
		fontSize: 24,
		marginLeft: 20,
	},
	button: {
		marginRight: 10,
	},
});

const TodoInput: React.FC = () => {
	const isDarkMode = useColorScheme() === 'dark';
	return (
		<View style={styles.inputContainer}>
			<TextInput
				style={styles.input}
				placeholder="Add an item!"
				placeholderTextColor={'#999'}
				autoCorrect={false}
			/>
			<View style={styles.button}>
				<Button title={'ADD'} />
			</View>
		</View>
	);
};

const addTodo = (text: string) => {
	const [todoItem, setTodo] = useState<TodoItemModel>();

	let tempItem = new TodoItemModel(text);

	setTodo(tempItem);
};

export default TodoInput;
