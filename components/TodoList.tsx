import React from 'react';
import { StyleSheet, Text, useColorScheme, View, TextInput, Button, ScrollView } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';

const TodoList: React.FC = () => {
	const isDarkMode = useColorScheme() === 'dark';
	return (
		<ScrollView contentContainerStyle={styles.listContainer}>
			<Text>TodoList</Text>
		</ScrollView>
	);
};

const styles = StyleSheet.create({
	listContainer: {
		alignItems: 'center',
	},
});

export default TodoList;
