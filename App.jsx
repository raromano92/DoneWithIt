import { StatusBar } from 'expo-status-bar'
import {
	Dimensions,
	StyleSheet,
	Text,
	TouchableWithoutFeedback,
	TouchableOpacity,
	TouchableHighlight,
	TouchableNativeFeedback,
	Image,
	View,
	SafeAreaView,
	Button,
	Alert,
	TextInput,
	Switch,
} from 'react-native'
import { useDimensions, useDeviceOrientation } from '@react-native-community/hooks'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import { useState, useEffect } from 'react'
import { Permission } from 'react-native'
import * as ImagePicker from 'expo-image-picker'
import * as Permissions from 'expo-permissions'
import React from 'react'

import ListingDetailsScreen from './app/screens/ListingDetailsScreen'

import MessagesScreen from './app/screens/MessagesScreen'
import ListingEditScreen from './app/screens/ListingEditScreen'
import Screen from './app/components/Screen'
import ImageInputList from './app/components/ImageInput'
import LoginScreen from './app/screens/LoginScreen'
import ViewImageScreen from './app/screens/ViewImageScreen'
import ListingsScreen from './app/screens/ListingsScreen'
import AccountScreen from './app/screens/AccountScreen'
import ImageInput from './app/components/ImageInput'

const categories = [
	{ label: 'Furniture', value: 1 },
	{ label: 'Clothing', value: 2 },
	{ label: 'Cameras', value: 3 },
]

export default function App() {
return <ListingEditScreen />
}
