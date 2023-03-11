import React, { useEffect, useState, useRef, Button } from 'react';
import {
  FlatList,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  TextInput,
  View,
  KeyboardAvoidingView,
} from 'react-native';

const App = () => {

  const [todos, setTodos] = React.useState([]);
  let newText = "";

  const renderItem = ({ item }) => {
    const backgroundColor = item.completed ? 'white' : 'white';
    const color = item.completed ? '#DADADA' : 'black';

    const completeItem = id => {
      console.log(id);
      //Loop through the array of todo
      const updatedTodos = todos.map(todo => {
        if (todo.id === id) {
          // find the object that has the id and change
          // the checked value of the item from true to false
          todo.completed = !todo.completed;
        }
        return todo;
      });
      // call setTodos with the new array
      console.log(updatedTodos);
      setTodos(updatedTodos);
    }


    return (
      <View style={styles.todo}>
        <Item
          key={item.id}
          item={item}
          onPress={() => completeItem(item.id)}
          backgroundColor={backgroundColor}
          textColor={color}
          style={styles.listItem}
        />
        <TouchableOpacity onPress={() => handleDeleteTodo(item.id)} style={styles.deleteButton}>
          <View>
            <Text style={styles.deleteText}>delete</Text>
          </View>
        </TouchableOpacity>
      </View>
    );
  };

  const Item = ({ item, onPress, backgroundColor, textColor }) => (
    <TouchableOpacity onPress={onPress} style={[styles.item, { backgroundColor }]}>
      <Text style={[styles.title, { color: textColor }]}>{item.text}</Text>
    </TouchableOpacity>
  );

  const addTodo = () => {
    setTodos([...todos, { id: Date.now(), text: newText, completed: false }]);
  };

  const handleDeleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
    console.log();
  };

  const Header = () => {
    return (
      <>
      <Text style={styles.heading}>To do list</Text>
      <View style={styles.writeTaskWrapper}>
        <TextInput style={styles.input} placeholder={'Write a Todo...'} onChangeText={text => newText = text} />
        <TouchableOpacity onPress={addTodo}>
          <View style={styles.addWrapper}>
            <Text style={styles.icon}>+</Text>
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

        ListHeaderComponent={Header}

      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // marginTop: StatusBar.currentHeight || 0,
  },
  item: {
    padding: 20,
    flex: 1,
    // marginVertical: 8,
  },
  title: {
    fontSize: 32,
  },
  input: {
    height: 40,
    flex: 1,
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
  writeTaskWrapper: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
  },
  icon: {
    fontSize: 20,
  },
  todo: {
    flexDirection: 'row',
    marginHorizontal: 20,
  },
  deleteButton: {
    backgroundColor: 'red',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
    color: 'white',
  },
  deleteText: {
    color: 'white',
  },
  heading: {
    fontSize:40,
    color: 'black',
    textAlign:'center',
    fontWeight: 'bold',
  }
});

export default App;
