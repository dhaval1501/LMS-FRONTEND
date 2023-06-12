import { OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { BookdialogComponent } from '../bookdialog/bookdialog.component';
import { Books } from '../model/books';
import { BookService } from '../service/book.service';

import { Component, ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';


@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.scss'],
})
export class BookComponent implements OnInit {
  books: Books[] = [ ];
  p: any;

  displayedColumns: string[] = ['index', 'name', 'author', 'availableQuantity','totalQuantity','action'];
  dataSource!: MatTableDataSource<Books>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  // row: any;

  constructor(private bookservice: BookService, private bookdialog:MatDialog) {}

  ngOnInit() {
    this.getAllBook();
    // this.getAllProducts();
  }

  // getAllBook() {
  //   this.bookservice.getBooks().subscribe((data) => {
  //     this.books = data;
  
  //   });
  // }

  getAllBook(){
    this.bookservice.getBooks ()
    .subscribe({
    next: (res)=>{
    this.dataSource = new MatTableDataSource (res) ;
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort
    },
    error:(err)=>{
    alert
    }
  })
}
  
  openDialog() {
    this.bookdialog.open(BookdialogComponent, {
      width:'30%',
    });
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  editBook(row:Books){

    this.bookdialog.open(BookdialogComponent,{
      width:'30%',
      data:row
    });
    
  }

  deleteBook(id : number){
    this.bookservice.deleteBook(id).subscribe({
      next:(res)=>{
        alert("Book Deleted Successfully");
        this.getAllBook();
      }, error:()=>{
        alert("Error")
      }
    })
    
  }

  // applyFilter(event: Event) {
  //   const filterValue = (event.target as HTMLInputElement).value;
  //   this.dataSource.filter = filterValue.trim().toLowerCase();

  //   if (this.dataSource.paginator) {
  //     this.dataSource.paginator.firstPage();
  //   }
  // }
}
