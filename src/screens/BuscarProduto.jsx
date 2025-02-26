import { useState, useEffect } from 'react';
import { View, Text } from 'react-native';

/*
    * Firebase Component
    * @returns {object}
*/
import { db } from '../config/firebase';

/*
    * Firebase Component
    * @returns {object}
*/
import { collection, query, where, getDocs } from 'firebase/firestore';

/*
    * Styles Component
    * @returns {object}
*/
import styles from '../utils/style';
import { TextInput, MD3LightTheme as DefaultTheme, PaperProvider } from 'react-native-paper';
import { FlatList } from 'react-native-web';

/*
    * Functional Component
    * @returns {JSX}
*/
export default function buscarProduto() {
    const [busca, setBusca] = useState('');
    const [produtos, setProdutos] = useState([]);
    const [todosProdutos, setTodosProdutos] = useState([]);
    
    async function fetchProdutos() {
        try{
            const ref = collection(db, 'produto');
            const querySnapshot = await getDocs(ref);
            
            const listaProdutos = [];
            querySnapshot.forEach((doc) => {
                listaProdutos.push(doc.data());
            });

            setTodosProdutos(listaProdutos);
        }catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        fetchProdutos(busca);
    }, [busca]);

    useEffect(() => {
        if (busca.trim() === '') {
            setProdutos([]);
        } else {
            const buscaLower = busca.toLowerCase();
            const resultados = todosProdutos.filter((item) =>
                item.nomeDoProduto.toLowerCase().includes(buscaLower)
            );

            setProdutos(resultados);
        }
    }, [busca, todosProdutos]);

    return (
        <View style={styles.container}>
            <View style={styles.main}>
                <Text style={styles.title}>Pesquise pelo nome dos produtos</Text>
                <View style={styles.backInfo}>
                    <Text style={styles.backInfoTitle}>Pesquisar por:</Text>
                    <Text>• Mouse</Text>
                    <Text>• Copo</Text>
                </View>
            </View>
            <View style={{marginTop: 10,}}>
                <TextInput  theme={
                    {colors: {
                        placeholder: "#fff",
                        primary: "#00C2CC",
                        onSurfaceVariant: "#000",
                    }}
                    
                } label='Nome do Produto' value={busca} onChangeText={setBusca} mode='outlined' outlineColor="#00C2CC" />
            </View>
            <View>
                <FlatList data={produtos} renderItem={({item}) => (
                    <View style={styles.content}>
                        <Text style={styles.titleText}>Nome do Produto: {item.nomeDoProduto}</Text>
                        <Text style={styles.titleText}>Quantidade do Produto: {item.quantidadeDeProduto}</Text>
                        <Text style={styles.titleText}>Preço do Produto: {item.precoDoProduto}</Text>
                    </View>
                )} key={(item) => item.id} />
            </View>
        </View>
    )
};