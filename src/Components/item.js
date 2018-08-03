import React from 'react';
//import { connect } from 'react-redux';
import { Alert, View, TouchableHighlight, Text } from 'react-native';
import { toggleTodo, removeTodo } from '../Actions/todo';


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
    fontSize: 20
  },
  completedText: {
    textDecorationLine: 'line-through',
    color: 'red'
  },
  delete: {
    backgroundColor: 'red',
    padding: 5
  },
}

class Item extends Component {
  render() {
    return (
      <View style={styles.container}>
        <TouchableHighlight
          style={styles.todo}
          underlayColor="#f5f5f5"
          //onPress={() => this.props.dispatch(toggleTodo(this.props.todo.id))}
        >
          <Text>
            {this.props.todo.text}
          </Text>
        </TouchableHighlight>
        <TouchableHighlight
          style={styles.delete}
          //onPress={() => this.props.dispatch(removeTodo(this.props.todo.id))}
        >
          <Text>X</Text>
        </TouchableHighlight>
      </View>
    );
  }
}


export default connect()(TodoItem);