import React from "react"
import { Text, StyleSheet, Platform } from "react-native"

export default function AppText({ children }) {
	return <Text style={styles.text}>{children}</Text>
}

const styles = StyleSheet.create({
	text: {
		// fontSize: 32,
		// color: "blue",
		// fontFamily: Platform.OS === "android" ? "Roboto" : "Avenir",
		color: "tomato",
		...Platform.select({
			ios: {
				fontSize: 20,
				fontFamily: "Avenir",
			},
			android: {
				fontSize: 34,
				fontFamily: "Roboto",
			},
		}),
	},
})
