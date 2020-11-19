import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AddStudentComponent} from "./student/add-student/add-student.component";

const routes: Routes = [
  {path: 'list-students', redirectTo: '/', pathMatch: 'full'},
  {path: 'add-student', component: AddStudentComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}