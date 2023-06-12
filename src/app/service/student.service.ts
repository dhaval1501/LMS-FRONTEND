import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Students } from '../model/student';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  constructor(private http:HttpClient){ }

    

    private url:string = 'http://localhost:8080/student/all';
    private addUrl:string = 'http://localhost:8080/student/add';
    private updateUrl:string='http://localhost:8080/student/update/';
    private deleteUrl:string='http://localhost:8080/student/delete/';


    getStudent():Observable<Students[]>{
        return this.http.get<Students[]>(this.url);
    }

    addStudent(student : Students){
      return this.http.post<Students>(this.addUrl,student);
  }

  updateStudent(student : Students,id:number){
      return this.http.put<Students>(this.updateUrl+id,student);
  }

  deleteStudent(id: number){
      return this.http.delete<Students>(this.deleteUrl+id);
  }
}
