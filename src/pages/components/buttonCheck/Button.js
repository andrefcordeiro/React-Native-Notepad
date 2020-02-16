import React from 'react'
import { TouchableOpacity, Image} from 'react-native'
import Styles from './Styles'

class ButtonCheck extends React.Component {


    render() {

        //*RENDER COM CONDICIONAIS*           

            if(this.props.image == 'normal'){
                return (
                    <TouchableOpacity onPress={() =>  this.props.funcImage() }>
                        <Image source={require('./square.png')}
                            style={Styles.image}
                        ></Image>
                    </TouchableOpacity>
                )
            }
            else if(this.props.image == 'check'){
                return (
                    <TouchableOpacity onPress={() =>  this.props.funcImage()}>
                        <Image source={require('./square_check.png')}
                            style={Styles.image}
                        ></Image>
                    </TouchableOpacity>
                )
            }   
    }
}


export default ButtonCheck