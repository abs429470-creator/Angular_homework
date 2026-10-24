import { Component } from '@angular/core';
import { Marks } from '../Marks.interface';

@Component({
  selector: 'app-marks-of-students',
  standalone: true,
  imports: [],
  templateUrl: './marks-of-students.component.html',
  styleUrl: './marks-of-students.component.css'
})
export class MarksOfStudentsComponent {
  marks: Marks[] = [
    { subject: 'מתמטיקה', mark: 60 },
    { subject: 'מדעים', mark: 92 },
    { subject: 'היסטוריה', mark: 78 },
    { subject: 'אנגלית', mark: 59 },
    { subject: 'אמנות', mark: 95 }
  ];
  get averageMark():number{
    if(this.marks.length===0)return 0;
    let sumOfMarks =0;
    for (const item of this.marks){
      sumOfMarks+=item.mark;
    }
    return sumOfMarks/ this.marks.length;
  }
}
