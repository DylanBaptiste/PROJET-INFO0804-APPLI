import { StatusBar } from 'expo-status-bar';
import React, { useContext, useEffect, useState, useCallback} from 'react';
import { TextInput , Linking, Button, Text, View, SafeAreaView, RefreshControl, ScrollView} from 'react-native';
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
				<Text>YO je suis les  settings de l'app</Text>
				<Text>{JSON.stringify(config)}</Text>
				<TextInput
					style={{height: 40}}
					placeholder="Changer le host"
					onChangeText={host => setConfig({...config, host})}
					defaultValue={host}
				/>
			</View>
		</SafeAreaView>
	)
}