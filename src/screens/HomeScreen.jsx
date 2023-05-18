import { View, Text } from "react-native";

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
        Buscar Produto
      </Button>
    </View>
  );
}
