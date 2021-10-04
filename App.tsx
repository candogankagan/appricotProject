import React from 'react';
import {SafeAreaView} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import BottomTabNavigator from './src/navigation/navigator';

const App = () => {

    return (
        <NavigationContainer>
            <SafeAreaView style={{flex: 1, backgroundColor: '#fff'}}>
                <BottomTabNavigator />
            </SafeAreaView>
        </NavigationContainer>
    );
};

export default App;
