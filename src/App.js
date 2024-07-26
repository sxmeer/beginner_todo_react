import React, { useState, useEffect } from 'react';
import { Button, FormControl, Input, InputLabel } from '@material-ui/core';
import './App.css';
import Todo from './Todo';
import db from './firebase';
import firebase from 'firebase';

function App() {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState('');

  useEffect(() => {
    //this code here fires when the app.js loads
    console.log('use effect called');
    db.collection('todos').orderBy('server_timestamp', 'desc').onSnapshot(snapshot => {
      setTodos(snapshot.docs.map(doc => ({ id: doc.id, todo: doc.data().todo })));
    })
  }, []);

  const addTodo = (event) => {
    event.preventDefault();
    db.collection('todos').add({
      todo: input,
      server_timestamp: firebase.firestore.FieldValue.serverTimestamp()
    })
    setInput('');
  }

  return (
    <div className="App">
      <h1>Welcome to my first react app with firebase!</h1>
      <form>
        <FormControl>
          <InputLabel>Write a Todo</InputLabel>
          <Input value={input} onChange={event => setInput(event.target.value)} />
        </FormControl>
        <Button type="submit" disabled={!input} variant="contained" onClick={addTodo} color="primary">
          Add Todo</Button>
      </form>
      <div className="container">
        {todos.map((todo) => (<Todo todo={todo} />))}
      </div>
    </div>
  );
}

export default App;
