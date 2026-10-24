import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MarksOfStudentsComponent } from './marks-of-students/marks-of-students.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,MarksOfStudentsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'עולם התלמידים';
  acceptedTerms = false;
}
