import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginForm from './src/screens/LoginPage'; // Import your login form component
import HomePage from './src/screens/Home';   // Import your home page component
import RegisterPage from './src/screens/RegisterPage';
import Profile from './src/screens/Profile';
import BottomView from './src/component/BottomView';
import ProfileBottomView from './src/component/ProfileBottomView';
import BookMarkPage from './src/screens/BookMarkPage';
import ChatPage from './src/screens/ChatPage';
import ChatScreen from './src/screens/ChatScreen';
import ChatCardView from './src/component/ChatCardView';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={LoginForm} />
        <Stack.Screen name="Home" component={HomePage} />
        <Stack.Screen name="RegisterPage" component={RegisterPage} />
        <Stack.Screen name="Profile" component={Profile} />
        <Stack.Screen name="BottomView" component={BottomView} />
        <Stack.Screen name="ProfileBottomView" component={ProfileBottomView} />
        <Stack.Screen name="BookMarkPage" component={BookMarkPage} />
        <Stack.Screen name="ChatPage" component={ChatPage} />
        <Stack.Screen name="ChatScreen" component={ChatScreen} />
        <Stack.Screen name="ChatCardView" component={ChatCardView} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
