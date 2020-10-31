import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-favourite',
  templateUrl: './favourite.component.html',
  styleUrls: ['./favourite.component.css']
})
export class FavouriteComponent {

  @Input('isFavourite') isFavourite: boolean;
  @Output() change = new EventEmitter();

  onClick(){
    this.isFavourite = !this.isFavourite;
    this.change.emit({ newValue: this.isFavourite });
  }

}

export interface FavouriteChangedEventArgs{
  newValue: boolean
}
