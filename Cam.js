import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState, useCallback} from 'react';
import { Button, Text, View, SafeAreaView, RefreshControl, ScrollView} from 'react-native';
import 'react-native-gesture-handler';
import api from './api'
import styles from './Styles'

export default () => {

	return (
		<View style={styles.container}>
			<Text>Camera</Text>
			<StatusBar style="auto" />
		</View>
	)
}