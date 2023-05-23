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
export default function buscarFruta() {
    const [busca, setBusca] = useState('');
    const [Fruta, setFruta] = useState([]);
    
    async function queryFruta(busca = null) {
        try{
            const ref = collection(db, 'fruta');
            const queryRef = query(ref, where('nomeDaFruta', '==', busca));
            const querySnapshot = await getDocs(queryRef);
            
            const Fruta = [];
            querySnapshot.forEach((doc) => {
                Fruta.push(doc.data());
            });

            setFruta(Fruta);
        }catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        queryFruta(busca);
    }, [busca]);

    return (
        <View style={styles.container}>
            <View>
                <Text style={styles.title}>Pesquise pelo nome das Frutas</Text>
            </View>
            <View>
                <TextInput label='Nome da Fruta' value={busca} onChangeText={setBusca} mode='outlined' />
            </View>
            <View>
                <FlatList data={Fruta} renderItem={({item}) => (
                    <View style={styles.content}>
                         <Text style={styles.titleText}>Nome da Fruta: {item.nomeDaFruta}</Text> {/* No app pesquisar por Kiwi e Banana */}
                        <Text style={styles.titleText}>Preço da Fruta: {item.precoDaFruta}</Text>
                    </View>
                )} key={(item) => item.id} />
            </View>
        </View>
    )
};