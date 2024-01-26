import { Component } from '@angular/core';
import Users from '../../../users.json';
@Component({
  selector: 'app-section2',
  standalone: true,
  imports: [],
  templateUrl: './section2.component.html',
  styleUrl: './section2.component.css'
})
export class Section2Component {
  users: any[] = Users;
      
}
