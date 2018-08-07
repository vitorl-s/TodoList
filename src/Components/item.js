import React from 'react';
import {StyleSheet, View, TouchableHighlight, Text } from 'react-native';
import {Icon,Button} from 'native-base';
import EditModal from '../Components/editModal';

class Item extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      completed : false
    };
  }

  completeTodo(){
    this.setState({completed: !this.state.completed})
    console.log(this.state.completed);
}
  render() {
    return (
      <View style={styles.container}>
        <TouchableHighlight style={styles.item} underlayColor = 'transparent'
        onPress={() => this.completeTodo()}
        >
          <Text style = {[styles.text, this.state.completed ? styles.completedText : {}]}>
            {this.props.text}
          </Text>

        </TouchableHighlight>
        <Button transparent = {true} iconRight style = {styles.editButton} small>
          <Icon name= 'edit' style = {styles.delete} type = 'Entypo' onPress={this.props.edit}/>
        </Button>

        <EditModal visible={this.props.visible} 
        confirmEdit = {this.props.confirmEdit}
        onChangeText = {this.props.onChangeText}/>

        <View style = {styles.deleteButton}>
          <Button transparent = {true} iconRight>
              <Icon name= 'delete' style = {styles.delete} type = 'MaterialCommunityIcons'
                onPress={this.props.delete}
              />
          </Button>
        </View>
    </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    height: 40,
    borderBottomWidth: 1,
    flexDirection: 'row',
  },
  item: {
    flex: 1
  },
  text: {
    fontSize: 20,
    marginLeft: 15,
    marginTop: 5,
    color: 'black'
  },
  completedText: {
    textDecorationLine: 'line-through',
    color: 'gray'
  },
  delete: {
    fontSize: 26
  },
  deleteButton:{
    marginTop: 5,
    alignSelf: 'center',
    justifyContent: 'center',
  },
  editButton:{
    marginTop: 5
  }});


export default Item;