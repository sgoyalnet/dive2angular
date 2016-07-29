import {Injectable} from "angular2/core";
import {ICourse} from "./ICourse";

@Injectable()
export class CourseService {
  private courses:ICourse[] = [
    {
      courseId:1,
      name : "The Journey from MVC to Angular",
      description:"Speeding up your MVC or web form applications is always worthwhile, but seldom easy. However, you can use Angular to make this process easier. In this course, The Journey from MVC to Angular, you're going to learn to slowly convert an MVC webpage to use Angular for all your searching, listing, adding, editing, deleting, and validation of data. First, you'll learn why you need more client side code and how it can benefit you. Then, you'll learn how to add, edit, and delete without postbacks. Finally you'll learn some tips and trick on the validation of data. By the end of this course you'll feel comfortable using Angular to handle standard web page functionality.",
      author : "Paul D. Sheriff",
      level : "Beginner",
      rating : 3,
      image: "app/assets/images/AngularJS-Flat-Icon-Vector.png",
      createdOn : "2016-07-21"
    },
    {
      courseId:2,
      name : "Angular 2: First Look",
      description:"This course is a gentle introduction to the changes that Angular 2 brings, how they compare to Angular 1, and provides an understanding of the architecture and how the core concepts work together to build applications. You will learn how your Angular 1 skills translate and prepare you to build Angular 2 applications. Code samples focus on specific features including Angular 2 components, templates directives, data binding syntax, modules, dependency injection, routing, Http, pipes, and services. All samples are written in TypeScript and run live on the web where you can see and edit them with a click of a button; no setup required.",
      author : "John Papa",
      level : "Intermediate",
      rating : 5,
      image: "app/assets/images/angularjs-hero.jpg",
      createdOn : "2016-04-01"
    }
  ];

  getCourses (): ICourse[] {
    return this.courses;
  }

  getCourse (id:number):ICourse {
    let course:ICourse;
    course = this.courses.filter((course)=>course.courseId === id)[0];
    return course;
  }
}
