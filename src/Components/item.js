import React from 'react';
import { Alert, View, TouchableHighlight, Text } from 'react-native';
import {Icon,Button} from 'native-base';

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
  center:{
    alignSelf: 'center',
    justifyContent: 'center'
  },
  deleteButton:{
    marginTop: 5,
    alignSelf: 'center',
    justifyContent: 'center',
  },
  editButton:{
    marginTop: 5
  }
}

class Item extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <TouchableHighlight style={styles.todo}
          underlayColor="#f5f5f5"
          onPress={this.props.completed}
        >
          <Text style = {styles.text}>
            {this.props.text}
          </Text>
        </TouchableHighlight>
        <Button transparent = {true} iconRight style = {styles.editButton} small>
              <Icon name= 'edit' style = {styles.delete}
                type = 'Entypo'
                onPress={this.props.edit}
              />
            </Button>
        <View style = {styles.deleteButton}>
          <Button transparent = {true} iconRight>
              <Icon name= 'delete' style = {styles.delete}
                type = 'MaterialCommunityIcons'
                onPress={this.props.delete}
              />
            </Button>
          </View>
      </View>
    );
  }
}


export default Item;