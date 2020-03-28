import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, NgForm } from '@angular/forms';
import { AuthService } from '../auth.service';

@Component({
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
    form: FormGroup;
    submitted = false;
    constructor(public authService: AuthService) {}
    ngOnInit() {
        this.form = new FormGroup({
            Username: new FormControl(null, {validators: [Validators.required, Validators.minLength(3)]}),
            Password: new FormControl(null, {validators: [Validators.required, Validators.minLength(3)]})
        });
    }
    get f() {return this.form.controls;}
      onLogin() {
        this.submitted = true;
        if (this.form.invalid) {
            return;
        }
        this.authService.login(this.form.value.Username, this.form.value.Password);
    }
}
