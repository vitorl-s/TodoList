import React from 'react';
import { Alert, View, TouchableHighlight, Text } from 'react-native';
//import { toggleTodo, removeTodo } from '../Actions/todo';


const styles ={
  container: {
    height: 40,
    borderBottomWidth: 1,
    flexDirection: 'row',
  },
  todo: {
    flex: 1
  },
  text: {
    fontSize: 20,
    marginLeft: 10,
    color: 'black'
  },
  completedText: {
    textDecorationLine: 'line-through',
    color: 'red'
  },
  delete: {
    backgroundColor: 'red',
    padding: 8
  },
  center:{
    alignSelf: 'center',
    justifyContent: 'center'
  }
}

class Item extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <TouchableHighlight
          style={styles.todo}
          underlayColor="#f5f5f5"
          onPress={this.props.completed}
        >
          <Text style = {styles.text}>
            {this.props.text}
          </Text>
        </TouchableHighlight>
        <TouchableHighlight
          style={styles.delete}
          onPress={this.props.delete}
        >
          <Text style = {styles.center}>X</Text>
        </TouchableHighlight>
      </View>
    );
  }
}


export default Item;