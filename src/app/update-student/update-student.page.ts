import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { __param } from 'tslib';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-update-student',
  templateUrl: './update-student.page.html',
  styleUrls: ['./update-student.page.scss'],
})
export class UpdateStudentPage implements OnInit {

  id: any;
  student_no: any;
  student_name: any;
  course: any;
  year: any;
  email: any;
  contact_no: any;
  address: any;

  constructor(private route : ActivatedRoute, private router: Router, private _apiService:ApiService) {
    this.route.params.subscribe((param:any)=>{
      this.id = param.id;
      console.log(this.id);
      this.getStudent(this.id);
    })
   }

  ngOnInit() {
  }

  getStudent(id){
    this._apiService.getStudent(id).subscribe((res:any)=>{
      console.log("Success", res);
      let student = res [0];
      this.student_no = student.student_no;
      this.student_name = student.student_name;
      this.course = student.course;
      this.year = student.year;
      this.email = student.email;
      this.contact_no = student.contact_no;
      this.address = student.address;
    }, (err:any)=>{
      console.log("Error", err);
    })
  }

  updateStudent(){
    let data={
    student_no: this.student_no,
    student_name: this.student_name,
    course: this.course,
    year: this.year,
    email: this.email,
    contact_no: this.contact_no,
    address: this.address
    }
    this._apiService.updateStudent(this.id,data).subscribe((res:any)=>{
      console.log("Success", res);
      alert("Successfully Updated!");
      this.router.navigateByUrl('/home');
    },(err:any)=>{
      console.log("Error Updating!", err);
    })
  }

}
