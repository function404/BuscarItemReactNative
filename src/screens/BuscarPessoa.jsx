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
export default function buscarPessoas() {
    const [busca, setBusca] = useState('');
    const [Pessoas, setPessoas] = useState([]);
    const [todosPessoas, setTodosPessoas] = useState([]);
    
    async function fetchPessoas() {
        try{
            const ref = collection(db, 'pessoa');
            const querySnapshot = await getDocs(ref);
            
            const listaPessoas = [];
            querySnapshot.forEach((doc) => {
                listaPessoas.push(doc.data());
            });

            setTodosPessoas(listaPessoas);
        }catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        fetchPessoas(busca);
    }, [busca]);

    useEffect(() => {
        if (busca.trim() === '') {
            setPessoas([]);
        } else {
            const buscaLower = busca.toLowerCase();
            const resultados = todosPessoas.filter((item) =>
                item.nomeDaPessoa.toLowerCase().includes(buscaLower)
            );

            setPessoas(resultados);
        }
    }, [busca, todosPessoas]);

    return (
        <View style={styles.container}>
           <View style={styles.main}>
                <Text style={styles.title}>Pesquise pelo nome das Pessoas</Text>
                <View style={styles.backInfo}>
                    <Text style={styles.backInfoTitle}>Pesquisar por:</Text>
                    <Text>• Lincoln</Text>
                    <Text>• Rogério</Text>
                </View>
            </View>
            <View style={{marginTop: 10,}}>
                <TextInput theme={
                    {colors: {
                        placeholder: "#fff",
                        primary: "#00C2CC",
                        onSurfaceVariant: "#000",
                    }}
                    
                } label='Nome da Pessoa' value={busca} onChangeText={setBusca} mode='outlined'  outlineColor="#00C2CC" />
            </View>
            <View>
                <FlatList data={Pessoas} renderItem={({item}) => (
                    <View style={styles.content}>
                         <Text style={styles.titleText}>Nome da Pessoa: {item.nomeDaPessoa}</Text>
                        <Text style={styles.titleText}>Idade da Pessoa: {item.idadeDaPessoa}</Text>
                    </View>
                )} key={(item) => item.id} />
            </View>
        </View>
    )
};