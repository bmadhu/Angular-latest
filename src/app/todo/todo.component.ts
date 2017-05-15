import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
  todoItem:string = '';
  todoTasks = [];
  remainingTodos:number = 0;

  constructor() {

  }

  /**
   * Funciton called when User enters new todoItem and clicks enter.
   * push to todoTasks array and empty the todoItem entered
   * Increment the remainingTodos variable to display the number of todos left.
   */
  addTodoItems(event) {
    if(event.keyCode == 13) {
      this.todoTasks.push({todoTask: this.todoItem, completed: false});
      this.todoItem = '';
      this.remainingTodos += 1;
    }
  }

  /**
   * Function called when user selects/deselets the checkbox.
   * Get all the span items and add/remove style of drawing a line through the text
   * update remaining todos when checked/unchecked.
   * @param $event
   * @param selectedTask
   */
  onSelect($event, selectedTask) {
    var myElements = document.querySelectorAll("#todoSpan");
    this.remainingTodos = $event.target.checked ? (this.remainingTodos-1) : (this.remainingTodos+1);

      for(var i=0;i<this.todoTasks.length;i++) {
        if(this.todoTasks[i].todoTask == selectedTask) {
          $event.target.checked? myElements[i].classList.add('text-linethrough') : myElements[i].classList.remove('text-linethrough');
          this.todoTasks[i].completed = $event.target.checked;
        }
      }
  }

  /**
   * Function called when user removes the task by clicking on the cross button.
   * remove that particular item from todoTasks and update remainingTodos
   * @param selectedTask
   */
  removeTask (selectedTask) {
    var copyTodoTasks = [...this.todoTasks];
    for(var i=0;i<copyTodoTasks.length;i++) {
      if (copyTodoTasks[i].todoTask == selectedTask) {
        if(copyTodoTasks[i].completed == false) {
          this.remainingTodos -= 1;
        }
        copyTodoTasks.splice(i,1);
        break;
      }
    }
    this.todoTasks = [...copyTodoTasks];
  }

  ngOnInit() {
  }

}
