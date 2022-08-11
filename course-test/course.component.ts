import { Component, OnInit } from '@angular/core';
import { Course } from '../course';
import { CourseService } from '../course.service';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit {
  courses: Course[] = [];

  constructor(
    private courseService: CourseService,
  ) { }
  
  ngOnInit(): void {
    this.getCourses();
  }

  getCourses(): void {
    this.courseService.getCourses().subscribe(courses => {
      this.courses = courses;
    });
  }
  
  delete(course: Course): void {
    this.courseService.deleteCourse(course.id).subscribe((result) => {
      if(result){
        this.courses = this.courses.filter(c => c !== course);
      } else {
        alert('Internal Error: Su acción no fue completada.');
      }
    });
  }

  add(name: string): void {
    name = name.trim();
    if(!name) {
      return ;
    }
    this.courseService.addCourse({ name } as Course).subscribe((course) => {
      this.courses.push(course);
    })
  }

  inProgress(course: Course): void {
    course.active = true;
    this.courseService.updateCourse(course).subscribe();
  }

}