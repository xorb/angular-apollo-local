import { createAddTodo, createDeleteTodo, createEditTodo, createCompleteTodo } from './mutations'
import { todosVar } from '../../cache'

export const todoMutations = {
  addTodo: createAddTodo(todosVar),
  deleteTodo: createDeleteTodo(todosVar),
  editTodo: createEditTodo(todosVar),
  completeTodo: createCompleteTodo(todosVar),
}
