import { StatusBar } from 'expo-status-bar';
import React, { useContext, useEffect, useState, useCallback} from 'react';
import {Modal, Pressable,  TextInput , Linking, Button, Text, View, SafeAreaView, RefreshControl, ScrollView} from 'react-native';
import 'react-native-gesture-handler';
import api from './api'
import styles from './Styles'

import ConfigProvider from './ConfigProvider'
import { ConfigContext } from "./ConfigProvider";

export default () => {
	
	const {config, setConfig} = useContext(ConfigContext)

	const {protocol, host, port} = config

	return (
		<SafeAreaView  style={styles.container}>
			<StatusBar style="auto" />

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
						onChangeText={host =>{
							console.log(host)
							//setConfig({...config, host})
						}}
						defaultValue={host}
					/>
				</View>

				<View>
					<Text>Port:</Text>
					<TextInput
						style={{height: 40}}
						placeholder="80"
						onChangeText={port =>{
							console.log(port)
							setConfig({...config, port})
						}}
						defaultValue={port}
					/>
				</View>
				
				
				
			</View>
			
		</SafeAreaView>
	)
}