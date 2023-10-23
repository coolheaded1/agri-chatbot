import React, { useState, useEffect } from "react";
import { View, Button } from "react-native";

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

import ChatBot from "../chatBot";
import HomeScreen from "../screens/HomeScreen";

export default function MainRoute() {
   return (
      <NavigationContainer>
         <Stack.Navigator
            initialRouteName="HomeScreen"
            screenOptions={{
               headerShown: false,
               headerPressColorAndroid: "rgba(0, 150, 49, 0.1)",
            }}
         >
            <Stack.Screen
               name="ChatBot"
               component={ChatBot}
               options={{
                  headerShown: true,
                  headerTitle: "Agri-Bot 🤖",
                  headerStyle: {
                     backgroundColor: "#f1f5f9",
                  },
                  headerTitleStyle: {
                     fontSize: 20,
                     fontFamily: "Calcutta-Bold",
                     color: "#475569",
                  },
                  headerTitleAlign: "center",
                  headerShadowVisible: false,
               }}
            />
            <Stack.Screen
               name="HomeScreen"
               component={HomeScreen}
               options={{
                  headerShown: false,
                  headerTitle: "Home",
                  headerStyle: {
                     backgroundColor: "#f1f5f9",
                  },
                  headerTitleStyle: {
                     fontSize: 20,
                     fontFamily: "Calcutta-Bold",
                     color: "#475569",
                  },
                  headerTitleAlign: "center",
                  headerShadowVisible: false,
               }}
            />
         </Stack.Navigator>
      </NavigationContainer>
   );
}
