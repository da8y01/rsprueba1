import {Component, OnInit} from '@angular/core';
import {Student} from './student/student';
import {StudentService} from './student/student-service.service';
import {Router} from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'Students';
  students: Student[];

  constructor(private router: Router, private studentService: StudentService) {
  }

  getStudents() {
    this.studentService.getStudents().subscribe(data => {
      this.students = data;
    });
  }

  addStudent(): void {
    this.router.navigate(['add-student'])
      .then((e) => {
        if (e) {
          console.log("Navigation is successful!");
        } else {
          console.log("Navigation has failed!");
        }
      });
  };

  // -- Add a Delete Book function and deleteAllowed function to support your new HTML
  deleteStudent(student) {
    console.log("deleteStudent");
    this.studentService.deleteStudent(student.id).subscribe({
      next(x) { console.log('got value ' + x); },
      error(err) { console.error('something wrong occurred: ' + err); },
      complete() { console.log('done'); }
    });
  };

  // deleteAllowed() { return this.splitIoService.isTreatmentOn('allow-delete'); }

  ngOnInit(): void {
    console.log("ngOnInit");
    this.router.events.subscribe(value => {
      this.getStudents();
    });
  }
}