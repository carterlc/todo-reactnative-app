import React, { useEffect, useState } from 'react';
import {
  FlatList,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  TextInput,
  View,
} from 'react-native';


const App = () => {
  const testTodo = { id: 29, text: 'hello', completed: false };
  const testTodo2 = { id: 2, text: 'bye', completed: false };

  const [todos, setTodos] = React.useState([testTodo, testTodo2]);
  const [newTodo, setNewTodo] = React.useState("");

  const [selectedId, setSelectedId] = useState();

  const renderItem = ({ item }) => {
    const backgroundColor = item.id === selectedId ? '#6e3b6e' : '#f9c2ff';
    const color = item.id === selectedId ? 'white' : 'black';

    return (
      <Item
        key={item.id}
        item={item}
        onPress={() => setSelectedId(item.id)}
        // backgroundColor={backgroundColor}
        // textColor={color}
      />
    );
  };

  const Item = ({ item, onPress, backgroundColor, textColor }) => (
    <TouchableOpacity onPress={onPress} style={[styles.item, { backgroundColor }]}>
      <Text style={[styles.title, { color: textColor }]}>{item.text}</Text>
    </TouchableOpacity>
  );

  const addTodo = () => {
    setTodos([...todos, { id: Date.now(), text: newTodo, completed: false }]);
  };

  useEffect(() => {
    console.log(newTodo)
  },[newTodo]);
  

  const Footer = (props) => {
    return (
      <>
        <View style={styles.searchBar}>
          <TextInput style={styles.input} placeholder={'Write a Todo...'} onChangeText={text => setNewTodo(text)} value={newTodo} />
          <TouchableOpacity onPress={addTodo}>
            <View style={styles.addWrapper}>
              <Text style={styles.plusIcon}>+</Text>
            </View>
          </TouchableOpacity>
        </View>
      </>
    )
  }

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={todos}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        extraData={selectedId}
        ListFooterComponent={Footer}
      />
    </SafeAreaView >
  );



};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  item: {
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
  addWrapper: {
    width: 40,
    height: 40,
    backgroundColor: '#FFF',
    borderRadius: 60,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
  },
  plusIcon: {
    fontSize: 20,
  },
  searchBar: {
    display: 'flex',
  }
});

export default App;
