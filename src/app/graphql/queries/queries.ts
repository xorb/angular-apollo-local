import gql from 'graphql-tag'

export const GET_ALL_TODOS = gql`
  query GetAllTodos {
    todos @client {
      id
      text
      completed
    }
  }
`
