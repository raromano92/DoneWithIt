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
} from "react-native"
import { useDimensions, useDeviceOrientation } from "@react-native-community/hooks"
import WelcomeScreen from "./app/screens/WelcomeScreen"
import ViewImageScreen from "./app/screens/ViewImageScreen"

export default function App() {
	return <ViewImageScreen />
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