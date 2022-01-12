import React from 'react';

import { StyleSheet, Text, useColorScheme, View, TouchableOpacity } from 'react-native';

import { Colors } from 'react-native/Libraries/NewAppScreen';
import { Grid, GridCellModel } from '../..//models';

type GridCellProps = {
	item: GridCellModel;
};

const TodoItem: React.FC<GridCellProps> = ({ children, item }) => {
	const isDarkMode = useColorScheme() === 'dark';

	//  style={[styles.circle, { backgroundColor: item.color }]}
	return (
		<View style={styles.container}>
			<Text>ddfdfd</Text>
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
		backgroundColor: 'red',
		width: 50,
		height: 50,
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
