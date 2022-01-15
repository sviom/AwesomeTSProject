import React, { useState } from 'react';
import { StyleSheet, Text, useColorScheme, View, TextInput, ScrollView, StyleProp, ViewStyle } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import { GridCell } from '.';
import { GridCellModel, GridRowModel } from '../../models';

const styles = StyleSheet.create({
	card: {
		backgroundColor: 'white',
		flex: 1,
		borderTopLeftRadius: 10, // to provide rounded corners
		borderTopRightRadius: 10, // to provide rounded corners
		marginLeft: 10,
		marginRight: 10,
		marginBottom: 10,
	},
	row: {
		flex: 1,
		flexDirection: 'row',
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
		[9, 10, new GridCellModel(), 12],
		[13, 14, 15, 16],
	];

	const testArray = new Array<GridRowModel>(4);

	return (
		<View style={styles.card}>
			{defaultArray.map((item, row_index) => {
				return (
					<View style={styles.row}>
						{item.map((x, column_index) => {
							return <GridCell></GridCell>;
						})}
					</View>
				);
			})}
		</View>
	);
};

export default GridView;
