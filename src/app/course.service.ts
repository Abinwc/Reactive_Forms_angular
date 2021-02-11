import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CourseService {
  addCourses(data): any {
    const httpOptions={
      headers:{
        "Content-Type":"application/json"
      }
    }
    return this.http.post("http://localhost:5000/courses",data,httpOptions)
  }

  constructor(private http: HttpClient) { }

  getCourse(){
    const headers = new HttpHeaders({ 'Content-Type': 'text/plain'});  
    return this.http.get("http://localhost:5000/courses", {responseType: 'text', headers});  
  }  

  
}
