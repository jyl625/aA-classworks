export const allTodos = (state) => Object.values(state.todos)
export const stepsByTodoId = (state, todoId) => {
  let allSteps = Object.values(state.steps)

  return allSteps.filter( step => step.todo_id === todoId );
}

