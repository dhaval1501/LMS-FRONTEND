import { Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef,MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Students } from '../model/student';
import { StudentService } from '../service/student.service';

@Component({
  selector: 'app-studentdialod',
  templateUrl: './studentdialod.component.html',
  styleUrls: ['./studentdialod.component.scss']
})
export class StudentdialodComponent {

  studentForm !:FormGroup;

  actionBtn:string="Save";

  name : string="Add";

  constructor(private fromBuilder :FormBuilder,
    private studentService:StudentService,
    @Inject(MAT_DIALOG_DATA) public editData:Students,
    private dialogRef:MatDialogRef<StudentdialodComponent>){

  }

  ngOnInit(): void{
    this.studentForm=this.fromBuilder.group({
      firstName : ['',Validators.required],
      lastName :['',Validators.required],
      address :['',Validators.required],
      number :['',Validators.required],
      email :['',Validators.required]
    })
    if(this.editData){
      this.actionBtn="Update";
      this.name="Update";
      this.studentForm.controls['firstName'].setValue(this.editData.firstName);
      this.studentForm.controls['lastName'].setValue(this.editData.lastName);
      this.studentForm.controls['address'].setValue(this.editData.address);
      this.studentForm.controls['number'].setValue(this.editData.number);
      this.studentForm.controls['email'].setValue(this.editData.email);
    }
  }

  addStudent(){
      if(!this.editData){
       if(this.studentForm.valid){
         // console.log(this.studentForm.value);
         this.studentService.addStudent(this.studentForm.value).subscribe({
           next:(res)=>{
             alert("Student Added Successfully");
             this.studentForm.reset();
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
       this.studentService.updateStudent(this.studentForm.value,this.editData.id).subscribe({
         next:(res)=>{
           alert("Student Updated Successfully");
           this.studentForm.reset();
           location.reload();
           this.dialogRef.close('update');
         }, error:()=>{
           alert("Error")
         }
       })
     }
}
