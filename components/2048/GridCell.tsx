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
	return <View style={styles.container}>{cell_text != 0 ? <Text style={styles.text}>{cell_text}</Text> : null}</View>;
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
		fontSize: 18,
		textAlign: 'center',
		justifyContent: 'center',
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
