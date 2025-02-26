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
    const [todosFruta, setTodosFruta] = useState([]);
    
    async function fetchFruta() {
        try{
            const ref = collection(db, 'fruta');
            const querySnapshot = await getDocs(ref);
            
            const listaFruta = [];
            querySnapshot.forEach((doc) => {
                listaFruta.push(doc.data());
            });

            setTodosFruta(listaFruta);
        }catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        fetchFruta(busca);
    }, [busca]);

    useEffect(() => {
        if (busca.trim() === '') {
            setFruta([]);
        } else {
            const buscaLower = busca.toLowerCase();
            const resultados = todosFruta.filter((item) =>
                item.nomeDaFruta.toLowerCase().includes(buscaLower)
            );

            setFruta(resultados);
        }
    }, [busca, todosFruta]);

    return (
        <View style={styles.container}>
            <View style={styles.main}>
                <Text style={styles.title}>Pesquise pelo nome das Frutas</Text>
                <View style={styles.backInfo}>
                    <Text style={styles.backInfoTitle}>Pesquisar por:</Text>
                    <Text>• Kiwi</Text>
                    <Text>• Banana</Text>
                </View>
            </View>
            <View style={{marginTop: 10,}}>
                <TextInput theme={
                    {colors: {
                        placeholder: "#fff",
                        primary: "#00C2CC",
                        onSurfaceVariant: "#000",
                    }}
                    
                } label='Nome da Fruta' value={busca} onChangeText={setBusca} mode='outlined'  outlineColor="#00C2CC" />
            </View>
            <View>
                <FlatList data={Fruta} renderItem={({item}) => (
                    <View style={styles.content}>
                         <Text style={styles.titleText}>Nome da Fruta: {item.nomeDaFruta}</Text>
                        <Text style={styles.titleText}>Preço da Fruta: {item.precoDaFruta}</Text>
                    </View>
                )} key={(item) => item.id} />
            </View>
        </View>
    )
};