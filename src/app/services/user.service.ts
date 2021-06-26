import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { page } from '../interfaces/users';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http:HttpClient) { }

  getUsers():Observable<page>{
    return this.http.get<page>('https://reqres.in/api/users?page=1');
  }
}
