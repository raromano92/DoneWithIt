import React from "react"
import { View, StyleSheet, TextInput } from "react-native"
import { MaterialCommunityIcons } from "@expo/vector-icons"

import defaultStyles from "../config/styles"
import AppText from "./AppText"

export default function AppPicker({ icon, placeholder, ...otherProps }) {
	return (
		<View style={styles.container}>
			{icon && (
				<MaterialCommunityIcons
					name={icon}
					size={20}
					color={defaultStyles.colors.medium}
					style={styles.icon}
				/>
			)}
			<AppText style={styles.text}>{placeholder}</AppText>
			<MaterialCommunityIcons
				name="chevron-down"
				size={20}
				color={defaultStyles.colors.medium}
			/>
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		backgroundColor: defaultStyles.colors.light,
		borderRadius: 25,
		flexDirection: "row",
		width: "100%",
		padding: 15,
		marginVertical: 10,
	},
	icon: {
		marginRight: 10,
		marginTop: 5,
	},
	text: {
		flex: 1,
	},
})
