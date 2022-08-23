import { StatusBar } from "expo-status-bar"
import {
	StyleSheet,
	Text,
	TouchableWithoutFeedback,
	TouchableOpacity,
	TouchableHighlight,
	TouchableNativeFeedback,
	Image,
	View,
	SafeAreaView,
} from "react-native"

export default function App() {
	console.log("HEYEYEYE")
	const handlePress = () => console.log("Text pressed")

	return (
		<SafeAreaView style={styles.container}>
			<Text numberOfLines={1} onPress={handlePress} style={styles.setFontSizeTwo}>
				abcdefg
			</Text>
			<TouchableHighlight onPress={() => console.log("Tapped picture")}>
				<Image
					blurRadius={0}
					fadeDuration={1000}
					source={{
						width: 200,
						height: 300,
						uri: "https://picsum.photos/id/237/200/300",
					}}
				/>
			</TouchableHighlight>
			<TouchableNativeFeedback>
				<View style={{ width: 200, height: 70, backgroundColor: "dodgerblue" }}></View>
			</TouchableNativeFeedback>
			<StatusBar style="auto" />
		</SafeAreaView>
	)
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
