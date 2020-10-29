import { Component, OnInit } from '@angular/core'
import { Apollo } from 'apollo-angular'
import { GET_ALL_TODOS } from '../../graphql/queries'
import { todoMutations } from '../../graphql/mutations'
import { Todo } from '../../interfaces'

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss'],
})
export class TodosComponent implements OnInit {
  todos: Todo[] = []
  text: string = ''
  filter: string = 'all'
  addInput: boolean = false

  constructor(private apollo: Apollo) {}

  ngOnInit() {
    this.apollo
      .watchQuery({
        query: GET_ALL_TODOS,
      })
      .valueChanges.subscribe((result: any) => {
        this.todos = result.data.todos
      })
  }

  addTodo() {
    todoMutations.addTodo(this.text)
    this.addInput = false
    this.text = ''
  }

  deleteTodo(id: number) {
    todoMutations.deleteTodo(id)
  }

  addInputElement() {
    this.addInput = true
  }

  editTodo(id: number, text: string) {
    todoMutations.editTodo(id, text)
  }

  completeTodo(id: number) {
    todoMutations.completeTodo(id)
  }
}
