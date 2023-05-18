import React from "react";

import HomeScreen from "./screens/HomeScreen";
import buscarProduto from "./screens/BuscarProduto";


import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";

const Stack = createStackNavigator();

export default function RootNavigation() {
    return(
        <NavigationContainer>
            <Stack.Navigator>
                
                <Stack.Screen name="Home" component={HomeScreen} />
                <Stack.Screen name='buscarProduto' component={buscarProduto} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}