import React, { Component } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Material from "react-native-vector-icons/MaterialCommunityIcons";
import RideScreen from "../screens/Ride";
import RideHistoryScreen from "../screens/RideHistory";

const Tab = createBottomTabNavigator();

export default class BottomTabNavigator extends Component {
	render() {
		return (
			<NavigationContainer>
				<Tab.Navigator>
					<Tab.Screen
						name="Ride"
						component={RideScreen}
						options={{
							tabBarIcon: ({ color }) => {
								return <Material name="bike" size={24} color={color} />;
							},
						}}
					/>
					<Tab.Screen
						name="Ride History"
						component={RideHistoryScreen}
            
						options={{
              
							tabBarIcon: ({ color }) => {
								return <Material name="clock" size={24} color={color} />;
							},
						}}
					/>
				</Tab.Navigator>
			</NavigationContainer>
		);
	}
}
