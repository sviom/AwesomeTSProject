/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
import { SafeAreaView, ScrollView, StatusBar, StyleSheet, Text, useColorScheme, View, FlatList } from 'react-native';

import {
	Colors,
	DebugInstructions,
	Header,
	LearnMoreLinks,
	ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import SampleData from './sample_data/sample_todo_list.json';
// import TodoItem from './components/TodoItem';
import { TodoItem, TodoCardView } from './components';
import { GridView } from './components/2048';

const Section: React.FC<{
	title: string;
}> = ({ children, title }) => {
	const isDarkMode = useColorScheme() === 'dark';
	return (
		<View style={styles.sectionContainer}>
			<Text
				style={[
					styles.sectionTitle,
					{
						color: isDarkMode ? Colors.white : Colors.black,
					},
				]}>
				{title}
			</Text>
			<Text
				style={[
					styles.sectionDescription,
					{
						color: isDarkMode ? Colors.light : Colors.dark,
					},
				]}>
				{children}
			</Text>
		</View>
	);
};

// const Item = ({title}) => (
//     <View style={styles.item}>
//         <Text style={styles.title}>{title}</Text>
//     </View>
// );

const App = () => {
	const isDarkMode = useColorScheme() === 'dark';

	const backgroundStyle = {
		// backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
	};

	return (
		<SafeAreaView style={[styles.container, backgroundStyle]}>
			<Text
				style={[
					styles.appTitle,
					{
						backgroundColor: isDarkMode ? Colors.black : Colors.white,
						color: isDarkMode ? Colors.white : Colors.black,
					},
				]}>
				This IS 2048
			</Text>
			{/* <TodoCardView /> */}
			<GridView />

			{/* <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} /> */}
		</SafeAreaView>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#3143e8',
	},
	appTitle: {
		color: '#fff',
		fontSize: 36,
		marginTop: 30,
		marginBottom: 30,
		fontWeight: '300',
		textAlign: 'center',
		backgroundColor: '#3143e8',
	},
	sectionContainer: {
		marginTop: 32,
		paddingHorizontal: 24,
	},
	sectionTitle: {
		fontSize: 24,
		fontWeight: '600',
	},
	sectionDescription: {
		marginTop: 8,
		fontSize: 18,
		fontWeight: '400',
	},
	highlight: {
		fontWeight: '700',
	},
});

export default App;
