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
import { TextInput } from 'react-native-paper';
import { FlatList } from 'react-native-web';

/*
    * Functional Component
    * @returns {JSX}
*/
export default function buscarProduto({navigation}) {
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
                <Text style={styles.title}>Pesquise pelo nome do(s) produto(s)</Text>
            </View>
            <View>
                <TextInput label='Nome do Produto' value={busca} onChangeText={setBusca} />
            </View>
            <View>
                <FlatList data={produtos} renderItem={({item}) => (
                    <View style={styles.content}>
                        <Text style={styles.titleProduto}>Nome do Produto: {item.nomeDoProduto}</Text>
                        <Text style={styles.titleProduto}>Quantidade do Produto: {item.quantidadeDeProduto}</Text>
                        <Text style={styles.titleProduto}>Preço do Produto: {item.precoDoProduto}</Text>
                    </View>
                )} key={(item) => item.id} />
            </View>
        </View>
    )
};