function TodoStats({ todos }) {
  const completedCount = todos.filter(todo => todo.completed).length
  const pendingCount = todos.filter(todo => !todo.completed).length

  return (
    <div className="todo-stats">
      <p>Total tasks: {todos.length}</p>
      <p>Completed: {completedCount}</p>
      <p>Pending: {pendingCount}</p>
    </div>
  )
}

export default TodoStats
