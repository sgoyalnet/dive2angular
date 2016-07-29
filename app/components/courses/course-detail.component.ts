import {Component, OnInit} from "angular2/core";
import {RouteParams, Router} from "angular2/router";

import {CourseService} from "./Course.service";
import {ICourse} from "./ICourse";
import {StarComponent} from "../../shared/widgets/stars/Star.component";
import {CustomDatePipe} from "../../shared/pipes/CustomDate.pipe";

@Component ({
  templateUrl: "app/components/courses/course-detail.component.html",
  styleUrls: ["app/components/courses/course-detail.component.css"],
  directives: [StarComponent],
  pipes: [CustomDatePipe]
})
export class CourseDetailComponent implements OnInit {
  courseId = 0;
  constructor (private _routeParams: RouteParams, private _courseService: CourseService, private _router: Router){}
  course: ICourse;

  ngOnInit (): void {
    this.courseId = +this._routeParams.get("id");
    this.course = this._courseService.getCourse (this.courseId);
    console.log (this.course);
  }

  back ():void {
    this._router.navigate(['Courses']);
  }

}
