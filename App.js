import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import React, { createContext, useState, useContext, useEffect } from 'react'
import { LogBox , Linking, Button, Text, View, SafeAreaView, RefreshControl, ScrollView} from 'react-native';

import bd from './BDD'
import Cam from './Cam'
import Porte from './Porte'
import Settings from './Settings'

import ConfigProvider from './ConfigProvider'
import { ConfigContext } from "./ConfigProvider";
const Tab = createBottomTabNavigator();


export default () => {
  return (
	<ConfigProvider>
		
		<NavigationContainer>
			<Settings/>
			<Tab.Navigator tabBarOptions={{ activeTintColor: '#e91e63', }}>
				<Tab.Screen name="Porte" component={Porte} />
				<Tab.Screen name="Cam" component={Cam} />
				<Tab.Screen name="BDD" component={bd} />
			</Tab.Navigator>
		</NavigationContainer>
	</ConfigProvider>
  )
}
