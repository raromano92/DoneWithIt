import React, { useState } from "react"
import { StyleSheet, Image } from "react-native"
import { Formik } from "formik"
import * as Yup from "yup"

import AppButton from "../components/AppButton"
import AppText from "../components/AppText"
import AppTextInput from "../components/AppTextInput"
import ErrorMessage from "../components/ErrorMessage"
import Screen from "../components/Screen"
import AppFormField from "../components/AppFormField"
import SubmitButton from "../components/SubmitButton"

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
				{({ handleChange, handleSubmit, errors, setFieldTouched, touched }) => (
					<>
						<AppFormField
							autoCapitalize="none"
							autoCorrect={false}
							icon="email"
							keyboardType="email-address"
							name="email"
							// onBlur={() => setFieldTouched("email")}
							// onChangeText={handleChange("email")}
							placeholder="Email"
							textContentType="emailAddress"
						/>
						<AppFormField
							autoCapitalize="none"
							autoCorrect={false}
							icon="lock"
							name="password"
							// onBlur={() => setFieldTouched("password")}
							// onChangeText={handleChange("password")}
							placeholder="Password"
							secureTextEntry={true}
							textContentType="password"
						/>

						<SubmitButton title="Login" />
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