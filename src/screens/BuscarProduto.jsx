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
    
    async function queryProducts(busca = null) {
        try{
            const ref = collection(db, 'produto');
            const queryRef = query(ref, where('nomeDoProduto', '==', busca));
            const querySnapshot = await getDocs(queryRef);
            
            const produtos = [];
            querySnapshot.forEach((doc) => {
                produtos.push(doc.data());
            });

            setProdutos(produtos);
        }catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        queryProducts(busca);
    }, [busca]);


    return (
        <View style={styles.container}>
            <View>
                <Text style={styles.title}>Pesquise pelo nome dos produtos</Text>
            </View>
            <View>
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
                        <Text style={styles.titleText}>Nome do Produto: {item.nomeDoProduto}</Text> {/* No app pesquisar por Copo e Mouse */}
                        <Text style={styles.titleText}>Quantidade do Produto: {item.quantidadeDeProduto}</Text>
                        <Text style={styles.titleText}>Preço do Produto: {item.precoDoProduto}</Text>
                    </View>
                )} key={(item) => item.id} />
            </View>
        </View>
    )
};