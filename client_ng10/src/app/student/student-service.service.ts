import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  private url = 'http://localhost:3000/students';

  constructor(private http: HttpClient) {
  }

  getStudents(): Observable<any> {
    return this.http.get(`${this.url}`);
  }

  addStudent(student: Object): Observable<Object> {
    return this.http.post(`${this.url}`, student);
  }

  deleteStudent(id: number): Observable<any> {
    console.log("deleteStudent");
    return this.http.delete(`${this.url}/${id}`, {responseType: 'text'});
  }
}