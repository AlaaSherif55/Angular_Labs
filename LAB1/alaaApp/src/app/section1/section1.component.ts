import { Component } from '@angular/core';

@Component({
  selector: 'app-section1',
  standalone: true,
  imports: [],
  templateUrl: './section1.component.html',
  styleUrl: './section1.component.css'
})
export class Section1Component {
    username: string='Alaa Sherif Fathi';
    image:string='https://i.pinimg.com/564x/3f/17/04/3f170420f471d78ee9467e0b2b9998c3.jpg';
    facebookLink: string = 'https://www.facebook.com/yourfacebookusername';
    contact(){
      window.location.href = this.facebookLink;
    }
}
