/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useState, useEffect } from 'react';

import {
  FlatList,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  useColorScheme,
  TouchableOpacity,
  View,
  Button,
  ListHeaderComponent,
} from 'react-native';

function App() {
const testTodo = {id:29, text:'hello', completed:false}
  const [todos, setTodos] = useState([testTodo]);
  const [newTodo, setNewTodo] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    setTodos([...todos, { id: Date.now(), text: newTodo, completed: false }]);
    setNewTodo("");
  };

  const handleToggleCompleted = (id) => {
    setTodos(
      todos.map((todo) => {
        if (todo.id === id) {
          return { ...todo, completed: !todo.completed };
        } else {
          return todo;
        }
      })
    );
  };

  const handleDeleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
    console.log();
  };

  useEffect(() => {
    console.log(todos);
  }, [todos]);

  const Header = (props) => {
    return (
      <View>
        <Text>Todo:</Text>
        <TextInput value={newTodo} onChange={(event) => setNewTodo(event.target.value)}></TextInput>
        <Button title='Submit' />
      </View>
    );
  };

  return (

    <FlatList ListHeaderComponent={<Header />}>
      {todos.map((todo) => {
        return (
          <View key={todo.id}>
          <Text>Hello</Text>
          <Button title='complete' onPress={() => handleToggleCompleted(todo.id)} />
          <Button onPress={() => handleDeleteTodo(todo.id)} title='Delete'/>
          </View>
          );
        })}
    </FlatList >
  );

}


export default App;

