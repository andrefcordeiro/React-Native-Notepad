import React from 'react'
import { TouchableOpacity, Text} from 'react-native'
import Styles from './Styles'

class ButtonOperations extends React.Component{

    render(){
    
        return (
            <TouchableOpacity onPress={() => this.props.func()} style={Styles.button}>
                 
                 <Text style={Styles.text} > {this.props.text} </Text>

            </TouchableOpacity>
    
        )
     
     }
}
    
export default ButtonOperations