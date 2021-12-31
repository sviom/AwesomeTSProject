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
import TodoItem from './components/TodoItem';

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
		backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
	};

	const todoItemList = []; //  new Array<typeof TodoItem>();
	let dataList = [];
	dataList = SampleData.todo_list;
	for (const iterator of dataList) {
		todoItemList.push(<TodoItem title={iterator.title}>{iterator.content}</TodoItem>);
	}
	[2, 3, 4, 5, 6, 7].forEach((x) => {
		console.log('ddd');
	});

	// const renderItem = ({item}) => <Item title={item.title} />;

	return (
		<SafeAreaView style={backgroundStyle}>
			<StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
			<ScrollView contentInsetAdjustmentBehavior="automatic" style={backgroundStyle}>
				{/* <Header /> */}
				<Text
					style={[
						styles.appTitle,
						{
							backgroundColor: isDarkMode ? Colors.black : Colors.white,
							color: isDarkMode ? Colors.white : Colors.black,
						},
					]}>
					This is Todo list
				</Text>
				<View
					style={{
						backgroundColor: isDarkMode ? Colors.black : Colors.white,
					}}>
					{todoItemList}

					{/* <FlatList data={SampleData.todo_list} renderItem={renderItem} /> */}

					<TodoItem title="ddd">dfdfd</TodoItem>
					<Section title="Step One">
						Edit <Text style={styles.highlight}>App.tsx</Text> to change this screen and then come back to
						see your edits.
					</Section>
					<Section title="See Your Changes">
						<ReloadInstructions />
					</Section>
					<Section title="Debug">
						<DebugInstructions />
					</Section>
					<Section title="Learn More">Read the docs to discover what to do next:</Section>
					<LearnMoreLinks />
				</View>
			</ScrollView>
		</SafeAreaView>
	);
};

const styles = StyleSheet.create({
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
