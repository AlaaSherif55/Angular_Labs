import { Component, EventEmitter, Output  } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
@Component({
  selector: 'app-section1',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './section1.component.html',
  styleUrl: './section1.component.css'
})
export class Section1Component {
  newTask:string='';
  @Output() sentTaskToParent = new EventEmitter<string>();

  addTask() {
    this.sentTaskToParent.emit(this.newTask);
  }
}
