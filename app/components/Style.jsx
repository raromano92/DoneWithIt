import React from "react"
import { View } from "react-native"

export default function Test() {
	return (
		<View
			style={{
				flex: 1,
				justifyContent: "center",
				alignItems: "center",
			}}
		>
			{/* <View
				style={{
					backgroundColor: "dodgerblue",
					width: 100,
					height: 100,
					borderWidth: 10,
					borderColor: "royalblue",
					borderRadius: 10,
					// borderTopWidth: 20,
					// borderTopLeftRadius: 50,
				}}
			></View> */}
			<View
				style={{
					backgroundColor: "dodgerblue",
					width: 100,
					height: 100,
					padding: 20,
					paddingHorizontal: 10,
					paddingLeft: 30,
					shadowColor: "grey", // ios only
					shadowOffset: {
						width: 0,
						height: 10,
					}, // ios only
					shadowOpacity: 1, // ios only
					shadowRadius: 10, // ios only
					elevation: 10, // android
				}}
			>
				<View
					style={{
						backgroundColor: "gold",
						width: 50,
						height: 50,
					}}
				></View>
			</View>
			<View
				style={{
					backgroundColor: "tomato",
					width: 100,
					height: 100,
					margin: 20,
				}}
			></View>
		</View>
	)
}
