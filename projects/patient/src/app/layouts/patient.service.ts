import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class PatientService {
  baseApi = environment.baseApi;
  constructor(private http: HttpClient, private router: Router) { }
  signup(FirstName: string, LastName: string, Email: string, Gender: string,
    Phone: string, Address: string, Country: string, City: string, State: string, Username: string, Password:string, cPassWord:string) {
      const signupData  = new FormData();
      signupData.append('firstname', FirstName)
      signupData.append('lastname', LastName)
      signupData.append('email', Email)
      signupData.append('username', Username)
      signupData.append('gender', Gender)
      signupData.append('country', Country)
      signupData.append('city', City)
      signupData.append('address', Address)
      signupData.append('state', State)
      signupData.append('phone', Phone)
      signupData.append('password', Password)
      signupData.append('password_confirmation', cPassWord)
    return this.http.post(this.baseApi+'signup', signupData)
  }
}

