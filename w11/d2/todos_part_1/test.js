const newTodos2 = [
  { id: 4, title: "New Todo" },
  { id: 5, title: "New Thing" },
  { id: 6, title: "Todo Todo" }
]

store.dispatch(receiveTodo({ id: 4, title: "New Todo" }));

store.dispatch(receiveTodos(newTodos));