import React, { useState } from 'react';
import { StyleSheet, Text, useColorScheme, View, TextInput, Button, Keyboard } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import { TodoItemModel } from '../models';

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

type todoProps = {
	onClick: (text: string) => void;
};

const TodoInput: React.FC<todoProps> = ({ children, onClick }) => {
	const isDarkMode = useColorScheme() === 'dark';
	const buttonClick = () => {
		console.log('button click : ', inputText);
		onClick(inputText); // todolist 에 저장
		setText(''); // 초기화
		Keyboard.dismiss(); // 키보드 닫기
	};
	const [inputText, setText] = useState<string>('');

	return (
		<View style={styles.inputContainer}>
			<TextInput
				style={styles.input}
				placeholder="Add an item!"
				placeholderTextColor={'#999'}
				autoCorrect={false}
				onChangeText={setText}
				value={inputText}
			/>
			<View style={styles.button}>
				<Button title={'ADD'} onPress={buttonClick} />
			</View>
		</View>
	);
};
export default TodoInput;
