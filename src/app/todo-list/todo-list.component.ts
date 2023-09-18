import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent {

  taskArray = [{taskname:'Assignment' , isCompleted:false , editMode: false}]

  ngOnInit():void{

  
  try {
    const storedTasks = localStorage.getItem('taskArray');
    if (storedTasks) {
      this.taskArray = JSON.parse(storedTasks);
    }
  } catch (error) {
    console.error('Error reading tasks from localStorage:', error);
  }

  

  }

  onSubmit(form:NgForm){
    

    this.taskArray.push({
      taskname:form.controls['task'].value,
      isCompleted:false,
      editMode: false,

    })

    this.saveTasksToLocalStorage();

    form.reset()

  }

  onDelete(index: number) {
   
    this.taskArray.splice(index, 1);
    this.saveTasksToLocalStorage();
}


  // onCheck(index:number){
  //   console.log(this.taskArray)
  //   this.taskArray[index].isCompleted =! this.taskArray[index].isCompleted;
  // }
  onCheck(index: number, isCompleted: boolean) {
    this.taskArray[index].isCompleted = !isCompleted;
    this.saveTasksToLocalStorage();

}


  onEdit(index: number) {
    this.taskArray[index].editMode = !this.taskArray[index].editMode;
    this.saveTasksToLocalStorage();
  }

  private saveTasksToLocalStorage() {
    try {
      localStorage.setItem('taskArray', JSON.stringify(this.taskArray));
    } catch (error) {
      console.error('Error saving tasks to localStorage:', error);
    }
  }

}
