import { Component, Input, OnInit } from '@angular/core'
import { Todo } from 'src/app/interfaces'

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss'],
})
export class TodoComponent implements OnInit {
  @Input() todo: Todo
  @Input() deleteTodo: (id: number) => void
  @Input() editTodo: (id: number, text: string) => void
  @Input() completeTodo: (id: number) => void

  isEditing: boolean = false
  text: string = ''
  constructor() {}

  ngOnInit(): void {
    this.text = this.todo.text
  }

  onDoubleClick() {
    this.isEditing = true
  }

  onEdit() {
    this.isEditing = true
  }
  onSaveTodo() {
    this.editTodo(this.todo.id, this.text)
    this.text = ''
    this.isEditing = false
  }
  onCompleteTodo() {
    this.completeTodo(this.todo.id)
  }
}
