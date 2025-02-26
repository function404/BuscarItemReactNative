import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f4f4f4',
        alignItems: 'center',
        justifyContent: 'center',
    },
    titleText: {
        marginTop: 7,
        fontSize: 17,
        fontWeight: '600',
        textAlign: 'center',
    },
    content: {
        margin: 10,
    },
    title:{
        fontSize: 22,
        margin: 30,
        alignItems: 'center',
        borderBottomWidth: 2,
        borderBottomColor: '#00c2cc',
    },

  
    backInfo:{
        padding: 10,
        textAlign: 'center',
        backgroundColor: '#fff',
        border: '1px solid #00c2cc',
        flex: 1,
        width: '50%',
        margin: 'auto',
        alignItems: 'center',
        justifyContent: 'center',
    },
    backInfoTitle:{
        fontSize: 17,
        fontWeight: '600',
    },

    divHome:{
        alignItems: 'center',
        justifyContent: 'center',
        margin: 15,
    },
    tilteHome:{
        fontSize: 22,
        padding: 10,
        fontWeight: '600',
        alignItems: 'center',
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