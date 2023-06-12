import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {  RouterModule, Routes } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { SidemenuComponent } from './sidemenu/sidemenu.component';
import { BookComponent } from './book/book.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { StudentComponent } from './student/student.component';
import { HttpClientModule} from '@angular/common/http'
import { BookService } from './service/book.service';
import { StudentService } from './service/student.service';
import { NgxPaginationModule } from 'ngx-pagination';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {matDialogAnimations, MatDialogModule} from '@angular/material/dialog';
import { BookdialogComponent } from './bookdialog/bookdialog.component';
import {matFormFieldAnimations, MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatTableModule} from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatSortModule} from '@angular/material/sort';
import { ButtonModule } from 'primeng/button';
import { StudentdialodComponent } from './studentdialod/studentdialod.component';



const routes: Routes = [ 
  { path:'book',component: BookComponent},
  { path:'student',component: StudentComponent},
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SidemenuComponent,
    BookComponent,
    StudentComponent,
    BookdialogComponent,
    BookdialogComponent,
    StudentdialodComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ButtonModule,
    RouterModule.forRoot(routes),
    HttpClientModule,
    NgxPaginationModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatButtonModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    FormsModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,

  ],
  providers: [BookService,StudentService],
  bootstrap: [AppComponent]
})
export class AppModule { }
