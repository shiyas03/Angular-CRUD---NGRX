import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { Profile, User } from '../modules/store/user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private apiUrl: string = 'http://localhost:3000';
  id!: string;
  constructor(private http: HttpClient) { }

  setId(id: string) {
    this.id = id;
  }

  registerUser(userData: any): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/register`, userData);
  }

  getUser(userData: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/login`, userData);
  }

  loginAdmin(userData: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/adminlogin`, userData);
  }

  fetchUserProfile(userId: any): Observable<Profile[]> {
    return this.http.get<Profile[]>(`${this.apiUrl}/profile?id=${userId}`)
  }

  fetchAllUsers(): Observable<User[]> {
    return this.http.get<User[]>(`${this.apiUrl}/fetchUsers`)
  }

  profileUpload(file: object, id: string | null) {
    return this.http.post(`${this.apiUrl}/image?id=${id}`, file)
  }

  profileDelete(id: string | null) {
    return this.http.delete(`${this.apiUrl}/imageDelete?id=${id}`)
  }

  deleteUser(id: string): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}/deleteUser?id=${id}`)
  }

  createNewUser(userData: any): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/create`, userData)
  }

  updateUser(userData: any): Observable<any> {
    return this.http.patch<any>(`${this.apiUrl}/update`, userData)
  }

}
