import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState, useCallback} from 'react';
import { Button, StyleSheet, Text, View, SafeAreaView, RefreshControl, ScrollView} from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import api from './api'

//TODO mettre dans des fichiers separés pour clareté
function Porte(){
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

const Cam = () => {

	return (
		<View style={styles.container}>
			<Text>Camera</Text>
			<StatusBar style="auto" />
		</View>
	)
}

function BDD(){
	return (
		<View style={styles.container}>
			<Text>Base de données</Text>
			<StatusBar style="auto" />
		</View>
	)
}

const Tab = createBottomTabNavigator();

export default function App() {
  return (
	<NavigationContainer>
		<Tab.Navigator tabBarOptions={{ activeTintColor: '#e91e63', }}>
			<Tab.Screen name="Porte" component={Porte} />
			<Tab.Screen name="Cam" component={Cam} />
			<Tab.Screen name="BDD" component={BDD} />
		</Tab.Navigator>
	</NavigationContainer>
  );
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
	scrollView: {
		flex: 1,
		backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'center',
	},
});
