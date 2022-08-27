import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import ListingsScreen from '../screens/ListingsScreen'
import ListingDetailsScreen from '../screens/ListingDetailsScreen'

import { gestureEnabled } from 'react-native-gesture-handler'

const Stack = createStackNavigator()

const FeedNavigator = () => (
	<Stack.Navigator
		mode='modal'
		screenOptions={{
			gestureEnabled: true,
			headerShown: false,
		}}>
		<Stack.Screen name='Listings' component={ListingsScreen} />
		<Stack.Screen name='ListingDetails' component={ListingDetailsScreen} />
	</Stack.Navigator>
)

export default FeedNavigator
