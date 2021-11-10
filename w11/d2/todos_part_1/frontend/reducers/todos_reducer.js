import { RECEIVE_TODOS, RECEIVE_TODO } from '../actions/todo_actions'

const initialState = {
  1: {
    id: 1,
    title: "wash car",
    body: "with soap",
    done: false
  },
  2: {
    id: 2,
    title: "wash dog",
    body: "with shampoo",
    done: true
  }
};

function getTodosObject(todosArr) {
  let todoObj = {};
  todosArr.forEach((todo) => {
    todoObj[todo.id] = todo;
  })
  return todoObj;
}

const todosReducer = (state = initialState, action) => {
  switch (action.type) {
    case RECEIVE_TODOS:
      let todosObj = getTodosObject(action.todos);
      return todosObj
    case RECEIVE_TODO:

      // is this necessary?!?!?!
      Object.freeze(state);
      // let currentState = Object.assign({}, state);
      let newTodo = {}
      newTodo[action.todo.id] = action.todo;

      let allTodos = Object.assign(newTodo, state);

      return allTodos
    default:
      return state;
  }
}

export default todosReducer;