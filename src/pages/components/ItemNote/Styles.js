import { StyleSheet, Dimensions } from 'react-native'

const Styles = StyleSheet.create({

    view_notes: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start',
        paddingBottom: 5,
        paddingLeft: 10,
        paddingTop: 10,


    },
    txt_input: {
        textAlign: 'left',
        fontSize: 15,
        backgroundColor: '#141212',
        height: Dimensions.get('screen').height / 15,
        borderWidth: 3,
        borderColor: 'black',
        borderRadius: 10,
        color: '#FCF8C9'
    }

})

export default Styles