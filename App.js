import  React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import IndexScreen from './src/screen/IndexScreen';
import DetailsScreen from './src/screen/DetailsScreen';
import ShowScreen from './src/screen/ShowScreen';
import CreateScreen from './src/screen/CreateScreen';
import { Provider } from './src/context/BlogContext';

// Create a Stack Navigator
const Stack = createStackNavigator();

const App = () => {
  return (
          <NavigationContainer>
              <Stack.Navigator initialRouteName="Index">
                  <Stack.Screen name="HomePage" component={IndexScreen} />
                  <Stack.Screen name="Details" component={DetailsScreen} />
                  <Stack.Screen name="ShowScreen" component={ShowScreen} />
                  <Stack.Screen name="CreateScreen" component={CreateScreen} />
              </Stack.Navigator>
          </NavigationContainer>
      
  );
};

export default () => {
    return (
        <Provider>
            <App />
        </Provider>
      
    )
}