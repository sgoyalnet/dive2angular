import { Component } from 'angular2/core';

import {CourseListComponent} from "../courses/course-list.component";

@Component ({
  templateUrl:"app/components/home/home.component.html",
  directives:[CourseListComponent]
})
export class HomeComponent {
  bannerUrl = "app/assets/images/angularjs-banner.png";
  bannerWidth = 800;
}
