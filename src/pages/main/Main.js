import React from 'react'
import { View, Text, ScrollView, AppState, Dimensions } from 'react-native'
import ButtonOperations from '../components/buttonNotesOperations/Button'
import Styles from './Styles'
import Note from '../components/ItemNote/Note'
import AsyncStorage from '@react-native-community/async-storage'

class Main extends React.Component {

    is_mounted = false;

    state = {

        qtd: [
            {
                key: '',
                text: '',
                image: 'normal'
            }
        ],
        font: 'normal',
        appState: AppState.currentState

    }
    //ASSIM QUE O COMPONENTE É MONTADO
    componentDidMount() {
        AppState.addEventListener('change', this._handleAppStateChange);
        this._isMounted = true
        this.get_data()
    }
    //ASSIM QUE O COMPONENTE É ATUALIZADO
    componentDidUpdate() {
        this.save_data()
    }
    //ASSIM QUE O COMPONENT É DESMONSTADO
    componentWillUnmount() {
        if (this._isMounted == true) {
            this._isMounted = false
            AppState.removeEventListener('change', this._handleAppStateChange);

        }
    }
    //LIDA COM O ESTADO DO APP
    _handleAppStateChange = (nextAppState) => {
        if (nextAppState === 'background' || nextAppState === 'inactive') {
            this.save_data()
        }
    }
    //FUNÇÃO PARA ADICIONAR NOVA NOTA
    Add_note = () => {
        let novo = [{ key: this.state.qtd.length - 1, text: '', image: 'normal' }]
        var qtd_copy = this.state.qtd.concat(novo)
        this.setState({ qtd: qtd_copy })
    }
    //FUNÇÃO PARA EXCLUIR TODAS AS NOTAS
    Del_all_note = async () => {
        var qtd = this.state.qtd  //a var qtd recebe o vetor que guarda as keys
        qtd = JSON.stringify(qtd)

        try {
            await AsyncStorage.getAllKeys().then(AsyncStorage.multiRemove)
            this.setState({ qtd: [] })
        }
        catch (e) {
            alert('ERROR') //erro ao deletar todas as notas
        }

    }
    //FUNÇÃO PARA SALVAR CONTEUDO NA MEMORIA DO CELULAR
    save_data = async () => {  //async aqui 
        try {
            await AsyncStorage.setItem('key_qtd', JSON.stringify(this.state.qtd)) //transforma o value da key em string   //await aqui

        } catch (error) {

        }
    }
    //FUNÇÃO PARA RECEBER O VALOR JÁ ARMAZENADO NO CELULAR
    get_data = async () => {

        try {
            var value = await AsyncStorage.getItem('key_qtd') //value guarda o objeto qtd
            value = JSON.parse(value)

            if (value !== null) {
                this.setState({ qtd: value })
            }
            else {
                this.setState({ qtd: [] })
            }

        } catch (error) {
            alert('ERRO')
        }

    }
    //ATRIBUI O ONCHANGETEXT NO ESTADO DO COMPONENT
    set_value_text = (text, key) => {

        var qtd_copy = JSON.parse(JSON.stringify(this.state.qtd))
        let index = qtd_copy.findIndex(i => i.key === key)  //encontra o index do valor que eu procuro, no caso o "key"

        qtd_copy[index].text = text
        this.setState({ qtd: qtd_copy })

    }
    //FUNÇÃO PARA ALTERAR A IMAGEM AO LADO DO TEXTO
    change_image = (key) => {
        var qtd_copy = JSON.parse(JSON.stringify(this.state.qtd))
        let index = qtd_copy.findIndex(i => i.key === key)

        if (qtd_copy[index].image == 'normal') {
            qtd_copy[index].image = 'check'
            this.setState({ qtd: qtd_copy })
        }

        else {
            qtd_copy[index].image = 'normal'
            this.setState({ qtd: qtd_copy })
        }

    }

    render() {
        //.map É UMA FUNÇÃO QUE PERCORRE TODO UM ARRAY, É NECESSÁRIO UMA KEY COMO PROP PARA CADA ITEM
        const buttons = this.state.qtd.map(
            (item) => //item representa cada item do array de objetos
                <Note key={item.key} qtd={this.state.qtd} item={item} funcImage={this.change_image} funcText={this.set_value_text}  ></Note>
        )

        return (
            <View style={{ flex: 1, backgroundColor: '#FCE300' }}>
                <ScrollView>
                    <View style={Styles.view_title}>
                        <Text style={Styles.txt_title}> NOTEPAD </Text>
                    </View>
                    <View style={{ alingSelf: 'flex-start', width: Dimensions.get('screen').width }}>
                        <View style={{ alignItems: 'center' }}>
                            {buttons}
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                                <ButtonOperations func={this.Add_note} text='ADD NOTE'></ButtonOperations>
                                <ButtonOperations func={this.Del_all_note} text='DELETE ALL NOTES'></ButtonOperations>
                            </View>
                        </View>
                    </View>
                </ScrollView>
            </View>
        )
    }

}
export default Main











