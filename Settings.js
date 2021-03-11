import { StatusBar } from 'expo-status-bar';
import React, { useContext } from 'react';
import {TextInput , Text, View, SafeAreaView, } from 'react-native';
import 'react-native-gesture-handler';
import styles from './Styles'

import { ConfigContext } from "./ConfigProvider";

/**
 * composant qui permet de modifier la configuration qui est paratger à travers toute l'application
 */

export default () => {
	
	const {config, setConfig} = useContext(ConfigContext) // recuperation de la configuration

	const {protocol, host, port} = config // destructuring

	return (
		<SafeAreaView  style={styles.container}>
			<StatusBar style="auto" />
			{/* suite de TextInput pour modifier les options de configuration*/}
			<View>
				<Text>Parametres</Text>
				<View>
					<Text>Protocol:</Text>
					<TextInput
						style={{height: 40}}
						placeholder="http"
						onChangeText={protocol => setConfig({...config, protocol})}
						defaultValue={protocol}
					/>
				</View>

				<View>
					<Text>IP:</Text>
					<TextInput
						style={{height: 40}}
						placeholder="127.0.0.1"
						onChangeText={host => setConfig({...config, host}) }
						defaultValue={host}
					/>
				</View>

				<View>
					<Text>Port:</Text>
					<TextInput
						style={{height: 40}}
						placeholder="80"
						onChangeText={port => setConfig({...config, port})}
						defaultValue={port}
					/>
				</View>
				
				
				
			</View>
			
		</SafeAreaView>
	)
}