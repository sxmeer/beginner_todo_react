import { List, ListItem, ListItemText } from '@material-ui/core'
import React from 'react'
import './Todo.css'
import db from './firebase';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';

function Todo(props) {
  return (
    <div class="task">
      <List>
        <ListItem>
          <ListItemText secondary="Dummy deadline.." primary={props.todo.todo} />
        </ListItem>
        <DeleteForeverIcon onClick={event => db.collection('todos').doc(props.todo.id).delete()} />
      </List>
    </div>
  )
}

export default Todo
