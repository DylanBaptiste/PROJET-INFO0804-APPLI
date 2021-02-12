import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import api from './api'

function Porte(){
	const [isLoading, setLoading] = useState(true)
	const [state, setState] = useState('')

	useEffect(() => {

		api.fakeporte()
		.then( ({state}) => {
			console.log("test", state)
			setState(state)
		})
		.catch(console.error)
		.finally(() => setLoading(false))

	}, []);


	return (
		<View style={styles.container}>
			{ isLoading 
			?
				<Text>Chargement...</Text>
			:
				<Text>La porte est {state}</Text>
			}
			<StatusBar style="auto" />
		</View>
	)
}

const Cam = () => {

	return (
		<View style={styles.container}>
			<Text>yo je suis la camera</Text>
			<StatusBar style="auto" />
		</View>
	)
}

function BDD(){
	return (
		<View style={styles.container}>
			<Text>yo je suis BDD</Text>
			<StatusBar style="auto" />
		</View>
	)
}

const Tab = createBottomTabNavigator();

export default function App() {
  return (
	<NavigationContainer>
		<Tab.Navigator>
			<Tab.Screen name="Cam" component={Cam} />
			<Tab.Screen name="Porte" component={Porte} />
			<Tab.Screen name="BDD" component={BDD} />
		</Tab.Navigator>
	</NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
