import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DoctorService {
  baseApi = environment.baseApi;
  constructor(private http: HttpClient, private router: Router) { }
  signup(FirstName: string, LastName: string, Email: string, Gender: string,
    Phone: string, Address: string, Country: string, City: string, Speciality: string,
    Ahospital:string, LicenseId: string, LicenseIssue: string, LicenseExpiry: string, State: string,
    Image: File, Why: string, Username: string, Password:string, cPassWord:string) {
      const signupData  = new FormData();
      signupData.append('firstname', FirstName)
      signupData.append('lastname', LastName)
      signupData.append('email', Email)
      signupData.append('username', Username)
      signupData.append('gender', Gender)
      signupData.append('speciality', Speciality)
      signupData.append('affliated_hospital', Ahospital)
      signupData.append('why', Why)
      signupData.append('country', Country)
      signupData.append('city', City)
      signupData.append('address', Address)
      signupData.append('state', State)
      signupData.append('phone', Phone)
      signupData.append('password', Password)
      signupData.append('password_confirmation', cPassWord)
      signupData.append('license_id', LicenseId)
      signupData.append('license_issue_date', LicenseIssue)
      signupData.append('license_expiry_date', LicenseExpiry)
      signupData.append('photo', Image)
    return this.http.post(this.baseApi+'signup/doctor', signupData)
  }
}
