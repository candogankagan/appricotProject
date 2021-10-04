import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import MainScreen from '../screens/MainScreen';
import ListScreen from '../screens/ListScreen';
import MessageScreen from '../screens/MessageScreen';
import SettingsScreen from '../screens/SettingsScreen';
import CalenderIcon from './../assets/icons/svg/menu-calendar.svg';
import ListIcon from './../assets/icons/svg/menu-list.svg';
import MessageIcon from './../assets/icons/svg/menu-msg.svg';
import SettingsIcon from './../assets/icons/svg/menu-setting.svg';
import {StyleSheet} from 'react-native';
import COLORS from '../constants/theme';

const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
    return (
        <Tab.Navigator
            initialRouteName="Main"
            screenOptions={{
                tabBarStyle: styles.tabBar,
                tabBarItemStyle: styles.tabBarItem,
                tabBarActiveBackgroundColor: COLORS.lightGray,
                headerShown: false,
                tabBarShowLabel: false
            }}
        >
            <Tab.Screen
                name="Main"
                component={MainScreen}
                options={{
                    tabBarIcon: () => (
                        <CalenderIcon />
                    )
                }}
            />
            <Tab.Screen
                name="List"
                component={ListScreen}
                options={{
                    tabBarIcon: () => (
                        <ListIcon />
                    )
                }}
            />
            <Tab.Screen
                name="Message"
                component={MessageScreen}
                options={{
                    tabBarIcon: () => (
                        <MessageIcon />
                    )
                }}
            />
            <Tab.Screen
                name="Settings"
                component={SettingsScreen}
                options={{
                    tabBarIcon: () => (
                        <SettingsIcon />
                    )
                }}
            />
        </Tab.Navigator>
    );
};

const styles = StyleSheet.create({
    tabBar: {
        paddingHorizontal: 16,
        borderTopWidth: 0
    },
    tabBarItem: {
        marginHorizontal: 22,
        marginVertical: 2,
        borderRadius: 10
    }
});

export default BottomTabNavigator;
