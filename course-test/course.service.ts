import { Injectable } from '@angular/core';
import { catchError, Observable, of, tap } from 'rxjs';
import { Course } from './course';
import { MessageService } from './message.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CourseService {

  private coursesUrl = 'http://localhost:3333/courses';
  private httpOptions = {
    headers: new HttpHeaders({
      'ContentType': 'application/json',
    })
  }

  constructor(
    private messageService: MessageService,
    private http: HttpClient,
  ) { }
  
  private log(message: string): void {
    this.messageService.add(`[CourseService]: 
      ${new Date().toLocaleDateString()} : ${message}`);
  }

  private handleError<T>(method = "method", result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      this.log(`El método ${method} ha fallado: ${error.message}`);
      return of(result as T);
    }
  }

  getCourses(): Observable<Course[]> {
    return this.http.get<Course[]>(this.coursesUrl)
      .pipe(
        tap(_ => this.log("Los cursos fueron cargados.")),
        catchError(this.handleError<Course[]>("getCourses", []))
      );
  }

  getCourse(id: number): Observable<Course> {
    const url = `${this.coursesUrl}/${id}`;
    return this.http.get<Course>(url)
      .pipe(
        tap(_ => this.log(`El curso de id= ${id} fue cargado.`)),
        catchError(this.handleError<Course>("getCourse"))
      );
  }

  updateCourse(course: Course): Observable<any> {
    const url = `${this.coursesUrl}/${course.id}`;
    return this.http.put<any>(url, course, this.httpOptions)
      .pipe(
        tap(_ => this.log(`El curso de id= ${course.id} fue actualizado.`)),
        catchError(this.handleError<Course>("updateCourse"))        
      );
  }

  deleteCourse(id: number): Observable<any> {
    const url = `${this.coursesUrl}/${id}`;
    return this.http.delete<any>(url, this.httpOptions)
      .pipe(
        tap(_ => this.log(`El curso de id= ${id} fue eliminado.`)),
        catchError(this.handleError<Course>("deleteCourse"))
      );
  }

  addCourse(course: Course): Observable<Course> {
    return this.http.post<Course>(this.coursesUrl, course, this.httpOptions)
      .pipe(
        tap((addedCourse: Course) => this.log(`Se agrego el curso de id= ${addedCourse.id}.`)),
        catchError(this.handleError<Course>("addCourse"))
      );
  }

  getCoursesInProgress(): Observable<Course[]> {
    let courses: Course[] = [];
    this.getCourses().subscribe(c => {
      for(let element of c) {
        if(element.active){
          courses.push(element);
        }
      }
    });
    return of(courses);
  }

}
