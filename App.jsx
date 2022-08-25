import { StatusBar } from "expo-status-bar"
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
} from "react-native"
import { useDimensions, useDeviceOrientation } from "@react-native-community/hooks"
import { MaterialCommunityIcons } from "@expo/vector-icons"
import { useState } from "react"

import WelcomeScreen from "./app/screens/WelcomeScreen"
import ViewImageScreen from "./app/screens/ViewImageScreen"
import TextStyle from "./app/components/TextStyle"
import AppText from "./app/components/AppText"
import AppButton from "./app/components/AppButton"
import Card from "./app/components/Card"
import ListingDetailsScreen from "./app/screens/ListingDetailsScreen"
import MessagesScreen from "./app/screens/MessagesScreen"
import Screen from "./app/components/Screen"
import Icon from "./app/components/Icon"
import ListItem from "./app/components/ListItem"
import AccountScreen from "./app/screens/AccountScreen"
import ListingsScreen from "./app/screens/ListingsScreen"
import AppTextInput from "./app/components/AppTextInput"
import colors from "./app/config/colors"
import AppPicker from "./app/components/AppPicker"
import LoginScreen from "./app/screens/LoginScreen"
import RegisterScreen from "./app/screens/RegisterScreen"

const categories = [
	{ label: "Furniture", value: 1 },
	{ label: "Clothing", value: 2 },
	{ label: "Cameras", value: 3 },
]

export default function App() {
	const [isNew, setIsNew] = useState(false)
	const [category, setCategory] = useState(categories[0])

	return <RegisterScreen />
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

	{
		/* <Text>{firstName}</Text>
	<TextInput
		keyboardType="default"
		clearButtonMode="always" // iOS only
		secureTextEntry={true} // for passwords
		maxLength={50}
		onChangeText={(text) => setFirstName(text)}
		placeholder="First Name"
		style={{
			borderBottomColor: "#ccc",
			borderBottomWidth: 1,
		}}
	/> */
	}

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
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#fff",
		alignItems: "center",
		justifyContent: "center",
		fontWeight: "bold",
	},

	setFontSizeOne: {
		fontSize: 15, // Define font size here in Pixels
	},
	setFontSizeTwo: {
		fontSize: 40, // Define font size here in Pixels
	},
})

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
