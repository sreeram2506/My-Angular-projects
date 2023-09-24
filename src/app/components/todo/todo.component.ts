import { Component } from '@angular/core';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent {
  newTask = '';
  tasks: { title: string; completed: boolean ;}[] = [];

  addTask() {
    if (this.newTask.trim() !== '') {
      this.tasks.push({ title: this.newTask, completed: false });
      this.newTask = '';
      console.log(this.tasks)
      
    }
  }

  removeTask(index: number) {
    this.tasks.splice(index, 1);
    
  }

  toggleComplete(index: number) {
    this.tasks[index].completed = !this.tasks[index].completed;
  }

  loclhostfn(){

  }
}
