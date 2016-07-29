import {Component, Input, OnChanges, Output, EventEmitter} from 'angular2/core';

@Component({
  selector: "star",
  templateUrl:"app/shared/widgets/stars/Star.component.html",
  styleUrls: ["app/shared/widgets/stars/Star.component.css"]
})
export class StarComponent implements OnChanges {
  starWidth = 0;
  @Input() rating: number;
  @Output() ratingClicked: EventEmitter<string> =
        new EventEmitter<string>();

  ngOnChanges (): void {
    this.starWidth = this.rating * 86 / 5;
  }

  onClick(): void {
        this.ratingClicked.emit(`The rating ${this.rating} was clicked!`);
  }
}
