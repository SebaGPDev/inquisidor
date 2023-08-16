import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "../components/views/HomeScreen";
import PeopleScreen from "../components/views/PeopleScreen";
import LoginScreen from "../components/views/LoginScreen";
import { useSelector } from "react-redux";

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const App = () => {
  const { ticket } = useSelector((state) => state.auth);

  return (
    <NavigationContainer>
      {!ticket ? (
        <Stack.Navigator>
          <Stack.Screen name="Login" component={LoginScreen} />
        </Stack.Navigator>
      ) : (
        <Tab.Navigator>
          <Tab.Screen name="Home" component={HomeScreen} />
          <Tab.Screen name="People" component={PeopleScreen} />
        </Tab.Navigator>
      )}
    </NavigationContainer>
  );
};

export default App;
