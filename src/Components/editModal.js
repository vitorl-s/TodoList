import React from 'react';
import {StyleSheet, View, TouchableHighlight, Text, Modal, TextInput } from 'react-native';

class EditModal extends React.Component{
    render(){
        return(
        <View>
            <Modal transparent={true} animationType = 'fade' visible={this.props.visible}
                onRequestClose={() => {}}>
                <View style={styles.centerModal}>
                    <View style={styles.insideModal}>
                        <Text style={styles.text}> Insert the new task! </Text>
                        <View style={styles.container}>
                            <TextInput style = {styles.input}
                            placeholder = 'type here!' placeholderTextColor = 'black'
                            onChangeText = {this.props.onChangeText}
                            />
                        </View>
                        <TouchableHighlight onPress = {this.props.confirmEdit}> 
                            <Text style = {styles.text}> Confirm edit</Text>
                        </TouchableHighlight>
                    </View>
                </View>
            </Modal>
        </View>)
    }
}
const styles = StyleSheet.create({
    centerModal:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    insideModal:{
        width: 230,
        height: 180, 
        backgroundColor:'#ffff62'
    },
    text: {
        fontSize: 18,
        marginTop: 20,
        color: 'black',
        marginLeft: 30
      },
    input:{
        fontSize: 16
    },
    container:{
        marginLeft: 30,
        marginTop: 10
    }
});
  
export default EditModal;