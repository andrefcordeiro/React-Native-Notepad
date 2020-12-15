import { StyleSheet, Dimensions } from 'react-native'

const Styles = StyleSheet.create({


    image: {
        height: Dimensions.get('window').height / 16,
        width: Dimensions.get('window').width / 10,
        marginRight: 10

    }
})

export default Styles