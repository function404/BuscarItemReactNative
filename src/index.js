import React from "react";

import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";

/*
 * Paginas components
 * @returns {JSX}
*/
import HomeScreen from "./screens/HomeScreen";
import buscarProduto from "./screens/BuscarProduto";
import buscarPessoas from "./screens/BuscarPessoa";
import buscarCarros from "./screens/BuscarCarro";
import buscarAnimal from "./screens/BuscarAnimal";
import buscarFruta from "./screens/BuscarFruta";
import buscarCor from "./screens/BuscarCor";

const Stack = createStackNavigator();

/*
 * RootNavigation component
 * @returns {JS}
*/
export default function RootNavigation() {
    return(
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Home" component={HomeScreen} />
                <Stack.Screen name='buscarProduto' component={buscarProduto} />
                <Stack.Screen name='buscarPessoa' component={buscarPessoas}/>
                <Stack.Screen name='buscarCarro' component={buscarCarros}/>
                <Stack.Screen name='buscarAnimal' component={buscarAnimal}/>
                <Stack.Screen name='buscarFruta' component={buscarFruta}/>
                <Stack.Screen name='buscarCor' component={buscarCor}/>
            </Stack.Navigator>
        </NavigationContainer>
    )
}