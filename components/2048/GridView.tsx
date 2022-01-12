import React, { useState } from 'react';
import { StyleProp, ViewStyle } from 'react-native';
import { StyleSheet, Text, useColorScheme, View, TextInput, ScrollView } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import { GridCell } from '.';
import { GridCellModel } from '../../models';

const styles = StyleSheet.create({
	card: {
		backgroundColor: '#fff',
		flex: 1,
		borderTopLeftRadius: 10, // to provide rounded corners
		borderTopRightRadius: 10, // to provide rounded corners
		marginLeft: 10,
		marginRight: 10,
		marginBottom: 10,
	},
});

interface IProps {
	style?: StyleProp<ViewStyle>;
}

const GridView: React.FC<IProps> = () => {
	const isDarkMode = useColorScheme() === 'dark';
	const defaultArray = [
		[0, 1, 2, 3],
		[5, 6, 7, 8],
		[9, 10, 11, 12],
		[13, 14, 15, 16],
	];

	// let test = new Array<Array<GridCell>>();
	// for (let rowIndex = 0; rowIndex < 4; rowIndex++) {
	// 	let sss = test[rowIndex];
	// 	sss = new Array<GridCell>();
	// 	for (let columnIndex = 0; columnIndex < 4; columnIndex++) {
	// 		sss.push(new GridCell());
	// 	}
	// }
	// const [todoItemList, setTodo] = useState<Array<TodoItemModel>>(defaultTodoList);

	// style={styles.card}
	return (
		<View style={styles.card}>
			<Text>ㅇㅇㅇㅇㅇㅇ </Text>
			{defaultArray.map((item) => {
				<Text>dfdfdfdfdffd</Text>
				item.map((x) => {
					<View>
						<Text>x</Text>
					</View>;
				});
			})}
		</View>
	);
};

export default GridView;
