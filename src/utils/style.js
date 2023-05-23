import { StyleSheet } from 'react-native';


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    titleText: {
        marginTop: 7,
        fontSize: 17,
        fontWeight: 'bold',
    },
    content: {
        margin: 10,
    },
    title:{
        fontSize: 22,
    },

    divHome:{
        alignItems: 'center',
        justifyContent: 'center',
        margin: 15,
    },
    tilteHome:{
        fontSize: 22,
        padding: 10,
        fontWeight: 'bold',
        borderColor: '#00c2cc',
        borderTopWidth: 2,
        borderTopRightRadius: 10,
        borderTopLeftRadius: 10,
        borderBottomWidth: 2,
        borderBottomRightRadius: 10,
        borderBottomLeftRadius: 10,
    },
    buttonStyle:{
        backgroundColor: '#00c2cc',
        borderColor: '#005454',
        margin: 5,
    },
});

export default styles;