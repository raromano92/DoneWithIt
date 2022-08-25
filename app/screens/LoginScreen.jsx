import React, { useState } from "react"
import { StyleSheet, Image } from "react-native"
import AppButton from "../components/AppButton"
import AppTextInput from "../components/AppTextInput"

import Screen from "../components/Screen"

export default function LoginScreen() {
	const [email, setEmail] = useState()
	const [password, setPassword] = useState()

	return (
		<Screen style={styles.container}>
			<Image
				style={styles.logo}
				source={require("../assets/logo-red.png")}
			/>
			<AppTextInput
				autoCapitalize="none"
				autoCorrect={false}
				icon="email"
				placeholder="Email"
				keyboardType="email-address"
				onChangeText={(text) => setEmail(text)}
				textContentType="emailAddress"
			/>
			<AppTextInput
				autoCapitalize="none"
				autoCorrect={false}
				icon="lock"
				placeholder="password"
				onChangeText={(text) => setPassword(text)}
				secureTextEntry={true}
				textContentType="password"
			/>
			<AppButton
				title="Login"
				onPress={() => console.log(email, password)}
			/>
		</Screen>
	)
}

const styles = StyleSheet.create({
	container: {
		padding: 10,
	},
	logo: {
		width: 80,
		height: 80,
		alignSelf: "center",
		marginTop: 50,
		marginBottom: 20,
	},
})
