/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';

import {
  FlatList,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  useColorScheme,
  View,
} from 'react-native';

function App() {

  const [todos, setTodos] = useState([]);
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

  render() {
    return (
      // form
      <FlatList onSubmitEditing={handleSubmit}>
        
        {/* textfield */}
        <TextInput value={newTodo} onChange={(event) => setNewTodo(event.target.value)}></TextInput>

        {/* button */}
        <TouchableOpacity onPress={somethinghere}>
          <Text>Add to do</Text>
        </TouchableOpacity>
        
        {/* ul */}
        <View>
          
          
          // li
          <Input key={todo.id} checked={todo.completed} onChange={() => handleDeleteTodo(todo.id)}>
          </Input>

          // Span
          <Text style={{ textDecoration: todo.completed ? "line-through" : "none"}}>
          {todo.text}
          </Text>
          
          {/* second button here */ }
          < TouchableOpacity onPress = {() => handleDeletedTodo(todo.id)}>
          <Text>Delete</Text>
          </TouchableOpacity>
        </View>

      </FlatList >
    );
}
}


export default App;

