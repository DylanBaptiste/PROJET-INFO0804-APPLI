import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import React from 'react'

import bd from './BDD'
import Cam from './Cam'
import Porte from './Porte'

const Tab = createBottomTabNavigator();

export default () => {
  return (
	<NavigationContainer>
		<Tab.Navigator tabBarOptions={{ activeTintColor: '#e91e63', }}>
			<Tab.Screen name="Porte" component={Porte} />
			<Tab.Screen name="Cam" component={Cam} />
			<Tab.Screen name="BDD" component={bd} />
		</Tab.Navigator>
	</NavigationContainer>
  )
}
