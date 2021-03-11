import { setStatusBarNetworkActivityIndicatorVisible, StatusBar } from 'expo-status-bar';
import React, { useEffect, useState, useCallback} from 'react';
import { Button, Text, View, SafeAreaView, RefreshControl, ScrollView} from 'react-native';
import 'react-native-gesture-handler';
import api from './api'
import styles from './Styles'

export default () => {
	const [isLoading, setLoading] = useState(true)
	const [refreshing, setRefreshing] = useState(false)
	const [state, setState] = useState({}) // le state de la porte

	const onRefresh = useCallback(() => {
		setRefreshing(true)
		loadPorte()
	}, [])

	const loadPorte = () => {
		setLoading(true)
		
		api.fakeAccept({timestamp: "2021-03-10T16:19:54.2568", ouverte: true}, 1000)
			.then( (state) => {
				setState(state)
			})
			.catch(console.error)
			.finally(() =>{
				setLoading(false)
				setRefreshing(false)
			})
	}

	const ouvrir = () => {
		setLoading(true)
		
		api.fakeAccept({timestamp: new Date(Date.now()).toISOString(), ouverte: true}, 1000)
			.then( (state) => {
				setState(state)
			})
			.catch(console.error)
			.finally(() =>{
				setLoading(false)
				setRefreshing(false)
			})
	}

	const fermer = () => {
		setLoading(true)
		
		api.fakeAccept({timestamp: new Date(Date.now()).toISOString(), ouverte: false}, 1000)
			.then( (state) => {
				console.log(state)
				setState(state)
			})
			.catch(console.error)
			.finally(() =>{
				setLoading(false)
				setRefreshing(false)
			})
	}

	// componentDidMount
	useEffect(() => {
		
		loadPorte()

	}, []);


	return (

		<SafeAreaView  style={styles.container}>
			<StatusBar style="auto" />

			<ScrollView
				contentContainerStyle={styles.scrollView}
				refreshControl={
				<RefreshControl
					refreshing={refreshing}
					onRefresh={onRefresh}
				/>
				}
			>
			
				{ isLoading 
				?
					<View>
						<Text>La porte est ...</Text>
					</View>
				:
					<View>
						<View>
							{console.log(state)}
							<Text>La porte est {state.ouverte ? 'OUVERTE' : 'FERMEE'} depuis {state.timestamp}</Text>
						</View>
						<Button
							onPress={ ()=>{ state.ouverte ? fermer() : ouvrir() }}
							title={state.ouverte ? 'FERMER' : 'OUVRIR'}
							color={state.ouverte ? 'red' : 'green'}
						/>
						
					</View>
				}
				</ScrollView>
		</SafeAreaView >
	)
}