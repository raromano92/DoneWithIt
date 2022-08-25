import React from "react"
import { View, StyleSheet, Image, TouchableHighlight } from "react-native"
import { GestureHandlerRootView } from "react-native-gesture-handler"
import Swipeable from "react-native-gesture-handler/Swipeable"
import { MaterialCommunityIcons } from "@expo/vector-icons"

import colors from "../../config/colors"
import AppText from "../AppText"

export default function ListItem({ title, subTitle, image, IconComponent, onPress, renderRightActions }) {
	return (
		<GestureHandlerRootView>
			<Swipeable renderRightActions={renderRightActions}>
				<TouchableHighlight
					underlayColor={colors.light}
					onPress={onPress}
				>
					<View style={styles.container}>
						{IconComponent}
						{image && (
							<Image
								style={styles.image}
								source={image}
							/>
						)}
						<View style={styles.detailsContainer}>
							<AppText
								style={styles.title}
								numberOfLines={1}
							>
								{title} Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis
								excepturi mollitia pariatur rerum animi laboriosam? Quia modi consequatur rerum?
								Pariatur nobis obcaecati perspiciatis saepe maiores minima. Necessitatibus odit
								aspernatur maxime delectus facere inventore quod, autem corporis quam non
								doloremque! Sapiente ratione id nihil nisi? Quo sunt architecto dolores
								assumenda soluta tempora quaerat ex laudantium repellendus fugit, illo, odio
								cupiditate itaque rem eius sapiente delectus alias qui a harum rerum
								exercitationem incidunt aliquam? Fugiat rerum consequatur aperiam perspiciatis
								quam aliquid voluptatibus exercitationem iste placeat ad cum ipsum at,
								dignissimos dolores incidunt mollitia. Asperiores nobis non dolore incidunt!
								Beatae ratione accusamus aspernatur.
							</AppText>
							{subTitle && (
								<AppText
									style={styles.subTitle}
									numberOfLines={2}
								>
									Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda odit,
									quisquam fuga doloribus voluptate officia incidunt nihil ipsa possimus est
									deserunt, voluptatem dolorum porro cumque maiores voluptatum sed sit
									perferendis consequuntur, tempora labore ad numquam delectus saepe.
									Cupiditate, nobis. Laudantium ipsa quos autem, minus commodi sapiente
									molestiae error reprehenderit provident. Alias numquam nisi assumenda quod
									eveniet mollitia animi itaque ullam earum atque culpa rem, ut veniam
									inventore quam aut. Alias iusto optio assumenda voluptatibus soluta
									consequatur libero id ut, veniam cumque cum, fugiat non eum accusantium,
									blanditiis quibusdam. Sit ipsum esse aliquam ut aut. Illum aliquid
									praesentium laudantium reiciendis laborum.
									{subTitle}
								</AppText>
							)}
						</View>
						<MaterialCommunityIcons
							color={colors.medium}
							name="chevron-right"
							size={25}
						/>
					</View>
				</TouchableHighlight>
			</Swipeable>
		</GestureHandlerRootView>
	)
}

const styles = StyleSheet.create({
	container: {
		alignItems: "center",
		flexDirection: "row",
		padding: 15,
		backgroundColor: colors.white,
	},
	detailsContainer: {
		flex: 1,
		marginLeft: 10,
		justifyContent: "center",
	},
	image: {
		width: 70,
		height: 70,
		borderRadius: 35,
		marginRight: 10,
	},
	subTitle: {
		color: colors.medium,
	},
	title: {
		fontWeight: "700",
	},
})
