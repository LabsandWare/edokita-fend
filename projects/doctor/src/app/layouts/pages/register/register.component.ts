import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { mimeType } from './mime-type.validator';
import  NaijaStates  from 'naija-state-local-government';
import { MustMatch } from './must-match.validator';
import { DoctorService } from '../../doctor.service';

@Component({
  selector: 'app-register',
  moduleId: module.id,
  templateUrl: './register.component.html',
})
export class RegisterComponent implements OnInit {
  signupForm: FormGroup;
  imagePreview: string | ArrayBuffer;
  submitted = false;
  states = NaijaStates.all();
  lgas;
  startDate = new Date(1990, 0, 1);
  modes = [   
    {value: 'Male', display: 'Male'},
    {value: 'Female', display: 'Female'}];
    specs = [   
      {value: 'Family Physician', display: 'Family Physician'},
      {value: 'Internal Medicine Physician', display: 'Internal Medicine Physician'},
      {value: 'Pediatrician', display: 'Pediatrician'},
      {value: 'Obstetrician/Gynecologist ', display: 'Obstetrician/Gynecologist '},
      {value: 'Surgeon', display: 'Surgeon'},
      {value: 'Psychiatrist', display: 'Psychiatrist'},
      {value: 'Cardiologist', display: 'Cardiologist'},
      {value: 'Dermatologist', display: 'Dermatologist'},
    ];
    constructor(private formBuilder: FormBuilder, private doctorService: DoctorService, private router: Router) { }
    
    ngOnInit(): void {
      console.log(this.states)
      this.signupForm =this.formBuilder.group({
      firstName: new FormControl(null, {validators: [Validators.required, Validators.minLength(3)]}),
      lastName: new FormControl(null, {validators: [Validators.required, Validators.minLength(3)]}),
      email: new FormControl(null, {validators: [Validators.required, Validators.minLength(3)]}),
      gender: new FormControl(null, {validators: [Validators.required, Validators.minLength(3)]}),
      phone: new FormControl(null, {validators: [Validators.required, Validators.minLength(3)]}),
      address: new FormControl(null, {validators: [Validators.required, Validators.minLength(3)]}),
      country: new FormControl(null, {validators: [Validators.required, Validators.minLength(3)]}),
      state: new FormControl(null, {validators: [Validators.required, Validators.minLength(3)]}),
      city: new FormControl(null, {validators: [Validators.required, Validators.minLength(3)]}),
      speciality: new FormControl(null, {validators: [Validators.required, Validators.minLength(3)]}),
      aHospital: new FormControl(null, {validators: [Validators.required, Validators.minLength(3)]}),
      licenseId: new FormControl(null, {validators: [Validators.required, Validators.minLength(3)]}),
      licenseIssue: new FormControl(null, {validators: [Validators.required, Validators.minLength(3)]}),
      licenseExpiry: new FormControl(null, {validators: [Validators.required, Validators.minLength(3)]}),
      why: new FormControl(null, {validators: [Validators.required, Validators.minLength(3)]}),
      username: new FormControl(null, {validators: [Validators.required, Validators.minLength(3)]}),
      password: new FormControl(null, {validators: [Validators.required, Validators.minLength(3)]}),
      cPassword: new FormControl(null, {validators: [Validators.required, Validators.minLength(3)]}),
      image: new FormControl(null, {validators: [Validators.required ],
        asyncValidators: [mimeType]}),
    },{validator: MustMatch('password','cPassword')})
  }
  onImagePicked(event: Event) {
    const file = (event.target as HTMLInputElement).files[0];
    this.signupForm.controls['image'].setValue(file)
    this.signupForm.get('image').updateValueAndValidity();
    const reader = new FileReader();
    reader.onload = () => {
        this.imagePreview = reader.result;
    };
    reader.readAsDataURL(file);
}
get f() { return this.signupForm.controls; }
  onSignup() {
    this.submitted = true;
    console.log(this.signupForm.value)
    if (this.signupForm.invalid) {
      console.log('hi');
      setTimeout(() => {
        this.submitted = false
        }, 500);
      return;
  }
  this.doctorService.signup(this.signupForm.value.firstName, this.signupForm.value.lastName, this.signupForm.value.email, this.signupForm.value.gender, this.signupForm.value.phone,
    this.signupForm.value.address, this.signupForm.value.country,this.signupForm.value.city, this.signupForm.value.speciality,
    this.signupForm.value.aHospital,this.signupForm.value.licenseId,this.signupForm.value.licenseIssue,this.signupForm.value.licenseExpiry,this.signupForm.value.state,
    this.signupForm.value.image,this.signupForm.value.why,this.signupForm.value.username,this.signupForm.value.password, this.signupForm.value.cPassword).subscribe((res: any)=>{
      console.log(res)
      if (res.status === 'Success') {
        this.router.navigate(['/'])
       }else{
         this.router.navigate(['/doctor/register'])
      }
    })
  }
  onState(event){
    const state = event.srcElement.value
    this.lgas = NaijaStates.lgas(state);
    console.log( this.lgas)
  }
}
