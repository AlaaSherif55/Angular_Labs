import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Section1Component } from './section1/section1.component';
import { Section2Component } from './section2/section2.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,Section1Component,Section2Component],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Lab2.1';
}
