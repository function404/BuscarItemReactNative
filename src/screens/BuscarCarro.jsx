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
export default function buscarCarros({ navigation }) {
    const [busca, setBusca] = useState('');
    const [Carros, setCarros] = useState([]);
    
    async function queryCarros(busca = null) {
        try{
            const ref = collection(db, 'carro');
            const queryRef = query(ref, where('nomeDoCarro', '==', busca));
            const querySnapshot = await getDocs(queryRef);
            
            const Carros = [];
            querySnapshot.forEach((doc) => {
                Carros.push(doc.data());
            });

            setCarros(Carros);
        }catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        queryCarros(busca);
    }, [busca]);

    return (
        <View style={styles.container}>
            <View>
                <Text style={styles.title}>Pesquise pelo nome dos carros</Text>
            </View>
            <View>
                <TextInput label='Nome da Carros' value={busca} onChangeText={setBusca} mode='outlined'/>
            </View>
            <View>
                <FlatList data={Carros} renderItem={({item}) => (
                    <View style={styles.content}>
                         <Text style={styles.titleText}>Nome do Carro: {item.nomeDoCarro}</Text> {/*No app pesquisar por GTR-34 e Supra MK4 */}
                        <Text style={styles.titleText}>Marca do Carro: {item.marcaDoCarro}</Text>
                    </View>
                )} key={(item) => item.id} />
            </View>
        </View>
    )
};