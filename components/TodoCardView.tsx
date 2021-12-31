import React from 'react';
import { StyleSheet, Text, useColorScheme, View, TextInput } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';

const styles = StyleSheet.create({
	card: {
		backgroundColor: '#fff',
		flex: 1,
		borderTopLeftRadius: 10, // to provide rounded corners
		borderTopRightRadius: 10, // to provide rounded corners
		marginLeft: 10,
		marginRight: 10,
	},
	input: {
		padding: 20,
		borderBottomColor: '#bbb',
		borderBottomWidth: 1,
		fontSize: 24,
		marginLeft: 20,
	},
});

const TodoItem: React.FC = () => {
	const isDarkMode = useColorScheme() === 'dark';
	return (
		<View style={styles.card}>
			<TextInput style={styles.input} placeholder="Add an item!" />
		</View>
	);
};

export default TodoItem;
