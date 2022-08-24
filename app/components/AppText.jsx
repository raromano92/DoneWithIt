import React from "react"
import { Text, StyleSheet, Platform } from "react-native"

export default function AppText({ children, style }) {
	return <Text style={[styles.text, style]}>{children}</Text>
}

const styles = StyleSheet.create({
	text: {
		// fontSize: 32,
		// color: "blue",
		// fontFamily: Platform.OS === "android" ? "Roboto" : "Avenir",
		color: "#000",
		...Platform.select({
			ios: {
				fontSize: 18,
				fontFamily: "Avenir",
			},
			android: {
				fontSize: 22,
				fontFamily: "Roboto",
			},
		}),
	},
})
