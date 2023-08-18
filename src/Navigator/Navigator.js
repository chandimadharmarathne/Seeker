import { createStackNavigator } from '@react-navigation/stack';
import LoginPage from './screens/LoginPage';

const Stack = createStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="LoginPage" component={LoginPage} />
      <Stack.Screen name="Notifications" component={Notifications} />
      <Stack.Screen name="Profile" component={Profile} />
      
    </Stack.Navigator>
  );
}