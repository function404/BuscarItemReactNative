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
export default function buscarCor({ navigation }) {
    const [busca, setBusca] = useState('');
    const [Cor, setCor] = useState([]);
    
    async function queryCor(busca = null) {
        try{
            const ref = collection(db, 'cor');
            const queryRef = query(ref, where('nomeDaCor', '==', busca));
            const querySnapshot = await getDocs(queryRef);
            
            const Cor = [];
            querySnapshot.forEach((doc) => {
                Cor.push(doc.data());
            });

            setCor(Cor);
        }catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        queryCor(busca);
    }, [busca]);

    return (
        <View style={styles.container}>
            <View>
                <Text style={styles.title}>Pesquise pelo nome das Cores</Text>
            </View>
            <View>
                <TextInput label='Nome da Cor' value={busca} onChangeText={setBusca} mode='outlined'/>
            </View>
            <View>
                <FlatList data={Cor} renderItem={({item}) => (
                    <View style={styles.content}>
                         <Text style={styles.titleText}>Nome da cor: {item.nomeDaCor}</Text>  {/* No app pesquisar por Verde e Branco  */}
                        <Text style={styles.titleText}>RGB da Cor: {item.rgbDaCor}</Text>
                    </View>
                )} key={(item) => item.id} />
            </View>
        </View>
    )
};