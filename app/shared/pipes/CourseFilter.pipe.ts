import { PipeTransform, Pipe } from "angular2/core";
import {ICourse} from '../../components/courses/ICourse';
@Pipe ({
  name :'coursefilter'
})
export class CourseFilterPipe implements PipeTransform {
  transform (value:ICourse[], args:string[]):ICourse[] {
    let filter: string = args[0] ? args[0].toLowerCase() : null;
    return filter ? value.filter ( (course:ICourse) => course.name.toLowerCase().indexOf(filter) !== -1 || course.author.toLowerCase().indexOf(filter) !== -1 ) : value;
  }
}
