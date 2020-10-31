import { Component } from '@angular/core';
import { FavouriteChangedEventArgs } from './favourite/favourite.component'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular app';
  post = {
    title: "Title",
    isFavourite: true
  }
  viewMode = 'something else';
  canSave = true;

  courses = [
    {id: 1, name: 'course1'},
    {id: 2, name: 'course2'},
    {id: 3, name: 'course3'},
  ];

  coursesFromServer;

  onFavouriteChanged(eventArgs: FavouriteChangedEventArgs){
    console.log("Favourite changed: ", eventArgs);
  }

  onAdd(){
    this.courses.push({id: 4, name: 'course4'});
  }

  onRemove(course){
    let index = this.courses.indexOf(course);
    this.courses.splice(index, 1);
  }

  onChange(course){
    course.name="UPDATED";
  }

  loadCoursesFromServer(){
    this.coursesFromServer = [
      {id: 1, name: 'course1'},
      {id: 2, name: 'course2'},
      {id: 3, name: 'course3'},
    ];
  }

  trackCourse(index, course){
    return course ? course.id : undefined;
  }

}
