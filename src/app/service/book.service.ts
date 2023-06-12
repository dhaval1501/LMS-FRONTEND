import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Books } from "../model/books";

@Injectable()
export class BookService{

    constructor(private http:HttpClient){ }


    private getAllUrl:string = 'http://localhost:8080/book/all';
    private addUrl:string = 'http://localhost:8080/book/add';
    private updateUrl:string='http://localhost:8080/book/update/';
    private deleteUrl:string='http://localhost:8080/book/delete/';

    getBooks():Observable<Books[]>{
        return this.http.get<Books[]>(this.getAllUrl);
    }

    addBook(book : Books){
        return this.http.post<Books>(this.addUrl,book);
    }

    updateBook(book : Books,id:number){
        return this.http.put<Books>(this.updateUrl+id,book);
    }

    deleteBook(id: number){
        return this.http.delete<Books>(this.deleteUrl+id);
    }

}