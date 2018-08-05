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
import Item from '../Components/item'

export default class Todo extends Component {

    constructor(props){
        super(props);
        this.state = {
            task : ['oi'],
            key: '1',
            tasks: ''
        };
    }

    addTodo(tasks,task){
        
        if(tasks){
            let aux = task
            aux.push(tasks)
            this.setState({task: aux, tasks: ''})
        }
        else{
            alert('Empty field, please insert a task!');
        }
    }

  render() {
    return (
      <View style={styles.container}>
        <View style = {styles.header}>
            <Text style = {styles.headerText}> Welcome to your favorite todoList! </Text>
        </View>
        
        <ScrollView style = {styles.container}>
        <FlatList 
            data={this.state.task} 
            keyExtractor={(index) => {this.state.key}}
            // renderItem= {(item) => <Text style = {{fontSize:30}}>{item}</Text>
            // }
            extraData={this.state}
            renderItem={( {item} ) => <TouchableHighlight> <Text> oioioi </Text> </TouchableHighlight>}
        />
              
            
        </ScrollView>
        <Fab
            active={this.state.active}
            direction="up"
            containerStyle={{ }}
            style={{ backgroundColor: '#5067FF', marginBottom: 60 }}
            position="bottomRight"
            onPress={() => (this.addTodo(this.state.tasks,this.state.task))}>
            <Icon name="add" />
          </Fab>

        <View style = {styles.bottom}>
            <TextInput placeholder = 'Type some task to do here' 
                onChangeText = {(tasks) => this.setState({tasks})}
                value = {this.state.tasks}
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
  