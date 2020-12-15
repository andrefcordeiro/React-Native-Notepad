
import { StyleSheet, Dimensions } from 'react-native'

const Styles = StyleSheet.create({


    button: {

        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10,
        backgroundColor: '#141212',
        height: 70,
        width: Dimensions.get('window').width / 3,
        borderWidth: 3,
        borderColor: 'black',
        marginTop: 5,
        marginBottom: 15,
        marginRight: 40,
        marginLeft: 40,

    },
    text: {

        color: '#FCE300',
        fontSize: 11,
        fontWeight: 'bold'

    },



})

export default Styles