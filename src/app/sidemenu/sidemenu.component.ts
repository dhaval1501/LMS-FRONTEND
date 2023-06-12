import { Component, OnInit } from '@angular/core';
import {  Router } from '@angular/router';

@Component({
  selector: 'app-sidemenu',
  templateUrl: './sidemenu.component.html',
  styleUrls: ['./sidemenu.component.scss']
})
export class SidemenuComponent implements OnInit {

  constructor(private router : Router){}

  ngOnInit(): void {
    
  }

  listOfBooks(){
    this.router.navigate(['/book'])
  }
  listOfStudents(){
    this.router.navigate(['/student'])
  }
}
