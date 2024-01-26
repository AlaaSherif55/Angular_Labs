import { Component, ViewChild, AfterViewInit } from '@angular/core';
import { Section1Component } from '../section1/section1.component';
import { Section2Component } from '../section2/section2.component';

@Component({
  selector: 'app-parent',
  standalone: true,
  imports: [Section1Component,Section2Component],
  templateUrl: './parent.component.html',
  styleUrl: './parent.component.css'
})
export class ParentComponent {
  taskFromSection1: string = '';
  @ViewChild(Section2Component) section2Component!: Section2Component;
  sendToSection2(task: string) {
    this.taskFromSection1 = task;
    this.section2Component.addTask(this.taskFromSection1);
  }

}
