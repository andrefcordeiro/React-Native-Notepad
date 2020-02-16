import React from 'react'
import { View, Text, TextInput} from 'react-native'
import Styles from './Styles'
import ButtonCheck from '../buttonCheck/Button'

class Note extends React.Component{

    funcImage = this.props.funcImage.bind(this)
    funcText = this.props.funcText.bind(this)
    
    render(){

        return(                                                     //funcImage = {() => this.change_image(this.props.item.id)}
            <View style={Styles.view_notes}>
                <ButtonCheck image = {this.props.item.image} funcImage = {() => this.funcImage(this.props.item.id)} ></ButtonCheck>
                <TextInput
                    style={Styles.txt_input}
                    placeholder='                                                                           '
                    onChangeText={(text) => this.funcText(text, this.props.item.id)}
                    defaultValue =  {this.props.item.text}
                > 
                </TextInput> 
                <Text>{this.props.qtd.text}</Text>
                {/* aqui era qtd no lugar de item */}
            </View>
        )
    }
  
}

export default Note

