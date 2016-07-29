import {Component,OnInit} from "angular2/core";
import { ROUTER_DIRECTIVES } from 'angular2/router';

import {CourseService} from "./Course.service";
import {ICourse} from "./ICourse";
import {CustomDatePipe} from "../../shared/pipes/CustomDate.pipe";
import {CourseFilterPipe} from "../../shared/pipes/CourseFilter.pipe";

import {StarComponent} from "../../shared/widgets/stars/Star.component";

@Component ({
  templateUrl : "app/components/courses/course-list.component.html",
  pipes : [CustomDatePipe, CourseFilterPipe],
  directives: [StarComponent, ROUTER_DIRECTIVES]
})
export class CourseListComponent implements OnInit {
  constructor (private _courseService: CourseService){}

  courses: ICourse[];

  ngOnInit ():void {
    this.courses = this._courseService.getCourses();
    console.log (this.courses);
  }

  onRatingClicked(message: string): void {
    alert (message);
  }
}
