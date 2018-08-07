import React from 'react';
import {Icon,Fab} from 'native-base';

class AddButton extends React.Component {
    render() {
      return (
        <Fab
            active={true}
            direction="up"
            containerStyle={{ }}
            style={{ backgroundColor: '#5067FF', marginBottom: 60 }}
            position="bottomRight"
            onPress={this.props.addTodo}>
            <Icon name="add" />
          </Fab>
      );
    }
  }
  
  export default AddButton;