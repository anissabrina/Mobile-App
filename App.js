import React, { useState } from "react";
//import SignIn from "./screens/SignIn.js";
import Home from "./screens/signedIn/Home";
//import Booking from "./screens/signedIn/Booking";
import Setting from "./screens/signedIn/Setting";
import VenueDetails from "./screens/signedIn/VenueDetails";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

const App: () => Node = ({ navigation }) => {
  //const [isSignedIn, setIsSignedIn] = useState(true);
  const Stack = createNativeStackNavigator();
  const HomeStack = createNativeStackNavigator();
  const Tab = createBottomTabNavigator();

  const HomeStackScreens = ({ navigation }) => {
    return (
      <HomeStack.Navigator>
        <HomeStack.Screen
          name="Feed"
          component={Home}
          options={{
            tabBarLabel: "Home",
            headerShown: false,
            tabBarIcon: ({ color, focused }) => (
              <MaterialCommunityIcons
                name="home"
                color={focused ? "#000" : "grey"}
                size={focused ? 30 : 20}
              />
            ),
          }}
        />
        <HomeStack.Screen
          name="VenueDetails"
          component={VenueDetails}
          options={{
            tabBarLabel: "Home",
            headerShown: false,
            tabBarIcon: ({ color, focused }) => (
              <MaterialCommunityIcons
                name="home"
                color={focused ? "#000" : "grey"}
                size={focused ? 30 : 20}
              />
            ),
          }}
        />
      </HomeStack.Navigator>
    );
  };

  //if (isSignedIn == true) {
    return (
      <NavigationContainer>
        <Tab.Navigator>
          <Tab.Screen
            name="Venues"
            component={HomeStackScreens}
            options={{
              tabBarLabel: "Home",
              headerShown: false,
              tabBarIcon: ({ color, focused }) => (
                <MaterialCommunityIcons
                  name="home"
                  color={focused ? "#000" : "grey"}
                  size={focused ? 30 : 20}
                />
              ),
            }}
          />
          <Tab.Screen
            name="Setting"
            component={Setting}
            options={{
              tabBarLabel: "Setting",
              headerShown: false,
              tabBarIcon: ({ color, focused }) => (
                <MaterialCommunityIcons
                  name="cogs"
                  color={focused ? "#000" : "grey"}
                  size={focused ? 30 : 20}
                />
              ),
            }}
          />
        </Tab.Navigator>
      </NavigationContainer>
    );}
//   } else {
//     return (
//       <NavigationContainer>
//         <Stack.Navigator>
//           <Stack.Screen
//             name="SignIn"
//             component={SignIn}
//             options={{ headerShown: false }}
//           />
//         </Stack.Navigator>
//       </NavigationContainer>
//     );
//   }
};

export default App;
