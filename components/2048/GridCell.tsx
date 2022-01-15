import React from 'react';

import { StyleSheet, Text, useColorScheme, View, TouchableOpacity } from 'react-native';

import { Colors } from 'react-native/Libraries/NewAppScreen';
import { Grid, GridCellModel } from '../../models';

type GridCellProps = {
	item?: GridCellModel;
};

const TodoItem: React.FC<GridCellProps> = ({ children, item }) => {
	const isDarkMode = useColorScheme() === 'dark';
	const cell_text = item?.now_number;

	//  style={[styles.circle, { backgroundColor: item.color }]}
	return (
		<View style={styles.container}>
			<Text>{cell_text}</Text>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		// flex: 1,
		// borderBottomColor: '#bbb',
		// borderBottomWidth: StyleSheet.hairlineWidth,
		// flexDirection: 'row',
		// alignItems: 'center',
		// justifyContent: 'space-between',
		backgroundColor: '#13c276',
		width: 70,
		height: 70,
		margin: 10,
	},
	text: {
		flex: 5,
		fontWeight: '500',
		fontSize: 18,
		marginVertical: 20,
		width: 100,
	},
	circle: {
		width: 30,
		height: 30,
		borderRadius: 15,
		borderColor: 'blue',
		borderWidth: 2,
		marginRight: 20,
		marginLeft: 20,
	},
});

export default TodoItem;
