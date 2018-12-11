import React from 'react';
import { StyleSheet, Text, View , Button, TextInput, FlatList, ScrollView} from 'react-native';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      text: '',
      list: []
    };
    this.changeText = this.changeText.bind(this);
    this.addNew = this.addNew.bind(this);
  }

  changeText = (t) => {
    const text = t;
    this.setState({ text });
  };
  
  addNew = () => {
    let list = this.state.list;
    list.push(this.state.text);
    this.setState(() => ({
      list: list,
      text: '',
    }));
    console.log(list[0]);
  };

  render() {
    return (
      <View style={styles.container}>
      <TextInput
          style={styles.textInput}
          value={this.state.text}
          onChangeText={this.changeText}
          placeholder="Write a Todo"
        />
        <Button
          style={styles.button}
          onPress={this.addNew}
          title="+"
        />
        <FlatList
        data={this.state.list}
        renderItem={this.state.text}
      />
           
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
    padding: 10,
    paddingTop: 20
  },
  list: {
    width: "100%"
  },
  textInput: {
    backgroundColor: '#fff',
    width: 320,
    height: 40,
    padding: 8,
    marginBottom: 8,
  },
  button: {
    borderColor: 'black',
    borderWidth: 1
  },
  todoItem: {
    alignItems: 'center',
    padding: 8,
    width: 320,
    borderBottomWidth: 1.5,
    borderColor: '#e0e0e0',
    backgroundColor: '#fff',
    flex: 1,
    flexDirection: 'row',
  },
  todoText: {
    flex: 1,
  }
});
