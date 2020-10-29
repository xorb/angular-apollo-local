import { InMemoryCache, makeVar, ReactiveVar } from '@apollo/client/core'
import { Todo } from './interfaces'

export const cache = new InMemoryCache({
  typePolicies: {
    Query: {
      fields: {
        todos: {
          read: () => todosVar(),
        },
      },
    },
  },
})

const todosInitialValue: Todo[] = [
  {
    id: 0,
    completed: false,
    text: 'Set store with angular',
  },
]

export const todosVar: ReactiveVar<Todo[]> = makeVar<Todo[]>(todosInitialValue)
