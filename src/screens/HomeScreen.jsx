import { View, Text } from 'react-native';

/*
 * Styles Component
 * @returns {object}
 */
import styles from '../utils/style';
import { Button } from 'react-native-paper';

/*
 * Functional Component
 * @returns {JSX}
 */
export default function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.divHome}>
        <Text style={styles.tilteHome}>Páginas de buscas 👌</Text>
      </View>
      <View>
        <Button
          style={styles.buttonStyle}
          labelStyle={{ color: '#fff' }}
          mode='outlined'
          onPress={() => {
            navigation.navigate('Buscar Produto');
          }}
        >
          Buscar Produtos
        </Button>

        <Button
          style={styles.buttonStyle}
          labelStyle={{ color: '#fff' }}
          mode='outlined'
          onPress={() => {
            navigation.navigate('Buscar Pessoa');
          }}
        >
          Buscar Pessoas
        </Button>

        <Button
          style={styles.buttonStyle}
          labelStyle={{ color: '#fff' }}
          mode='outlined'
          onPress={() => {
            navigation.navigate('Buscar Carro');
          }}
        >
          Buscar Carros
        </Button>

        <Button
          style={styles.buttonStyle}
          labelStyle={{ color: '#fff' }}
          mode='outlined'
          onPress={() => {
            navigation.navigate('Buscar Animal');
          }}
        >
          Buscar Animais
        </Button>

        <Button
          style={styles.buttonStyle}
          labelStyle={{ color: '#fff' }}
          mode='outlined'
          onPress={() => {
            navigation.navigate('Buscar Fruta');
          }}
        >
          Buscar Frutas
        </Button>

        <Button
          style={styles.buttonStyle}
          labelStyle={{ color: '#fff' }}
          mode='outlined'
          onPress={() => {
            navigation.navigate('Buscar Cor');
          }}
        >
          Buscar Cores
        </Button>
      </View>
    </View>
  );
}
