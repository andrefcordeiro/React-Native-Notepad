import { StyleSheet, Dimensions } from 'react-native'

const Styles = StyleSheet.create({

    txt_title: {
        flex: 1,
        alignSelf: 'center',
        fontSize: 40,
        fontWeight: 'bold',
        marginTop: 20,
        marginBottom: 20,
        color: '#FCF8C9'

    },
    view_title:{
        backgroundColor: '#141212',
        width: Dimensions.get('screen').width
        
    },
   
})

export default Styles