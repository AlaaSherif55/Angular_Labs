import { Component  ,Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
@Component({
  selector: 'app-section2',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './section2.component.html',
  styleUrl: './section2.component.css'
})
export class Section2Component {
  private tasks: string[] = [];
  private selectedTaskIndex: number | null = null;

  getTasks() {
    return this.tasks;
  }

  addTask(task: string) {
    this.tasks.push(task);
  }

  deleteTask(index: number) {
      this.tasks.splice(index, 1);
  }
}
