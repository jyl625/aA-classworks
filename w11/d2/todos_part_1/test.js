// import { removeTodo } from "./frontend/actions/todo_actions";

const newTodos2 = [
  { id: 4, title: "New Todo" },
  { id: 5, title: "New Thing" },
  { id: 6, title: "Todo Todo" }
]

store.dispatch(receiveTodo({ id: 4, title: "New Todo" }));
store.dispatch(removeTodo({ id: 4, title: "New Todo" }));

store.dispatch(receiveTodos(newTodos2));


const newTodos = [
  { id: 1, title: 'Learn Redux', body: 'It is fundamental', done: false }, 
  { id: 2, title: 'asdf', body: 'asdfasdf', done: false }
];

v

store.dispatch(receiveTodos(newTodos));
store.dispatch(receiveSteps(newSteps));
store.getState(); // should return only the new todos and steps

store.dispatch(receiveTodo({ id: 3, title: "New Todo" }));
store.dispatch(receiveStep({ 
  id: 3, title: "New Step", 
  todo_id: 2, done: false 
}));
store.getState(); // should include the newly added todo and step

store.dispatch(receiveTodo({ id: 3, title: "Newer Todo" }));
store.dispatch(receiveStep({ id: 3, title: "Newer Step", done: true }));
store.getState(); // should update the previously added todo and step

store.dispatch(removeTodo({ id: 3, title: "Newer Todo" }));
store.dispatch(removeStep({ id: 3, title: "Newer Step" }));
store.getState(); // should not include the previously added todo