import { Component } from 'angular2/core';
import { HTTP_PROVIDERS } from 'angular2/http';
import 'rxjs/Rx';   // Load all features
import { ROUTER_PROVIDERS, RouteConfig, ROUTER_DIRECTIVES } from 'angular2/router';

import { HomeComponent } from './components/home/home.component';
import { CourseListComponent } from './components/courses/course-list.component';
import { CourseDetailComponent } from './components/courses/course-detail.component';
import { CourseService } from './components/courses/Course.service';

@Component({
    selector: 'cr-app',
    template: `
    <div>
        <nav class='navbar navbar-default'>
            <div class='container-fluid'>
                <a class='navbar-brand'>{{pageTitle}}</a>
                <ul class='nav navbar-nav'>
                    <li><a [routerLink]="['Home']">Home</a></li>
                    <li><a [routerLink]="['Courses']">Courses</a></li>
                </ul>
            </div>
        </nav>
        <div class='container'>
            <router-outlet></router-outlet>
        </div>
     </div>
     `,
    directives: [ROUTER_DIRECTIVES],
    providers: [CourseService,
                HTTP_PROVIDERS,
                ROUTER_PROVIDERS]
})
@RouteConfig([
    { path: '/home', name: 'Home', component: HomeComponent, useAsDefault: true },
    { path: '/courses', name: 'Courses', component: CourseListComponent },
    { path: '/course/:id', name: 'CourseDetail', component: CourseDetailComponent }
])
export class AppComponent {
    pageTitle: string = 'Angular Js Courses';
}
