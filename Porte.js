import { StatusBar } from 'expo-status-bar';
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
		
		api.fakeAccept({state: 'fermé', open: false}, 1000)
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
		
		api.fakeAccept({state: 'ouverte', open: true}, 1000)
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
		
		api.fakeAccept({state: 'fermé', open: false}, 1000)
			.then( (state) => {
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
						<Text>La porte est {state.state}</Text>
						<Button
							onPress={ ()=>{ state.open ? fermer() : ouvrir() }}
							title={state.open ? 'FERMER' : 'OUVRIR'}
							color={state.open ? 'red' : 'green'}
						/>
						
					</View>
				}
				</ScrollView>
		</SafeAreaView >
	)
}