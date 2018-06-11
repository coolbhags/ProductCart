import { Component, OnInit, OnChanges, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-star',
  templateUrl: './star.component.html',
  styleUrls: ['./star.component.css']
})
export class StarComponent implements OnChanges {
  ngOnChanges(): void {
    this.starWidth = this.rating * 86/5;
  }
  @Input() rating: number = 4;
  starWidth: number;


  constructor()
  {
      
  }

  @Output() ratingClicked: EventEmitter<string> = new EventEmitter<string>();

  MyClick()
  {
    console.log(`This rating ${ this.rating} was clicked`);
  }
}
