import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "../components/views/HomeScreen";
import PeopleScreen from './../components/views/PeopleScreen';

const Tab = createBottomTabNavigator();

export default function MyTab() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="People" component={PeopleScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
