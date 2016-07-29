import { PipeTransform, Pipe } from "angular2/core";
import { DatePipe } from "angular2/common";

@Pipe ({
  name :'datefilter'
})
export class CustomDatePipe implements PipeTransform {
  transform (value:string, args:string[]):string {
    return new DatePipe().transform(new Date (value));
  }
}
