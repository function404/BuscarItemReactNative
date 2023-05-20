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
export default function buscarPessoas({ navigation }) {
    const [busca, setBusca] = useState('');
    const [Pessoas, setPessoas] = useState([]);
    
    async function queryPessoas(busca = null) {
        try{
            const ref = collection(db, 'pessoa');
            const queryRef = query(ref, where('nomeDaPessoa', '==', busca));
            const querySnapshot = await getDocs(queryRef);
            
            const Pessoas = [];
            querySnapshot.forEach((doc) => {
                Pessoas.push(doc.data());
            });

            setPessoas(Pessoas);
        }catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        queryPessoas(busca);
    }, [busca]);

    return (
        <View style={styles.container}>
            <View>
                <Text style={styles.title}>Pesquise pelo nome das pessoas</Text>
            </View>
            <View>
                <TextInput label='Nome da Pessoa' value={busca} onChangeText={setBusca} mode='outlined' />
            </View>
            <View>
                <FlatList data={Pessoas} renderItem={({item}) => (
                    <View style={styles.content}>
                         <Text style={styles.titleText}>Nome da Pessoa: {item.nomeDaPessoa}</Text> {/* No app pesquisar por Lincoln e Rogério */}
                        <Text style={styles.titleText}>Idade da Pessoa: {item.idadeDaPessoa}</Text>
                    </View>
                )} key={(item) => item.id} />
            </View>
        </View>
    )
};