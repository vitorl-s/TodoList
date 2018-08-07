import React from 'react';
import {StyleSheet,
    Text, 
    TextInput, 
    View, 
    FlatList,
    } from 'react-native';
import Item from '../Components/item';
import AddButton from '../Components/addButton';

export default class Todo extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            tasks : ['add tasks', 'delete tasks' , 'edit tasks', 'toggle tasks' , 'finish'],
            add: '',
            edit: '',
            completed: true,
            modalVisible: false
        };
    }

    addTodo(text,tasks){
        if(text){
            let aux = tasks
            aux.push(text)
            this.setState({tasks: aux, add: ''});
        }
        else{
            alert('Empty field, please insert a task!');
        }
    }

    ToggleModal(text){
        this.setState({text: text, modalVisible: true});
    }

    editTodo(text,tasks,value){
        if(value){
            let aux = tasks;
            let index = aux.indexOf(text);
            aux[index] = value;
            this.setState({tasks: aux, modalVisible:false});
        }
        else{
            alert('No blank field allowed!');
        }
    }

    deleteTodo(tasks,text){
        let aux = tasks;
        let index = aux.indexOf(text);
        aux.splice(index,1);
        this.setState({tasks: aux});
    }
    
  render() {
    return (
      <View style={styles.container}>
        <View style = {styles.header}>
            <Text style = {styles.headerText}> Welcome to your favorite todoList!</Text>
        </View>
        <FlatList 
            data={this.state.tasks} 
            keyExtractor={(index) => index.toString()}
            extraData={this.state}
            renderItem={({item}) => (<Item text = {item}
                completed = {() => this.completeTodo(this.state.completed)} 
                delete = {() => {this.deleteTodo(this.state.tasks,item)}}
                edit = {() => {this.ToggleModal(item)}}
                visible ={this.state.modalVisible} 
                confirmEdit = {() => {this.editTodo(this.state.text,this.state.tasks,this.state.edit)}}
                onChangeText = {(edit) => this.setState({edit})}/>
            )}
        />
        <AddButton addTodo = {() => this.addTodo(this.state.add,this.state.tasks)}/>
        <View style = {styles.bottom}>
            <TextInput placeholder = 'Type some task to do here' 
                onChangeText = {(add) => this.setState({add})} value = {this.state.add}
                style = {{fontSize: 20}} placeholderTextColor = 'black'
            />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
    container: {
      flex: 1
    },
    header:{
        backgroundColor: 'lightblue',
        alignItems: 'center',
        padding: 16,
        borderBottomWidth: 2.5,
        borderBottomColor: 'black'
    },
    headerText:{
        fontSize: 24,
        color: 'black'
    },
    bottom:{
        backgroundColor: 'lightblue',
        padding: 9
    },
  });
  