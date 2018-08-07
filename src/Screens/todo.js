import React, {Component} from 'react';
import {Text, 
    TextInput, 
    View, 
    FlatList,
    } from 'react-native';

import Item from '../Components/item';
import AddButton from '../Components/addButton';

export default class Todo extends Component {

    constructor(props){
        super(props);
        this.state = {
            tasks : ['oi','teste','olá','kk'],
            key: '1',
            text: '',
            completed: false
        };
    }

    addTodo(text,tasks){
        
        if(text){
            let aux = tasks
            aux.push(text)
            this.setState({tasks: aux, text: ''})
        }
        else{
            alert('Empty field, please insert a task!');
        }
    }

    deleteTodo(tasks,text){
        let aux = tasks;
        var index = aux.indexOf(text);
        aux.splice(index,1);
        this.setState({tasks: aux})
    }

  render() {
    return (
      <View style={styles.container}>
        <View style = {styles.header}>
            <Text style = {styles.headerText}> Welcome to your favorite todoList! </Text>
        </View>
        <FlatList 
            data={this.state.tasks} 
            keyExtractor={(index) => {this.state.key}}
            extraData={this.state}
            renderItem={( {item} ) => (
                <Item text = {item} 
                delete = {() => {this.deleteTodo(this.state.tasks,item)}}
                />)}
        />
        <AddButton addTodo = {() => this.addTodo(this.state.text,this.state.tasks)}/>
        <View style = {styles.bottom}>
            <TextInput placeholder = 'Type some task to do here' 
                onChangeText = {(text) => this.setState({text})}
                value = {this.state.text}
                style = {{fontSize: 20}}
                placeholderTextColor = 'black'
            />
        </View>
      </View>
    );
  }
}

const styles = {
    container: {
      flex: 1
    },
    header:{
        backgroundColor: 'lightblue',
        alignItems: 'center',
        padding: 16,
        borderBottomWidth: 2,
        borderBottomColor: 'black'
    },
    headerText:{
        fontSize: 24,
        color: 'purple'
    },
    bottom:{
        backgroundColor: 'lightblue',
        padding: 9
    },
  };
  