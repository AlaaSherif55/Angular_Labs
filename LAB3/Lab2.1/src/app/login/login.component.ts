import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink,RouterLinkActive } from '@angular/router';
@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule,RouterLink,RouterLinkActive],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  LoginForm = {
    email: "",
    password: "",
  }
  handleFormSubmit(form : any){
    console.log(form)
    console.log(this.LoginForm)
  }
}
