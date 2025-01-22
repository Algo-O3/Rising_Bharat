import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import MindfulYouPage from './src/Screens/initialScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createStaticNavigation } from '@react-navigation/native';

const Stack = createStaticNavigation();
const App = () => {
  return (
    <NavigationContainer>
    <SafeAreaView style={styles.container}>
    <Stack.Navigator initialRouteName="MindfulYou">

    <Stack.Screen name="MindfulYou" component={MindfulYouPage} />

    </Stack.Navigator>
    </SafeAreaView>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
