import { StatusBar } from 'expo-status-bar';
import React, { useContext, useEffect, useState, useCallback} from 'react';
import { Linking, Button, Text, View, SafeAreaView, RefreshControl, ScrollView} from 'react-native';
import 'react-native-gesture-handler';
import api from './api'
import styles from './Styles'

import ConfigProvider from './ConfigProvider'
import { ConfigContext } from "./ConfigProvider";

export default () => {
	const camUri = "http://c1test.mdr"
	const {config, setConfig} = useContext(ConfigContext)

	return (
		<SafeAreaView  style={styles.container}>
			<StatusBar style="auto" />
			<View>
				<Button title={camUri} onPress={ ()=>{ Linking.openURL(camUri) }} />
				<Text>L'ip de l'api est {config.api}</Text>
			</View>
		</SafeAreaView>
	)
}