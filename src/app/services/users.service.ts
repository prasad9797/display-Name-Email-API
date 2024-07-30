import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Result, User } from '../interfaces/user';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  private readonly apiURL = 'https://reqres.in/api/users';
  constructor(private http: HttpClient) {}

  getUsers(): Observable<User[]> {
    return this.http
      .get<Result>(this.apiURL)
      .pipe(map((response: Result) => response.data));
  }
}
