import React from "react"
import { View, Text } from "react-native"

export default function TextStyle() {
	return (
		<View
			style={{
				flex: 1,
				justifyContent: "center",
				alignItems: "center",
			}}
		>
			<Text
				style={{
					fontSize: 40,
					fontFamily: "Roboto",
					fontStyle: "italic",
					fontWeight: "900",
					color: "tomato",
					textTransform: "capitalize",
					textDecorationLine: "underline",
					textAlign: "center",
					lineHeight: 60,
				}}
			>
				I love React Native! Here's some more text.
			</Text>
		</View>
	)
}
