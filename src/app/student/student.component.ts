import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Students } from '../model/student';
import { StudentService } from '../service/student.service';
import { StudentdialodComponent } from '../studentdialod/studentdialod.component';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.scss']
})
export class StudentComponent implements OnInit {
  
  students:Students[] = [];
  p: any

  displayedColumns: string[] = ['index', 'firstName', 'lastName', 'address','number','email','action'];
  dataSource!: MatTableDataSource<Students>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  // row!: Students;


  constructor(private studentService:StudentService, private studentdailog:MatDialog){}
  
  ngOnInit() {
    // this.studentService.getStudent().subscribe((data) =>{this.students =data} );
    this.getAllStudent();
  
  }

  getAllStudent(){
        this.studentService.getStudent ()
        .subscribe({
        next: (res)=>{
        this.dataSource = new MatTableDataSource (res) ;
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort
        },
        error:(err)=>{
        alert("error");
        }
      })
    }

  openDialog() {
    this.studentdailog.open(StudentdialodComponent, {
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

  editStudent(row:Students){

    this.studentdailog.open(StudentdialodComponent,{
      width:'30%',
      data:row
    });
    
  }

  deleteStudent(id : number){
    this.studentService.deleteStudent(id).subscribe({
      next:(res)=>{
        alert("Book Deleted Successfully");
        this.getAllStudent();
      }, error:()=>{
        alert("Error")
      }
    })
    
  }



}
