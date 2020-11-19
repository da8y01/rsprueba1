import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {StudentService} from "../student-service.service";

@Component({
  selector: 'app-add-student',
  templateUrl: './add-student.component.html',
  styleUrls: ['./add-student.component.scss']
})
export class AddStudentComponent implements OnInit {

  constructor(private formBuilder: FormBuilder, private router: Router, private studentService: StudentService) {
  }

  addForm: FormGroup;

  ngOnInit() {
    this.addForm = this.formBuilder.group({
      id: [],
      fullname: ['', Validators.required],
      university: ['', Validators.required]
    });

  }

  onSubmit() {
    this.studentService.addStudent(this.addForm.value)
      .subscribe(data => {
        this.router.navigate(['list-students']);
      });
  }

}