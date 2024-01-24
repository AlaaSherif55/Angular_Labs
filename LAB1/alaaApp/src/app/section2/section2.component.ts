import { Component } from '@angular/core';

@Component({
  selector: 'app-section2',
  standalone: true,
  imports: [],
  templateUrl: './section2.component.html',
  styleUrl: './section2.component.css'
})
export class Section2Component {
    info:string='Lorem ipsum, dolor sit amet consectetur adipisicing elit. Provident eos quam qui laudantium doloribus mollitia, rerum quidem ut? Reiciendis eligendi odio nam praesentium quas voluptas unde labore veniam facilis dolor?';
    username:string='Alaa Sherif Sherif';
    image:string='https://i.pinimg.com/564x/3f/17/04/3f170420f471d78ee9467e0b2b9998c3.jpg';
    toggleAdditionalInfo() {
      var additionalInfo = document.getElementById("text");
      if(additionalInfo!=null){
        additionalInfo.innerText=`Lorem ipsum, dolor sit amet consectetur adipisicing elit. Provident eos quam qui laudantium doloribus mollitia, rerum quidem ut? Reiciendis eligendi odio nam praesentium quas voluptas unde labore veniam facilis \n \n dolor Lorem ipsum, dolor sit amet consectetur adipisicing elit. Provident eos quam qui laudantium doloribus mollitia, rerum quidem ut? Reiciendis eligendi odio nam praesentium quas voluptas unde labore veniam facilis dolor?Lorem ipsum, dolor sit amet consectetur adipisicing elit. Provident eos quam qui laudantium doloribus mollitia, rerum quidem ut? Reiciendis eligendi odio nam praesentium quas voluptas unde labore\n veniam facilis dolor?Lorem ipsum,dolor sit amet consectetur adipisicing elit. Provident eos quam qui laudantium doloribus mollitia, rerum quidem ut? Reiciendis eligendi odio nam praesentium quas voluptas unde labore veniam facilis dolor?`;
      }
    }
  }
