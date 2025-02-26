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
export default function buscarCarros() {
    const [busca, setBusca] = useState('');
    const [Carros, setCarros] = useState([]);
    const [todosCarros, setTodosCarros] = useState([]);
    
    async function fetchCarros() {
        try{
            const ref = collection(db, 'carro');
            const querySnapshot = await getDocs(ref);
            
            const listaCarros = [];
            querySnapshot.forEach((doc) => {
                listaCarros.push(doc.data());
            });

            setTodosCarros(listaCarros);
        }catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        fetchCarros();
    }, []);

    useEffect(() => {
        if (busca.trim() === '') {
            setCarros([]);
        } else {
            const buscaLower = busca.toLowerCase();
            const resultados = todosCarros.filter((item) =>
                item.nomeDoCarro.toLowerCase().includes(buscaLower)
            );
            setCarros(resultados);
        }
    }, [busca]);

    return (
        <View style={styles.container}>
           <View style={styles.main}>
                <Text style={styles.title}>Pesquise pelo nome dos Carros</Text>
                <View style={styles.backInfo}>
                    <Text style={styles.backInfoTitle}>Pesquisar por:</Text>
                    <Text>• GTR-34</Text>
                    <Text>• Supra MK4</Text>
                </View>
            </View>
            <View style={{marginTop: 10,}}>
                <TextInput theme={
                    {colors: {
                        placeholder: "#fff",
                        primary: "#00C2CC",
                        onSurfaceVariant: "#000",
                    }}
                    
                } label='Nome da Carros' value={busca} onChangeText={setBusca} mode='outlined' outlineColor="#00C2CC" />
            </View>
            <View>
                <FlatList data={Carros} renderItem={({item}) => (
                    <View style={styles.content}>
                        <Text style={styles.titleText}>Nome do Carro: {item.nomeDoCarro}</Text>
                        <Text style={styles.titleText}>Marca do Carro: {item.marcaDoCarro}</Text>
                    </View>
                )} key={(item) => item.id} />
            </View>
        </View>
    )
};