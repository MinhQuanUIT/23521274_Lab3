import { useState } from 'react'

function TodoInput({ onAddTodo }) {
  const [inputValue, setInputValue] = useState('')

  const handleAdd = () => {
    if (inputValue.trim() !== '') {
      onAddTodo(inputValue)
      setInputValue('')
    }
  }

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleAdd()
    }
  }

  return (
    <div className="input-section">
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        onKeyPress={handleKeyPress}
        placeholder="Add a new task..."
        className="todo-input"
      />
      <button onClick={handleAdd} className="add-button">
        Add
      </button>
    </div>
  )
}

export default TodoInput
