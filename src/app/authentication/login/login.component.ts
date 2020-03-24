import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormControlName } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  isLoading: boolean = false;
  constructor(private router: Router) { }

  ngOnInit(): void {
    this.loginForm = new FormGroup({
      username: new FormControl(null,{validators: [Validators.required]}),
      password: new FormControl(null,{validators: [Validators.required]})
    })
  }
  onSubmit() {
    console.log('you clicked')
    if (this.loginForm.invalid){
      return;
    }
    this.isLoading = true;
    switch (this.loginForm.value.username) {
      case 'admin':
        this.router.navigate(['/admin'])
        break;
      case 'hospital':
        this.router.navigate(['/hospital'])
        break;
      case 'patient':
        this.router.navigate(['/patient'])
        break;
      case 'pharmacy':
        this.router.navigate(['/pharmacy'])
        break;
      case 'lab':
        this.router.navigate(['/lab'])
        break;
      case 'doctor':
        this.router.navigate(['/doctor/main'])
        break;
      default:
        break;
    }
  }

}
