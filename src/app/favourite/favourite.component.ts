import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-favourite',
  templateUrl: './favourite.component.html',
  styleUrls: ['./favourite.component.css']
})
export class FavouriteComponent implements OnInit {

  @Input('isFavourite') isFavourite: boolean;

  constructor() { }

  ngOnInit(): void {
  }

  onClick(){
    this.isFavourite = !this.isFavourite;
  }

}
