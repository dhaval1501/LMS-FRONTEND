import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef,MAT_DIALOG_DATA } from '@angular/material/dialog';
import { BookComponent } from '../book/book.component';
import { Books } from '../model/books';
import { BookService } from '../service/book.service';


@Component({
  selector: 'app-bookdialog',
  templateUrl: './bookdialog.component.html',
  styleUrls: ['./bookdialog.component.scss']
})
export class BookdialogComponent implements OnInit{

  bookForm !:FormGroup;

  bookComponent !: BookComponent;

  actionBtn : string="Save";

  name : string="Add";

  constructor(private fromBuilder :FormBuilder,
    private bookService:BookService,
    @Inject(MAT_DIALOG_DATA) public editData:Books,
    private dialogRef:MatDialogRef<BookdialogComponent>){

  }

  ngOnInit(): void{
    this.bookForm=this.fromBuilder.group({
      name : ['',Validators.required],
      author :['',Validators.required],
      availableQuantity :['',Validators.required],
      totalQuantity :['',Validators.required]
    })
    if(this.editData){
      this.actionBtn="Update";
      this.name="Update";
      this.bookForm.controls['name'].setValue(this.editData.name);
      this.bookForm.controls['author'].setValue(this.editData.author);
      this.bookForm.controls['availableQuantity'].setValue(this.editData.availableQuantity);
      this.bookForm.controls['totalQuantity'].setValue(this.editData.totalQuantity);
    }
    
  }

  addBook(){
   if(!this.editData){
    if(this.bookForm.valid){
      // console.log(this.bookForm.value);
  
      this.bookService.addBook(this.bookForm.value).subscribe({
        next:(res)=>{
          alert("Book Added Successfully");
          this.bookForm.reset();
          location.reload();
          this.dialogRef.close('save');
        },
        error:()=>{
          alert("Error")
        }
      })
    }
   }else{
    this.updateBook();
   }
  }
  updateBook(){
    this.bookService.updateBook(this.bookForm.value,this.editData.id).subscribe({
      next:(res)=>{
        alert("Book Updated Successfully");
        this.bookForm.reset();
        location.reload();
        this.dialogRef.close('update');
      }, error:()=>{
        alert("Error")
      }
    })
  }

}
