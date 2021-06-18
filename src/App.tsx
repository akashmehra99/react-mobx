import React from 'react';
import { ChakraProvider, Box, theme } from "@chakra-ui/react";
import {TodoList} from './components/ToDoList'
import TodoAdd from './components/ToDoAdd';
import './App.css';

const App = ()=> {
  return (
    <ChakraProvider theme={theme}>
      <Box maxWidth="8xl" margin="auto" p={5}>
        <TodoList />
        <TodoAdd />
      </Box>
    </ChakraProvider>
  );
}

export default App;
