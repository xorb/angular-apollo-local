import { ReactiveVar } from '@apollo/client/core'
import { Todo } from '../../interfaces'

function createAddTodo(todosVar: ReactiveVar<Todo[]>) {
  const createNewTodoId = (allTodos: Todo[]) => {
    return allTodos.reduce((maxId: number, todo: Todo) => Math.max(todo.id, maxId), -1) + 1
  }

  const createNewTodo = (text: string, allTodos: Todo[]) => {
    return { text, completed: false, id: createNewTodoId(allTodos) }
  }

  return (text: string) => {
    const allTodos = todosVar()
    todosVar(allTodos.concat([createNewTodo(text, allTodos)]))
  }
}

function createDeleteTodo(todosVar: ReactiveVar<Todo[]>) {
  return (id: number) => {
    const allTodos = todosVar()
    const filteredTodos = allTodos.filter((todo: Todo) => todo.id !== id)
    todosVar(filteredTodos)
  }
}

function createEditTodo(todosVar: ReactiveVar<Todo[]>) {
  return (id: number, text: string) => {
    let todosWithEditedTodo = todosVar().map((todo: Todo) => (todo.id === id ? { ...todo, text } : todo))

    todosVar(todosWithEditedTodo)
  }
}

function createCompleteTodo(todosVar: ReactiveVar<Todo[]>) {
  return (id: number) => {
    const allTodos = todosVar()
    todosVar(allTodos.map((t) => (t.id === id ? { ...t, completed: !t.completed } : t)))
  }
}

export { createAddTodo, createDeleteTodo, createEditTodo, createCompleteTodo }
