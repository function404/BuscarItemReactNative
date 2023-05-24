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
export default function buscarAnimal() {
    const [busca, setBusca] = useState('');
    const [Animal, setAnimal] = useState([]);
    
    async function queryAnimal(busca = null) {
        try{
            const ref = collection(db, 'animal');
            const queryRef = query(ref, where('nomeDoAnimal', '==', busca));
            const querySnapshot = await getDocs(queryRef);
            
            const Animal = [];
            querySnapshot.forEach((doc) => {
                Animal.push(doc.data());
            });

            setAnimal(Animal);
        }catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        queryAnimal(busca);
    }, [busca]);

    return (
        <View style={styles.container}>
            <View style={styles.main}>
                <Text style={styles.title}>Pesquise pelo nome dos Animal</Text>
                <View style={styles.backInfo}>
                    <Text style={styles.backInfoTitle}>Pesquisar por:</Text>
                    <Text>• Pato</Text>
                    <Text>• Falcão-peregrino</Text>
                </View>
            </View>
            <View style={{marginTop: 10,}}>
                <TextInput theme={
                    {colors: {
                        placeholder: "#fff",
                        primary: "#00C2CC",
                        onSurfaceVariant: "#000",
                    }}
                    
                } label='Nome do Animal' value={busca} onChangeText={setBusca} mode='outlined'  outlineColor="#00C2CC"/>
            </View>
            <View>
                <FlatList data={Animal} renderItem={({item}) => (
                    <View style={styles.content}>
                        <Text style={styles.titleText}>Nome do Animal: {item.nomeDoAnimal}</Text>
                        <Text style={styles.titleText}>Classe do Animal: {item.classeDoAnimal}</Text>
                    </View>
                )} key={(item) => item.id} />
            </View>
        </View>
    )
};