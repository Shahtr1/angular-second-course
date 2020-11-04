import {
  HttpClient
} from '@angular/common/http';
import {
  Component,
  OnInit
} from '@angular/core';
import {
  Observable
} from 'rxjs';
import {
  User,
  UserService
} from './users.service';

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.css']
})
export class CarsComponent implements OnInit {


  users$: Observable < User[] > ;



  constructor(private userService: UserService) {
    this.loadUsers()
  }

  ngOnInit(): void {}


  onClickDelete(id: number) {




    if (confirm("Are you sure?")) {
      this.userService.deleteUser(id).subscribe(resp => {
        alert("user deleted");
        this.loadUsers();
      })


    }



  }


  onClickUpdate(user: User) {
    user.name = "Shahrukh";

    this.userService.updateUser(user).subscribe(resp => {
      this.loadUsers();
    })
  }

  onClickAdd(): void {
    let user: User = {
      name: "Sameer",
      email: "sadsad@qwaesad.com",
      username: "ASdsad"
    };

    this.userService.createUser(user).subscribe(resp => {
      this.loadUsers();
    })

  }



  loadUsers() {
    this.users$ = this.userService.getUsers();
  }
}
