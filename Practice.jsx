// import { StatusBar } from 'expo-status-bar'
// import {
// 	Dimensions,
// 	StyleSheet,
// 	Text,
// 	TouchableWithoutFeedback,
// 	TouchableOpacity,
// 	TouchableHighlight,
// 	TouchableNativeFeedback,
// 	Image,
// 	View,
// 	SafeAreaView,
// 	Button,
// 	Alert,
// 	TextInput,
// 	Switch,
// } from 'react-native'
// import { useDimensions, useDeviceOrientation } from '@react-native-community/hooks'
// import { MaterialCommunityIcons } from '@expo/vector-icons'
// import { useState, useEffect } from 'react'
// import { Permission } from 'react-native'
// import * as ImagePicker from 'expo-image-picker'
// import * as Permissions from 'expo-permissions'
// import React from 'react'

// import ListingDetailsScreen from './app/screens/ListingDetailsScreen'

// import MessagesScreen from './app/screens/MessagesScreen'
// import ListingEditScreen from './app/screens/ListingEditScreen'
// import Screen from './app/components/Screen'
// import ImageInputList from './app/components/ImageInput'
// import LoginScreen from './app/screens/LoginScreen'
// import ViewImageScreen from './app/screens/ViewImageScreen'
// import ListingsScreen from './app/screens/ListingsScreen'
// import AccountScreen from './app/screens/AccountScreen'
// import ImageInput from './app/components/ImageInput'

// <Screen>
// 	<AppPicker
// 		selectedItem={category}
// 		onSelectItem={(item) => setCategory(item)}
// 		items={categories}
// 		icon="apps"
// 		placeholder="Category"
// 	/>
// 	<AppTextInput
// 		icon="email"
// 		placeholder="Email"
// 	/>
// </Screen>

// <Switch
// 			value={isNew}
// 			onValueChange={(newValue) => setIsNew(newValue)}
// 		/>

// <Text>{firstName}</Text>
// <TextInput
// 	keyboardType="default"
// 	clearButtonMode="always" // iOS only
// 	secureTextEntry={true} // for passwords
// 	maxLength={50}
// 	onChangeText={(text) => setFirstName(text)}
// 	placeholder="First Name"
// 	style={{
// 		borderBottomColor: "#ccc",
// 		borderBottomWidth: 1,
// 	}}
// />

{
	/* <AppButton
				title="Login"
				onPress={() => console.log("Tapped")}
			/> */
}
{
	/* <AppText>I love React Native!</AppText>
			<MaterialCommunityIcons
				name="email"
				size={80}
				color="goldenrod"
			/> */
}
// </View>

// console.log(Dimensions.get("screen"))
// console.log(useDimensions())
// console.log(useDeviceOrientation())
// const { landscape } = useDeviceOrientation()

// const handlePress = () => console.log("Text pressed")

// return (
// 	<SafeAreaView style={styles.container}>
// 		<Button
// 			color="green"
// 			title="Click Me"
// 			onPress={() =>
// 				Alert.alert("My Title", "My message", [
// 					{ text: "Yes", onPress: () => console.log("Yes") },
// 					{ text: "No", onPress: () => console.log("No") },
// 				])
// 			}
// 		/>

// 		<Text
// 			numberOfLines={1}
// 			onPress={handlePress}
// 			style={styles.setFontSizeTwo}>
// 			abcdefg
// 		</Text>
// 		<TouchableHighlight onPress={() => console.log("Tapped picture")}>
// 			<Image
// 				blurRadius={0}
// 				fadeDuration={1000}
// 				source={{ width: 200, height: 300, uri: "https://picsum.photos/id/237/200/300" }}
// 			/>
// 		</TouchableHighlight>
// 		<TouchableNativeFeedback>
// 			<View style={{ width: 200, height: 70, backgroundColor: "dodgerblue" }}></View>
// 		</TouchableNativeFeedback>
// 		<StatusBar style="auto" />
// 		<View
// 			style={{
// 				backgroundColor: "red",
// 				width: "30%",
// 				height: landscape ? "10%" : "20%",
// 				flex: 1,
// 			}}>
// 			<View
// 				style={{
// 					backgroundColor: "yellow",
// 					flex: 1,
// 					flexDirection: "column",
// 					width: "40%",
// 				}}></View>
// 		</View>
// 	</SafeAreaView>
