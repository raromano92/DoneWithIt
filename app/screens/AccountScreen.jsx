import React, { useContext } from 'react';
import { StyleSheet, View, FlatList } from 'react-native';

import ListItem from '../components/lists/ListItem';
import Screen from '../components/Screen';
import colors from '../config/colors';
import Icon from '../components/Icon';
import ListItemSeparator from '../components/lists/ListItemSeparator';
import routes from '../navigation/routes';
import AuthContext from '../auth/context';
import authStorage from '../auth/storage';

const menuItems = [
	{
		title: 'My Listings',
		icon: {
			name: 'format-list-bulleted',
			backgroundColor: colors.primary,
		},
	},
	{
		title: 'My Messages',
		icon: {
			name: 'email',
			backgroundColor: colors.secondary,
		},
		targetScreen: routes.MESSAGES,
	},
];

export default function AccountScreen({ navigation }) {
	const { user, setUser } = useContext(AuthContext);

	const handleLogOut = () => {
		setUser(null);
		authStorage.removeToken();
	};

	return (
		<Screen style={styles.screen}>
			<ListItem
				title={user.name}
				subTitle={user.email}
				image={require('../assets/mosh.jpg')}
			/>

			<View style={styles.container}>
				<FlatList
					data={menuItems}
					keyExtractor={(menuItem) => menuItem.title}
					ItemSeparatorComponent={ListItemSeparator}
					renderItem={({ item }) => (
						<ListItem
							title={item.title}
							IconComponent={
								<Icon
									name={item.icon.name}
									backgroundColor={item.icon.backgroundColor}
								/>
							}
							onPress={() => navigation.navigate(item.targetScreen)}
						/>
					)}
				/>
			</View>
			<ListItem
				title='Log Out'
				IconComponent={<Icon name='logout' backgroundColor='#ffe66d' />}
				onPress={handleLogOut}
			/>
		</Screen>
	);
}

const styles = StyleSheet.create({
	screen: {
		backgroundColor: colors.light,
	},
	container: {
		marginVertical: 40,
	},
});
