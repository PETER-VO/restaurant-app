import React from 'react';
import { createStackNavigator, CardStyleInterpolators } from '@react-navigation/stack';
import { SettingScreen } from '../../features/settings/screens/settings.screen';


const SettingsStack = createStackNavigator();

export const SettingNavigator = ({ route, navigation }) => {
    return (
        <SettingsStack.Navigator
            headerMode="screen"
            screenOptions={{
                CardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS
            }}
        >
            <SettingsStack.Screen
                options={{
                    header: () => null,
                }}
                name="Settings"
                component={SettingScreen}
            />
            <SettingsStack.Screen name="Favourites" component={() => null} />
        </SettingsStack.Navigator>
    )
}