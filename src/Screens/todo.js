import React, {Component} from 'react';
import {StyleSheet, 
    Text, 
    TextInput, 
    View, 
    ScrollView,
    FlatList,
    } from 'react-native';

export default class Todo extends Component {

    constructor(props){
        super(props);
        this.state = {
            task : ['oi','oi2'],
            key: '1'
        };
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
            keyExtractor={(index) => {key: this.state.key}}
            // renderItem= {(item) => <Text style = {{fontSize:30}}>{item}</Text>
            // }
            renderItem={( {item} ) => (<Text> title={item} </Text>)}
        />
              
            
        </ScrollView>

        <View style = {styles.bottom}>
            <TextInput placeholder = 'Type some task to do here' 
                onChangeText = {(task) => this.setState({task})}
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
  