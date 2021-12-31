import React from 'react';
import { StyleSheet, Text, useColorScheme, View, TextInput, ScrollView } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import { TodoInput } from '.';

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
	return (
		<View style={styles.card}>
			{/* <TextInput style={styles.input} placeholder="Add an item!" /> */}
			<TodoInput />
			<ScrollView>
				<Text>To do list </Text>
			</ScrollView>
		</View>
	);
};

export default TodoItem;
