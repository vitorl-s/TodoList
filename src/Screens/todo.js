import React, {Component} from 'react';
import {StyleSheet, 
    Text, 
    TextInput, 
    View, 
    ScrollView,
    FlatList,
    TouchableHighlight
    } from 'react-native';
import {Fab,Icon,Button} from 'native-base';
import Item from '../Components/item';

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
        let aux = tasks
        console.log('Antes de remover:', aux)
        var index = aux.indexOf(text)
        console.log('indice', index);
        aux.splice(index,1)
        console.log('apos remover:',aux)
        this.setState({tasks: aux})
    }

  render() {
    return (
      <View style={styles.container}>
        <View style = {styles.header}>
            <Text style = {styles.headerText}> Welcome to your favorite todoList! </Text>
        </View>
        <ScrollView style = {styles.container}>
        <FlatList 
            data={this.state.tasks} 
            keyExtractor={(index) => {this.state.key}}
            extraData={this.state}
            renderItem={( {item} ) => (
                <Item text = {item} 
                delete = {() => {this.deleteTodo(this.state.tasks,item)}}
                />
            )}
        />      
        </ScrollView>
        <Fab
            active={this.state.active}
            direction="up"
            containerStyle={{ }}
            style={{ backgroundColor: '#5067FF', marginBottom: 60 }}
            position="bottomRight"
            onPress={() => (this.addTodo(this.state.text,this.state.tasks))}>
            <Icon name="add" />
          </Fab>
        <View style = {styles.bottom}>
            <TextInput placeholder = 'Type some task to do here' 
                onChangeText = {(text) => this.setState({text})}
                value = {this.state.text}
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
        padding: 20,
        borderBottomWidth: 2,
        borderBottomColor: 'black'
    },
    headerText:{
        fontSize: 24,
        color: 'purple'
    },
    bottom:{
        backgroundColor: 'gray',
        padding: 11
    },
    addButton:{

    }
  });
  