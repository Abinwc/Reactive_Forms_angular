import { Component, OnInit } from '@angular/core';
import { CourseService } from '../course.service';
import { FormBuilder,FormGroup} from "@angular/forms";

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit {
  response: any;
  courses: any;
  courseDetails: FormGroup;

  constructor(private CS: CourseService, private FB: FormBuilder) { }

  ngOnInit(): void {
    this.courseDetails = this.FB.group({
      courseName:'',
      mentorName:'',
      duration:''
    })
  }

  getCourse(){
   
    this.courses= this.CS.getCourse();
    this.courses.subscribe(val=>console.log(val))
    
  }

  addCourses(){
    const data={
      mentorName: "Rexilia Mary",
      courseName: "Angular",
      duration: 3
    }
    console.log(this.courseDetails.value)
    this.response= this.CS.addCourses(this.courseDetails.value);
    this.response.subscribe(val=> console.log(val))
  }
}
