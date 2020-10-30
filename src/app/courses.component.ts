import { Component } from '@angular/core';
import { CoursesService } from './courses.service';

@Component({
    selector: 'courses',
    // inputs: ['isCourses'],
    template: `
        <h2>{{ title }}</h2>
        <h2 [textContent]="title"></h2> <!-- Property Binding -->
        <ul>
            <li *ngFor="let course of courses">
                {{ course }}
            </li>
        </ul>

        <table>
            <tr>
                <td [attr.colspan]="colSpan"></td>
            </tr>
        </table>
        <div (click)="onDivClicked()">
            <button 
                [style.backgroundColor]="isActive ? 'blue' : 'white'" 
                class="btn btn-primary" 
                [class.active]="isActive"
                (click)="onSave($event)"
                >Save
            </button>
        <div>    

        <input [(ngModel)]="email" 
            (keyup.enter)="onKeyUp()" 
            type="text"/>
        <br/>
        {{ course.title | uppercase | lowercase}} <br/>
        {{ course.rating | number:'2.1-1' }} <br/>
        {{ course.students | number}} <br/>
        {{ course.price | currency:'INR':true:'3.2-2'}} <br/>
        {{ course.releaseDate | date:'shortDate'}} <br/>    

        {{ text | summary:10 }}

    `
})
export class CoursesComponent{
    title = "List of courses";
    courses;
    colSpan = 2;
    isActive = true;
    email = "me@example.com";


    text = `Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa iusto suscipit minus hic nobis repellat molestiae maiores commodi numquam voluptatibus. Iste pariatur facere fugit placeat corrupti veritatis veniam rerum inventore.`;

    course = {
        title: "The Complete Angular Course",
        rating: 4.9745,
        students: 30123,
        price: 190.95,
        releaseDate: new Date(2016, 3, 1)
    };

    onSave($event){
        $event.stopPropagation();
        console.log('button clicked', $event);
    }

    onDivClicked(){
        console.log('div clicked');
    }

    onKeyUp(){
        console.log(this.email);
    }

    constructor(service: CoursesService){
        this.courses = service.getCourses();
    }
}