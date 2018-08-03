import React, {Component} from 'react';
import {StyleSheet, 
    Text, 
    TextInput, 
    View, 
    ScrollView,
    FlatList,
    } from 'react-native';
import {Fab,Icon,Button} from 'native-base';

export default class Todo extends Component {

    constructor(props){
        super(props);
        this.state = {
            task : ['oi','oi2'],
            key: '1',
            tasks: ''
        };
    }

    addTodo(tasks){
        // if(tasks){
        //     return this.setState({...this.state.task})
        // }
        alert("oi");
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
            renderItem={( {item} ) => (<Text style = {{fontSize:22}}> {item} </Text>)}
        />
              
            
        </ScrollView>
        <Fab
            active={this.state.active}
            direction="up"
            containerStyle={{ }}
            style={{ backgroundColor: '#5067FF', marginBottom: 60 }}
            position="bottomRight"
            onPress={() => (this.addTodo(this.state.tasks))}>
            <Icon name="add" />
          </Fab>

        <View style = {styles.bottom}>
            <TextInput placeholder = 'Type some task to do here' 
                onChangeText = {(tasks) => this.setState({tasks})}
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
  