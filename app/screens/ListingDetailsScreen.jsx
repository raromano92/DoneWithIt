import React from 'react'
import { Image, View, StyleSheet } from 'react-native'

import AppText from '../components/AppText'
import ListItem from '../components/lists/ListItem.jsx'
import colors from '../config/colors'

export default function ListingDetailsScreen({ route }) {
	const listing = route.params
	console.log(listing.id)

	return (
		<View>
			<Image style={styles.image} source={''} />
			<View style={styles.detailsContainer}>
				<AppText style={styles.title}>{listing.title}</AppText>
				<AppText style={styles.price}>${listing.price}</AppText>
				<View style={styles.userContainer}>
					<ListItem
						image={require('../assets/mosh.jpg')}
						title='Mosh Hamedani'
						subTitle='5 Listings'
					/>
				</View>
			</View>
		</View>
	)
}

const styles = StyleSheet.create({
	detailsContainer: {
		padding: 20,
	},
	image: {
		width: '100%',
		height: 300,
	},
	price: {
		color: colors.secondary,
		fontWeight: 'bold',
		fontSize: 24,
		marginVertical: 10,
	},
	title: {
		fontSize: 24,
		fontWeight: '900',
	},
	userContainer: {
		marginVertical: 40,
	},
})
