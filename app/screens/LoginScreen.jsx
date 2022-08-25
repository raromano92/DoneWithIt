import React, { useState } from "react"
import { StyleSheet, Image } from "react-native"
import { Formik } from "formik"
import * as Yup from "yup"

import AppButton from "../components/AppButton"
import AppText from "../components/AppText"
import AppTextInput from "../components/AppTextInput"
import Screen from "../components/Screen"

const validationSchema = Yup.object().shape({
	email: Yup.string().required().email().label("Email"),
	password: Yup.string().required().min(4).label("Password"),
})

export default function LoginScreen() {
	const [email, setEmail] = useState()
	const [password, setPassword] = useState()

	return (
		<Screen style={styles.container}>
			<Image
				style={styles.logo}
				source={require("../assets/logo-red.png")}
			/>
			<Formik
				initialValues={{ email: "", password: "" }}
				onSubmit={(values) => console.log(values)}
				validationSchema={validationSchema}
			>
				{({ handleChange, handleSubmit, errors }) => (
					<>
						<AppTextInput
							autoCapitalize="none"
							autoCorrect={false}
							icon="email"
							placeholder="Email"
							keyboardType="email-address"
							onChangeText={handleChange("email")}
							textContentType="emailAddress"
						/>
						<AppText style={{ color: "red" }}>{errors.email}</AppText>
						<AppTextInput
							autoCapitalize="none"
							autoCorrect={false}
							icon="lock"
							placeholder="Password"
							onChangeText={handleChange("password")}
							secureTextEntry={true}
							textContentType="password"
						/>
						<AppText style={{ color: "red" }}>{errors.password}</AppText>
						<AppButton
							title="Login"
							onPress={handleSubmit}
						/>
					</>
				)}
			</Formik>
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
