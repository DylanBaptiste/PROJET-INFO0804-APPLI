import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState, useCallback} from 'react';
import { FlatList, Button, Text, View, SafeAreaView, RefreshControl, ScrollView} from 'react-native';
import 'react-native-gesture-handler';
import api from './api'
import styles from './Styles'

export default () => {

	const [isLoading, setLoading] = useState(true)
	const [refreshing, setRefreshing] = useState(false)
	const [data, setData] = useState({})

	const onRefresh = useCallback(() => {
		setRefreshing(true)
		loadBDD()
	}, [])

	const loadBDD = () => {
		setLoading(true)
		
		api.fakeAccept([
			{date: "fake date",temperature: 15,humidite: 70,pression: 1000,image: 'base64 ?' },
			{date: "fake sqdfdate",temperature: 16,humidite: 70,pression: 500, image:'bassdfsdfe64 ?' },
			{date: "fakesdfsd date",temperature: 12,humidite: 70,pression: 900, image:'bassdfsfe64 ?' },
			{date: "fake dsdfsdfate",temperature: 13,humidite: 70,pression: 1500,image: 'basesdfsdf64 ?'},
		], 1000)
			.then( (state) => {
				setData(state)
			})
			.catch(console.error)
			.finally(() =>{
				setLoading(false)
				setRefreshing(false)
			})
	}

	// componentDidMount
	useEffect(() => {
		
		loadBDD()

	}, []);

	return (
		<SafeAreaView  style={styles.container}>
			<StatusBar style="auto" />

			<ScrollView
				contentContainerStyle={styles.scrollView}
				refreshControl={ <RefreshControl refreshing={refreshing} onRefresh={onRefresh}/> }
			>
			
				{ isLoading 
				?
				<View>
					<Text>BDD</Text>
				</View>
				:
					<View>
						<Text>BDD</Text>
						<FlatList
							data={data}
							renderItem={( {item, index} ) => (<Text>{JSON.stringify(item)}</Text>)}
						/>
						
					</View>
				}
				</ScrollView>
		</SafeAreaView >
	)
}