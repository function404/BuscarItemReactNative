import { View } from "react-native";

/*
 * Styles Component
 * @returns {object}
 */
import styles from "../utils/style";
import { Button } from "react-native-paper";

/*
 * Functional Component
 * @returns {JSX}
 */
export default function HomeScreen( {navigation} ) {
  return (
    <View style={styles.container}>
      <Button
        style={{
          backgroundColor: "#00c2cc",
          borderColor: "#fff",
        }}
        labelStyle={{ color: "#fff" }}
        mode="outlined"
        onPress={() => {
          navigation.navigate("buscarProduto");
        }}
      >
        Buscar Produtos
      </Button>

      <Button
        style={{
          backgroundColor: "#00c2cc",
          borderColor: "#fff",
        }}
        labelStyle={{ color: "#fff" }}
        mode="outlined"
        onPress={() => {
          navigation.navigate("buscarPessoa");
        }}
      >
        Buscar Pessoas
      </Button>

      <Button
        style={{
          backgroundColor: "#00c2cc",
          borderColor: "#fff",
        }}
        labelStyle={{ color: "#fff" }}
        mode="outlined"
        onPress={() => {
          navigation.navigate("buscarCarro");
        }}
      >
        Buscar Carros
      </Button>

      <Button
        style={{
          backgroundColor: "#00c2cc",
          borderColor: "#fff",
        }}
        labelStyle={{ color: "#fff" }}
        mode="outlined"
        onPress={() => {
          navigation.navigate("buscarAnimal");
        }}
      >
        Buscar Animais
      </Button>

      <Button
        style={{
          backgroundColor: "#00c2cc",
          borderColor: "#fff",
        }}
        labelStyle={{ color: "#fff" }}
        mode="outlined"
        onPress={() => {
          navigation.navigate("buscarFruta");
        }}
      >
        Buscar Frutas
      </Button>

      <Button
        style={{
          backgroundColor: "#00c2cc",
          borderColor: "#fff",
        }}
        labelStyle={{ color: "#fff" }}
        mode="outlined"
        onPress={() => {
          navigation.navigate("buscarCor");
        }}
      >
        Buscar Cores
      </Button>
    </View>
  );
}
